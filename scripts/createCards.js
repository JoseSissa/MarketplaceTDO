const createCards = ({ filteredResponse = '', page = 1, prevPage = 0, resultados = document.getElementById('resultados') } = { filteredResponse, page, prevPage, resultados }) => {    
    console.log({ filteredResponse, page, prevPage, resultados });
    const trasnformarTexto = (texto) => {
        const primeraLetra = texto.toLowerCase().charAt(0).toUpperCase()
        return primeraLetra + (texto.slice(1).toLowerCase());
    }
    page = page * 9
    if(filteredResponse.length < page) {
        page = filteredResponse.length
    }


    

    const fragment = document.createDocumentFragment()
    for (let i = prevPage; i < page; i++) {
        prevPage = page
        const tarjeta = document.createElement('DIV')
        tarjeta.classList.add('tarjeta')
        tarjeta.innerHTML = `
            <img src="./assets/fondos-tarjetas/${filteredResponse[i].fondoTarjeta}.jpg" alt="Imagen de la asociación">
            <div>
                <h4 class="tarjeta_nombre espacio-title">${filteredResponse[i].nombreEmprendimiento}</h4>
                <p class="subtitulo espacio descripcion">${trasnformarTexto(filteredResponse[i].descripcion)}</p>
                ${filteredResponse[i].pdf && `<a class="button" target="_blank" href="./assets/portafolios/${filteredResponse[i].pdf}.pdf"><img src="./assets/icons/download.svg" alt="Ícono de descarga"> Portafolio de productos</a>`}
                <div class="contacto">
                    <div>
                        <p class="subtitulo">Contacto:</p>
                        <p class="subtitulo">${filteredResponse[i].telefono}</p>
                    </div>
                    <div>
                        ${filteredResponse[i].whatsapp && `<a href="https://wa.me/+57${filteredResponse[i].whatsapp}" target="_blank"><img src="./assets/icons/whatsapp.svg" alt="Whatsapp ícono"></a>`}
                        ${filteredResponse[i].correo && `<a onclick="copiarCorreo('${filteredResponse[i].correo}')" ><img src="./assets/icons/email.svg" alt="Email ícono"></a>`}
                        ${filteredResponse[i].web && `<a href="${filteredResponse[i].web}" target="_blank"><img src="./assets/icons/world.svg" alt="Página web ícono"></a>`}
                        ${filteredResponse[i].facebook && `<a href="${filteredResponse[i].facebook}" target="_blank"><img src="./assets/icons/facebook.svg" alt="Facebook ícono"></a>`}
                        ${filteredResponse[i].instagram && `<a href="${filteredResponse[i].instagram}" target="_blank"><img src="./assets/icons/instagram.svg" alt="Facebook ícono"></a>`}
                    </div>
                </div>
            </div>
            <div>
                <img src="./assets/logos/${filteredResponse[i].id}-logo.jpg" alt="Logo">
            </div>
            `
        fragment.appendChild(tarjeta)
    }
    resultados.appendChild(fragment)
}
export default createCards