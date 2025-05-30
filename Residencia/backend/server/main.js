const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Crear conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'brend',
    password: 'ContraseñaSegura123!',
    database: 'mi_base_de_datos'
});

// Establecer conexión a MySQL
connection.connect((err) => {
    if (err) {
        console.error("Error de conexión: " + err.stack);
        return;
    }
    console.log("Conexión exitosa");
});

// Definir ruta para consulta
app.get('/consulta', (req, res) => {
    connection.query("SELECT * FROM usuarios", (err, results) => {
        if (err) {
            console.error("Error al consultar usuarios: " + err.message);
            res.status(500).send("Error en el servidor");
            return;
        }
        res.status(200).json(results);
    });
});

app.post ('/guardar', (req,res) => {
    console.log(req.body);
    const usuario = req.body.usuario;
    const contraseña = req.body.contraseña;
    res.status(200).send('Recibido.');
});

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));

// Define una ruta explícita para la raíz ("/")
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Iniciar servidor
const PORT = 5001;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});