const createCards = ({ filteredResponse = '', page = 1 } = { filteredResponse, page }) => {
    
    const trasnformarTexto = (texto) => {
        const primeraLetra = texto.toLowerCase().charAt(0).toUpperCase()
        return primeraLetra + (texto.slice(1).toLowerCase());
    }
    page = page * 3
    if(filteredResponse.length < page) {
        page = filteredResponse.length
    }

    const resultados = document.getElementById('resultados');
    resultados.innerHTML = "";
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < page; i++) {
        const tarjeta = document.createElement('DIV')
        tarjeta.classList.add('tarjeta')
        tarjeta.innerHTML = `
            <img src="./assets/img/fondo-tarjeta.JPG" alt="Imagen de la asociación">
            <div>
                <h4 class="tarjeta_nombre espacio">${filteredResponse[i].nombreEmprendimiento}</h4>
                <p class="subtitulo espacio descripcion">${trasnformarTexto(filteredResponse[i].descripcion)}</p>
                <button class="button"><img src="./assets/icons/download.svg" alt="Ícono de descarga"> Portafolio de productos</button>
                <div class="contacto">
                    <div>
                        <p class="subtitulo">Contacto:</p>
                        <p class="subtitulo">${filteredResponse[i].celular}</p>
                    </div>
                    <div>
                        ${filteredResponse[i].whatsapp && `<a href="https://wa.me/+57${filteredResponse[i].whatsapp}" target="_blank"><img src="./assets/icons/whatsapp.svg" alt="Whatsapp ícono"></a>`}
                        ${filteredResponse[i].correo && `<a href="https://${filteredResponse[i].correo}" target="_blank"><img src="./assets/icons/email.svg" alt="Email ícono"></a>`}
                        ${filteredResponse[i].web && `<a href="${filteredResponse[i].web}" target="_blank"><img src="./assets/icons/world.svg" alt="Página web ícono"></a>`}
                        ${filteredResponse[i].facebook && `<a href="${filteredResponse[i].facebook}" target="_blank"><img src="./assets/icons/facebook.svg" alt="Facebook ícono"></a>`}
                        ${filteredResponse[i].instagram && `<a href="${filteredResponse[i].instagram}" target="_blank"><img src="./assets/icons/instagram.svg" alt="Facebook ícono"></a>`}
                    </div>
                </div>
            </div>
            <div>
                <img src="./assets/logos/${filteredResponse[i].id}-logo.jpg" alt="logo pequeño">
            </div>
            `
        fragment.appendChild(tarjeta)
    }    
    resultados.appendChild(fragment)
}

export default createCards