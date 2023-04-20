const modeloLibro = require('../modelos/libros.js')
var libros = {}

let id = 1

function generateUrl(titulo) {
    return `/libros/${titulo}`
}

module.exports = {
    crearLibro: (peticion, respuesta) => {
        if (libros[peticion.params.titulo] && libros[peticion.params.autores]) {
            respuesta.status(409).json({
                name: 'Libro existente',
                message: `Ya existe un libro con el titulo ${peticion.params.titulo} del autor ${peticion.params.autores}`
            })
            return
        }
        libros[peticion.params.titulo] = modeloLibro(
            id, peticion.params.titulo, peticion.params.autores, peticion.params.editorial, peticion.params.fecha
        )
        ++id
        let url = generateUrl(peticion.params.titulo)
        respuesta.status(201).send(url)
    },

    obtenerLibro: (peticion, respuesta) => {
        if(!libros[peticion.params.titulo]) {
            respuesta.status(404).json({
                name: 'Libro inexistente',
                message: `No existe ningún libro con el
                título ${peticion.params.titulo}`
            })
        }
        let lib = libros[peticion.params.titulo]
        respuesta.render('libros', {libros: lib})

    },

    obtenerLibroDetalle: (peticion, respuesta) => {
        if(!libros[peticion.params.titulo]) {
            respuesta.status(404).json({
                name: 'Libro inexistente',
                message: `No existe ningún libro con el
                título ${peticion.params.titulo}`
            })
        }
        let lib = libros[peticion.params.titulo]
        respuesta.render('detalle', {libros: lib})
    },

    obtenerLibroEditar: (peticion, respuesta) => {
        if(!libros[peticion.params.titulo]) {
            respuesta.status(404).json({
                name: 'Libro inexistente',
                message: `No existe ningún libro con el
                título ${peticion.params.titulo}`
            })
        }
        let lib = libros[peticion.params.titulo]
        respuesta.render('editar', {libros: lib})
    },

    borrarLibro: (peticion, respuesta) => {
        delete libros[peticion.params.titulo]
        let url = generateUrl(peticion.params.titulo)
        respuesta.send(url)
    },    

    editarLibro: (peticion, respuesta) => {
        delete libros[peticion.params.tituloAnt]
        libros[peticion.params.titulo] = modeloLibro(
            peticion.params.id, peticion.params.titulo, peticion.params.editorial, peticion.params.autores, peticion.params.fecha
        )
        let url = generateUrl(peticion.params.titulo)
        respuesta.status(201).send(url)
    }
}