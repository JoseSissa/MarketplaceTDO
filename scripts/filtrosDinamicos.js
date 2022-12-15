const opcionesDep = document.getElementById('opciones-d')
const opcionesMun = document.getElementById('opciones-m')
const opcionesPS = document.getElementById('opciones-ps')

const trasnformarTexto = (texto) => {
    const primeraLetra = texto.toLowerCase().charAt(0).toUpperCase()
    return primeraLetra + (texto.slice(1).toLowerCase());
}

export default function filtrosDinamicos(filteredResponse, filtroSeleccionado) {
    let dep = []
    let mun = []
    let prodServ = []

    for (const elem of filteredResponse) {
        if(!dep.includes(elem.departamento.toLowerCase())) {
            dep.push(elem.departamento.toLowerCase())
        }
        if(!mun.includes(elem.municipio.toLowerCase())) {
            mun.push(elem.municipio.toLowerCase())
        }
        if(!prodServ.includes(elem.productoServicio.toLowerCase())) {
            prodServ.push(elem.productoServicio.toLowerCase())
        }
    }        
    const fragmentDep = document.createDocumentFragment()
    const fragmentMun = document.createDocumentFragment()
    const fragmentPS = document.createDocumentFragment()

    for (const elem of dep) {
        const botonOpcion = document.createElement('BUTTON')
        botonOpcion.innerText = `${trasnformarTexto(elem)}`
        fragmentMun.appendChild(botonOpcion)
    }

    opcionesDep.innerHTML = '<button value="todos">Todos</button>'
    opcionesDep.appendChild(fragmentMun)
    for (const elem of mun) {
        const botonOpcion = document.createElement('BUTTON')
        botonOpcion.innerText = `${trasnformarTexto(elem)}`
        fragmentMun.appendChild(botonOpcion)
    }
    opcionesMun.innerHTML = '<button value="todos">Todos</button>'
    opcionesMun.appendChild(fragmentMun)

    for (const elem of prodServ) {
        const botonOpcion = document.createElement('BUTTON')
        botonOpcion.innerText = `${trasnformarTexto(elem)}`
        fragmentPS.appendChild(botonOpcion)
    }
    opcionesPS.innerHTML = '<button value="todos">Todos</button>'
    opcionesPS.appendChild(fragmentPS)
    
}