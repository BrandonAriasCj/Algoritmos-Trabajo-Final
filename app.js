const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();

// Definir el arreglo global para almacenar productos
let productos = [];

// Configuración del motor de plantillas Handlebars
app.engine('hbs', exphbs());
app.set('view engine', 'hbs');

// Middleware para analizar datos de formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para mostrar el formulario de ingreso
app.get('/ingreso', (req, res) => {
    res.render('ingreso'); // Renderiza la vista del formulario de ingreso
});

// Ruta para manejar el guardado del producto
app.post('/guardar-producto', (req, res) => {
    const { nombre, categoria, fecha_expiracion, cantidad } = req.body;

    // Crear un nuevo producto y agregarlo al arreglo global
    const nuevoProducto = { nombre, categoria, fecha_expiracion, cantidad };
    productos.push(nuevoProducto); // Agrega el nuevo producto al arreglo global
    console.log('Producto guardado:', nuevoProducto); // Solo para ver en la consola

    // Redirigir a la lista de productos después de guardar
    res.redirect('/inventario'); 
});

// Ruta para mostrar el inventario
app.get('/inventario', (req, res) => {
    res.render('inventario', { productos }); // Renderiza la vista del inventario con los productos almacenados
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
