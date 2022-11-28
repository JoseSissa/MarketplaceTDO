const departamentos = document.getElementById("departamentos");
const municipios = document.getElementById("municipios");
const productoServicio = document.getElementById("producto-servicio");
const buscar = document.getElementById('buscar');
const mostrarMas = document.getElementById('mostrar-mas');
const resultados = document.getElementById('resultados');

const requireData = async ({ filtro, tipoFiltro } = { filtro: "todos"}) => {
    console.log(filtro);
    const requestJson = await fetch('./data.json')
    const text = await requestJson.json()

    resultados.innerHTML = "";
    
    const fragment = document.createDocumentFragment()
    if(filtro !== "Todos") {
        const result = text.filter(elem => elem[tipoFiltro] === filtro)
        console.log(result);
        for (const elem of result) {
            const tarjeta = document.createElement('DIV')
            tarjeta.classList.add('tarjeta')
            tarjeta.innerHTML = `
                <img src="./assets/img/fondo-tarjeta.JPG" alt="Imagen de la asociación">
                <div>
                    <h4 class="tarjeta_nombre espacio">${elem.nombreGrupoFormalizado}</h4>
                    <p class="subtitulo espacio">${elem.descripcion}</p>
                    <button class="button"><img src="./assets/icons/download.svg" alt="Ícono de descarga"> Portafolio de productos</button>
                    <div class="contacto">
                        <div>
                            <p class="subtitulo">Contacto:</p>
                            <p class="subtitulo">${elem.celular}</p>
                        </div>
                        <div>
                            <a href="https://wa.me/+57${elem.whatsapp}" target="_blank"><img src="./assets/icons/whatsapp.svg" alt="Whatsapp ícono"></a>
                            <a href="https://${elem.correo}" target="_blank"><img src="./assets/icons/email.svg" alt="Email ícono"></a>
                            <a href="${elem.web}" target="_blank"><img src="./assets/icons/world.svg" alt="Página web ícono"></a>
                            <a href="${elem.facebook}" target="_blank"><img src="./assets/icons/facebook.svg" alt="Facebook ícono"></a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./assets/img/Logo.png" alt="logo pequeño">
                </div>
                `
            fragment.appendChild(tarjeta)
        }
    }else {
        console.log(text);
        for (const elem of text) {
            const tarjeta = document.createElement('DIV')
            tarjeta.classList.add('tarjeta')
            tarjeta.innerHTML = `
                <img src="./assets/img/fondo-tarjeta.JPG" alt="Imagen de la asociación">
                <div>
                    <h4 class="tarjeta_nombre espacio">${elem.nombreGrupoFormalizado}</h4>
                    <p class="subtitulo espacio">${elem.descripcion}</p>
                    <button class="button"><img src="./assets/icons/download.svg" alt="Ícono de descarga"> Portafolio de productos</button>
                    <div class="contacto">
                        <div>
                            <p class="subtitulo">Contacto:</p>
                            <p class="subtitulo">${elem.celular}</p>
                        </div>
                        <div>
                            <a href="https://wa.me/+57${elem.whatsapp}" target="_blank"><img src="./assets/icons/whatsapp.svg" alt="Whatsapp ícono"></a>
                            <a href="https://${elem.correo}" target="_blank"><img src="./assets/icons/email.svg" alt="Email ícono"></a>
                            <a href="${elem.web}" target="_blank"><img src="./assets/icons/world.svg" alt="Página web ícono"></a>
                            <a href="${elem.facebook}" target="_blank"><img src="./assets/icons/facebook.svg" alt="Facebook ícono"></a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="./assets/img/Logo.png" alt="logo pequeño">
                </div>
                `
            fragment.appendChild(tarjeta)
        }
    }
    resultados.appendChild(fragment)
            
}
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
    requireData({ filtro: departamento, tipoFiltro: "departamento" })
};
const filtrarMunicipio = (municipio) => {
    requireData({ filtro: municipio, tipoFiltro: "municipio" });
};
const filtrarProductoServicio = (productoServicio) => {
    console.log(productoServicio);
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
    if(e.target.localName === "button") {
        selectOption(e, departamentos);
        filtrarDepartamento(e.target.innerText)
    }
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
        filtrarMunicipio(e.target.innerText)
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
buscar.addEventListener('keyup', (e) => {
    console.log(e.target.value);
})
mostrarMas.addEventListener('click', (e) => {
    console.log('Mostrar más');
    // prueba()
    requireData()
})