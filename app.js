const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Almacén de Productos Perecibles', mensaje: 'Gestión de Almacén' });
});


app.get('/ingreso', (req, res) => {
    res.render('ingreso');
});

app.get('/inventario', (req, res) => {
    res.render('inventario');
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
