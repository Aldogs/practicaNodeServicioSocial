module.exports = (idLibro, tituloLibro, autoresLibro, editorialLibro, fechaLibro) => {
    
    let id = idLibro.valueOf()
    let titulo = tituloLibro.valueOf()
    let autores = autoresLibro.valueOf()    
    let editorial = editorialLibro.valueOf()
    let fecha = fechaLibro.valueOf()

    return {

        obtenerId: () => {
            return id
        },
        obtenerTitulo: () => {
            return titulo
        },
        obtenerAutor: () => {
            return autores
        },        
        obtenerEditorial: () => {
            return editorial
        },
        obtenerFecha: () => {
            return fecha
        },
        modificarTitulo: (nuevoTitulo) => {
            titulo = nuevoTitulo
        },
        modificarAutores: (nuevoAutor) => {
            autores = nuevoAutor
        },        
        modificarEditorial: (nuevaEditorial) => {
            editorial = nuevaEditorial
        },
        modificarFecha: (nuevaFecha) => {
            fecha = nuevaFecha
        },
        toString: () => {
            return `${titulo}: ${autores}, ${editorial}, ${fecha}`
        }
    
    }

}