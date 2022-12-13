const filters = ({ departamento, municipio, productoServicio, busqueda, response }) => {
    console.log({ departamento, municipio, productoServicio, busqueda, response });
    if(departamento !== 'Todos' && departamento !== '') {
        response = response.filter(elem => elem.departamento === departamento.toUpperCase())
    }
    if(municipio !== 'Todos' && municipio !== '') {
        response = response.filter(elem => elem.municipio === municipio.toUpperCase())
    }
    if(productoServicio !== 'Todos' && productoServicio !== '') {
        response = response.filter(elem => elem.productoServicio === productoServicio.toUpperCase())
    }
    if(busqueda !== '') {
        response = response.filter(elem => elem.nombreEmprendimiento.toLowerCase().includes(busqueda.toLowerCase()))
    }
    return response
}

export default filters