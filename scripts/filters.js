const removeAccents = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
const filters = ({ departamento, municipio, productoServicio, busqueda, response }) => {
    if(departamento !== 'todos' && departamento !== '') {
        response = response.filter(elem => elem.departamento.toLowerCase() === departamento.toLowerCase())
    }
    if(municipio !== 'todos' && municipio !== '') {
        response = response.filter(elem => elem.municipio.toLowerCase() === municipio.toLowerCase())
    }
    if(productoServicio !== 'todos' &&  productoServicio !== '') {
        response = response.filter(elem => elem.productoServicio.toLowerCase() === removeAccents(productoServicio).toLowerCase())
    }
    if(busqueda !== '') {
        response = response.filter(elem => elem.nombreEmprendimiento.toLowerCase().includes(busqueda.toLowerCase()))
    }
    return response
}
export default filters