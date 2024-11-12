const express = require('express');
const bodyParser = require('body-parser'); // Importar body-parser
const hbs = require('hbs');
const app = express();

// Configurar la carpeta de vistas
app.set('views', __dirname + '/views');

// Configurar el motor de plantillas Handlebars
app.set('view engine', 'hbs');

// Middleware para analizar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Arreglo global para almacenar productos
let productos = [];

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index', { titulo: 'Almacén de Productos Perecibles', mensaje: 'Gestión de Almacén' });
});

// Ruta para mostrar el formulario de ingreso
app.get('/ingreso', (req, res) => {
    res.render('ingreso');
});

// Ruta para manejar el guardado del producto
app.post('/guardar-producto', (req, res) => {
    const { nombre, categoria, fecha_expiracion, cantidad } = req.body;

    // Asegúrate de que req.body no esté indefinido
    if (!req.body || !nombre || !categoria || !fecha_expiracion || !cantidad) {
        return res.status(400).send('Datos del producto no son válidos');
    }

    // Crear un nuevo producto y agregarlo al arreglo global
    const nuevoProducto = { nombre, categoria, fecha_expiracion, cantidad };
    productos.push(nuevoProducto);
    console.log('Producto guardado:', nuevoProducto);

    // Redirigir a la lista de productos después de guardar
    res.redirect('/inventario');
});

// Ruta para mostrar el inventario
app.get('/inventario', (req, res) => {
    res.render('inventario', { productos });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
