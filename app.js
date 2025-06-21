const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
    res.json({
        message: 'Aplicación desplegada con GitHub Actions y Azure',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});

// Endpoint para validar con Postman
app.get('/api/status', (req, res) => {
    res.json({
        status: 'OK',
        service: 'Azure App Service',
        deployment: 'GitHub Actions CI/CD',
        timestamp: new Date().toISOString()
    });
});

// Endpoint adicional para pruebas
app.get('/api/health', (req, res) => {
    res.status(200).json({
        health: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});