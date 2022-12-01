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

export default requireData