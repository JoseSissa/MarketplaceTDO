const filters = ({ departamento, municipio, productoServicio, busqueda, response }) => {
    if(departamento !== 'Todos' && departamento !== '') {
        response = response.filter(elem => elem.departamento === departamento)
    }
    if(municipio !== 'Todos' && municipio !== '') {
        response = response.filter(elem => elem.municipio === municipio)
    }
    if(productoServicio !== 'Todos' && productoServicio !== '') {
        response = response.filter(elem => elem.tipoProductoServicio === productoServicio)
    }
    if(busqueda !== '') {
        response = response.filter(elem => elem.nombreGrupoFormalizado.toLowerCase().includes(busqueda.toLowerCase()))
    }
    return response
}

export default filters