const departamentos = document.getElementById('departamentos')
const municipios = document.getElementById('municipios')
const productoServicio = document.getElementById('producto-servicio')


const filtrarDepartamento = (departamento) => {
    console.log(departamento);
}
const filtrarMunicipio = (municipio) => {
    console.log(municipio);
}

// window.addEventListener('click', (e) => {
//     (e.target.id !== "departamentos" && e.target.id !== "municipios") && resetStyles()
// })

departamentos.addEventListener('click', (e) => {    
    if (e.target.localName === 'div' && e.target.id === 'departamentos') {
        municipios.classList.remove('select-activate')
        municipios.children[0].classList.remove('options-activate')
        productoServicio.classList.remove('select-activate')
        productoServicio.children[0].classList.remove('options-activate')
        e.target.classList.toggle('select-activate');
        e.target.children[0].classList.toggle('options-activate');
    }
    if(e.target.localName === 'button') {
        departamentos.children[1].innerText = e.target.innerText;
        departamentos.classList.remove('select-activate')
        departamentos.classList.add('option-selected')
        departamentos.children[0].classList.remove('options-activate')
        if(e.target.localName === 'button' && e.target.value === "todos") {
            departamentos.classList.remove('option-selected')
            departamentos.children[1].innerText = "";
        }            
        // filtrarDepartamento(e.target.innerText)
    }
})
municipios.addEventListener('click', (e) => {
    if(e.target.localName === 'div' && e.target.id === 'municipios') {
        departamentos.classList.remove('select-activate')
        departamentos.children[0].classList.remove('options-activate')
        productoServicio.classList.remove('select-activate')
        productoServicio.children[0].classList.remove('options-activate')
        e.target.classList.toggle('select-activate');
        e.target.children[0].classList.toggle('options-activate');
    }
    if(e.target.localName === 'button') {
        municipios.children[1].innerText = e.target.innerText;
        municipios.classList.remove('select-activate')
        municipios.classList.add('option-selected')
        municipios.children[0].classList.remove('options-activate')
        if(e.target.localName === 'button' && e.target.value === "todos") {
            municipios.classList.remove('option-selected')
            municipios.children[1].innerText = "";
        }
        // filtrarMunicipio(e.target.innerText)
    }
    
})
productoServicio.addEventListener('click', (e) => {
    if(e.target.localName === 'div' && e.target.id === 'producto-servicio') {
        departamentos.classList.remove('select-activate')
        departamentos.children[0].classList.remove('options-activate')
        municipios.classList.remove('select-activate')
        municipios.children[0].classList.remove('options-activate')
        e.target.classList.toggle('select-activate');
        e.target.children[0].classList.toggle('options-activate');
    }
    if(e.target.localName === 'button') {
        productoServicio.children[1].innerText = e.target.innerText;
        productoServicio.classList.remove('select-activate')
        productoServicio.classList.add('option-selected')
        productoServicio.children[0].classList.remove('options-activate')
        if(e.target.localName === 'button' && e.target.value === "todos") {
            productoServicio.classList.remove('option-selected')
            productoServicio.children[1].innerText = "";
        }
        // filtrarMunicipio(e.target.innerText)
    }
    
})