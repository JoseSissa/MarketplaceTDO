const createCards = ({ filteredResponse = '', page = 1, prevPage = 0, resultados = document.getElementById('resultados') } = { filteredResponse, page, prevPage, resultados }) => {
    
    const trasnformarTexto = (texto) => {
        const primeraLetra = texto.toLowerCase().charAt(0).toUpperCase()
        return primeraLetra + (texto.slice(1).toLowerCase());
    }
    page = page * 3
    if(filteredResponse.length < page) {
        page = filteredResponse.length
    }
    console.log(resultados.children);
    const fragment = document.createDocumentFragment()
    console.log({prevPage});
    console.log({page});
    for (let i = prevPage; i < page; i++) {
        prevPage = page
        const tarjeta = document.createElement('DIV')
        tarjeta.classList.add('tarjeta')
        tarjeta.innerHTML = `
            <img src="./assets/img/fondo-tarjeta.JPG" alt="Imagen de la asociación">
            <div>
                <h4 class="tarjeta_nombre espacio-title">${filteredResponse[i].nombreEmprendimiento}</h4>
                <p class="subtitulo espacio descripcion">${trasnformarTexto(filteredResponse[i].descripcion)}</p>
                ${filteredResponse[i].portafolio && `<a class="button" target="_blank" href="../assets/portafolios/${filteredResponse[i].portafolio}"><img src="./assets/icons/download.svg" alt="Ícono de descarga"> Portafolio de productos</a>`}
                <div class="contacto">
                    <div>
                        <p class="subtitulo">Contacto:</p>
                        <p class="subtitulo">${filteredResponse[i].celular}</p>
                    </div>
                    <div>
                        ${filteredResponse[i].whatsapp && `<a href="https://wa.me/+57${filteredResponse[i].whatsapp}" target="_blank"><img src="./assets/icons/whatsapp.svg" alt="Whatsapp ícono"></a>`}
                        ${filteredResponse[i].correo && `<a href="https://${filteredResponse[i].correo}" target="_blank"><img src="./assets/icons/email.svg" alt="Email ícono"></a>`}
                        ${filteredResponse[i].web && `<a href="https://${filteredResponse[i].web}" target="_blank"><img src="./assets/icons/world.svg" alt="Página web ícono"></a>`}
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
    console.log(fragment.children);
    resultados.appendChild(fragment)
    console.log({"Fragment agregado": resultados.children});
}

export default createCards