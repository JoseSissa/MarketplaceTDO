const departamentos = document.getElementById("departamentos");
const municipios = document.getElementById("municipios");
const productoServicio = document.getElementById("producto-servicio");
const producto = document.getElementById('producto')
const servicio = document.getElementById('servicio')
const buscar = document.getElementById('buscar')

const changeStyles = (e) => {
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
const filtrarDepartamento = (departamento) => {
    console.log(departamento);
};
const filtrarMunicipio = (municipio) => {
    console.log(municipio);
};
const filtrarProductoServicio = (municipio) => {
    console.log(municipio);
};

window.addEventListener("click", (e) => {
    if (
        e.target.id !== "departamentos" &&
        e.target.id !== "municipios" &&
        e.target.id !== "producto-servicio"
    ) {
        departamentos.classList.remove("select-activate");
        departamentos.children[0].classList.remove("options-activate");
        municipios.classList.remove("select-activate");
        municipios.children[0].classList.remove("options-activate");
        productoServicio.classList.remove("select-activate");
        productoServicio.children[0].classList.remove("options-activate");
    }
});

departamentos.addEventListener("click", (e) => {
    if (e.target.localName === "div" && e.target.id === "departamentos") {
        municipios.classList.remove("select-activate");
        municipios.children[0].classList.remove("options-activate");
        productoServicio.classList.remove("select-activate");
        productoServicio.children[0].classList.remove("options-activate");
        changeStyles(e);
    }
    e.target.localName === "button" && selectOption(e, departamentos);
    // filtrarDepartamento(e.target.innerText)
});
municipios.addEventListener("click", (e) => {
    if (e.target.localName === "div" && e.target.id === "municipios") {
        departamentos.classList.remove("select-activate");
        departamentos.children[0].classList.remove("options-activate");
        productoServicio.classList.remove("select-activate");
        productoServicio.children[0].classList.remove("options-activate");
        changeStyles(e);
    }
    if (e.target.localName === "button") {
        selectOption(e, municipios);
        // filtrarMunicipio(e.target.innerText)
    }
});
productoServicio.addEventListener("click", (e) => {
    if (e.target.localName === "div" && e.target.id === "producto-servicio") {
        departamentos.classList.remove("select-activate");
        departamentos.children[0].classList.remove("options-activate");
        municipios.classList.remove("select-activate");
        municipios.children[0].classList.remove("options-activate");
        changeStyles(e);
    }
    if (e.target.localName === "button") {
        selectOption(e, productoServicio);
        // filtrarProductoServicio(e.target.innerText)
    }
});
producto.addEventListener('click', (e) => {
    console.log(e.target);
})
servicio.addEventListener('click', (e) => {
    console.log(e.target);
})
buscar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
})