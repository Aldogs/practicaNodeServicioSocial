const express = require('express')
const controladorLibros = require('../controladores/libros.js')
const router = express.Router()
router.get('/', (peticion, respuesta) => {
    respuesta.render('index')
})

router.get('/registro', (peticion, respuesta) => {
    respuesta.render('registro');
})

router.get('/libros', (peticion, respuesta) => {
    respuesta.render('libros');
})

router.get('/detalle', (peticion, respuesta) => {
    respuesta.render('detalle');
})

router.get('/editar', (peticion, respuesta) => {
    respuesta.render('editar');
})

router.get('/libros/:titulo', (peticion, respuesta) => {
    controladorLibros.obtenerLibro(peticion, respuesta)
})

router.get('/detalle/:titulo', (peticion, respuesta) => {
    controladorLibros.obtenerLibroDetalle(peticion, respuesta)
})

router.get('/editar/:titulo', (peticion, respuesta) => {
    controladorLibros.obtenerLibroEditar(peticion, respuesta)
})

router.post('/libros/:titulo/:autores/:editorial/:fecha', (peticion, respuesta) => {
    controladorLibros.crearLibro(peticion, respuesta)
})

router.delete('/libros/:titulo', (peticion, respuesta) => {
    controladorLibros.borrarLibro(peticion, respuesta)
})

router.post('/editar/:id/:tituloAnt/:titulo/:autores/:editorial/:fecha', (peticion, respuesta) => {
    controladorLibros.editarLibro(peticion, respuesta)
})

module.exports = router