import filters from './filters.js'
import createCards from './createCards.js'
import filtrosDinamicos from './filtrosDinamicos.js'

const departamentos = document.getElementById("departamentos");
const municipios = document.getElementById("municipios");
const productoServicio = document.getElementById("producto-servicio");
const buscar = document.getElementById('buscar');
const mostrarMasResultados = document.getElementById('mostrar-mas');
const resultados = document.getElementById('resultados');
const oculto = document.getElementById('oculto');
const limpiarFiltros = document.getElementById('limpiarFiltros');
// const copiarCorreo = document.getElementById('copiarCorreo');

let response = JSON.parse(oculto.value)
let filteredResponse = []
let page = 1
let prevPage = 0;
filteredResponse = filters({
    departamento: '',
    municipio: '',
    productoServicio: '',
    busqueda: '',
    response: JSON.parse(oculto.value)
})

createCards({ filteredResponse, page, prevPage })

const filtros = {
    departamentos: departamentos,
    municipios: municipios,
    productoServicio: productoServicio
}
const filtrarDepartamento = (departamento) => {
    page = 1
    filteredResponse = filters({
        departamento: departamento,
        municipio: municipios.children[1].innerText,
        productoServicio: productoServicio.children[1].innerText,
        busqueda: buscar.value,
        response
    })
    resultados.innerHTML = ""
    createCards({ filteredResponse, page: 1, prevPage: 0, resultados })
    filtrosDinamicos(filteredResponse, 'departamento')
};
const filtrarMunicipio = (municipio) => {
    page = 1
    filteredResponse = filters({
        departamento: departamentos.children[1].innerText,
        municipio: municipio,
        productoServicio: productoServicio.children[1].innerText,
        busqueda: buscar.value,
        response
    });
    resultados.innerHTML = ""
    createCards({ filteredResponse, page: 1, prevPage: 0, resultados })
    filtrosDinamicos(filteredResponse, 'municipio')
};
const filtrarProductoServicio = (productoServicio) => {
    page = 1
    filteredResponse = filters({
        departamento: departamentos.children[1].innerText,
        municipio: municipios.children[1].innerText,
        productoServicio: productoServicio,
        busqueda: buscar.value,
        response
    });
    resultados.innerHTML = ""
    createCards({ filteredResponse, page: 1, prevPage: 0, resultados })
    filtrosDinamicos(filteredResponse, 'productoServicio')
};
const changeStyles = (e, tipoFiltro) => {
    for (const elem of Object.keys(filtros)) {
        if(elem !==  tipoFiltro) {
            filtros[elem].classList.remove("select-activate");
            filtros[elem].children[0].classList.remove("options-activate");
        }
    }
    e.target.classList.toggle("select-activate");
    e.target.children[0].classList.toggle("options-activate");
};
const selectOption = (e, elem) => {
    elem.children[1].innerText = e.target.innerText;
    elem.classList.remove("select-activate");
    elem.classList.add("option-selected");
    elem.children[0].classList.remove("options-activate");
    if ((e.target.localName === "button" && e.target.innerText === "todos") || (e.target.localName === "button" && e.target.innerText === "Todos")) {
        elem.classList.remove("option-selected");
        elem.children[1].innerText = "";
    }
};
limpiarFiltros.addEventListener('click', () => {
    location.reload();
})
window.addEventListener("click", (e) => {
    if (
        e.target.id !== "departamentos" &&
        e.target.id !== "municipios" &&
        e.target.id !== "producto-servicio"
    ) {
        for (const elem of Object.keys(filtros)) {
            filtros[elem].classList.remove("select-activate");
            filtros[elem].children[0].classList.remove("options-activate");
        }
    }
});
departamentos.addEventListener("click", (e) => {
    (e.target.localName === "div" && e.target.id === "departamentos") && changeStyles(e, 'departamentos');
    if(e.target.localName === "button") {
        selectOption(e, departamentos);
        filtrarDepartamento((e.target.innerText).toLowerCase())
    }
});
municipios.addEventListener("click", (e) => {
    (e.target.localName === "div" && e.target.id === "municipios") && changeStyles(e, 'municipios');
    if (e.target.localName === "button") {
        selectOption(e, municipios);
        filtrarMunicipio((e.target.innerText).toLowerCase())
    }
});
productoServicio.addEventListener("click", (e) => {
    (e.target.localName === "div" && e.target.id === "producto-servicio") && changeStyles(e, 'productoServicio');
    if (e.target.localName === "button") {
        selectOption(e, productoServicio);
        filtrarProductoServicio((e.target.innerText).toLowerCase())
    }
});
buscar.addEventListener('keyup', (e) => {
    page = 1
    filteredResponse = filters({
        departamento: departamentos.children[1].innerText,
        municipio: municipios.children[1].innerText,
        productoServicio: productoServicio.children[1].innerText,
        busqueda: e.target.value,
        response
    });
    resultados.innerHTML = ""
    createCards({ filteredResponse, page: 1, prevPage: 0, resultados })
    // filtrosDinamicos(filteredResponse)
});
mostrarMasResultados.addEventListener('click', () => {
    if(filteredResponse.length > page*3) {
        prevPage = page * 9
        page++
        createCards({ filteredResponse, page, prevPage, resultados })
    }
});