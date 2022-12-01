import requireData from './data.js'

const departamentos = document.getElementById("departamentos");
const municipios = document.getElementById("municipios");
const productoServicio = document.getElementById("producto-servicio");
const buscar = document.getElementById('buscar');
const mostrarMas = document.getElementById('mostrar-mas');
const resultados = document.getElementById('resultados');

const filtros = {
    departamentos: departamentos,
    municipios: municipios,
    productoServicio: productoServicio
}

const filtrarDepartamento = (departamento) => {
    requireData({ filtro: departamento, tipoFiltro: "departamento" })
};
const filtrarMunicipio = (municipio) => {
    requireData({ filtro: municipio, tipoFiltro: "municipio" });
};
const filtrarProductoServicio = (productoServicio) => {
    requireData({ filtro: productoServicio, tipoFiltro: "municipio" });
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
    if (e.target.localName === "button" && e.target.value === "todos") {
        elem.classList.remove("option-selected");
        elem.children[1].innerText = "";
    }
};
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
        filtrarDepartamento(e.target.innerText)
    }
});
municipios.addEventListener("click", (e) => {
    (e.target.localName === "div" && e.target.id === "municipios") && changeStyles(e, 'municipios');
    if (e.target.localName === "button") {
        selectOption(e, municipios);
        filtrarMunicipio(e.target.innerText)
    }
});
productoServicio.addEventListener("click", (e) => {
    (e.target.localName === "div" && e.target.id === "producto-servicio") && changeStyles(e, 'productoServicio');
    if (e.target.localName === "button") {
        selectOption(e, productoServicio);
        filtrarProductoServicio(e.target.innerText)
    }
});


buscar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
})
mostrarMas.addEventListener('click', (e) => {
    console.log('Mostrar más');
    // prueba()
    // requireData()
})