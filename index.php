<?php

include './connection.php';
$connection = new Connection();
$data = $connection->obtDatos();

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketplace TdO</title>
    <link rel="icon" href="./assets/icons/TdO_favicon.png" type="image/gif" sizes="16x16">
    <link rel="stylesheet" href="./styles/styles.css">
    <script src="./scripts/index.js" type="module" defer></script>
</head>
<body>
    <header class="banner">
        <img src="./assets/img/Banner principal.jpg" alt="Banner principal">
    </header>
    <main>
        <input type="hidden" id="oculto" value="" />
        <h2 class="resaltar-texto">MERCADO VIRTUAL</h2>
        <h3 class="resaltar-texto espacio-abajo">de contacto para emprendimientos rurales <br>que hacen parte de Territorios de Oportunidad</h3>
        <p class="espacio-abajo p-ancho">Utiliza nuestros filtros para encontrar los productos, servicios o emprendimientos de tu interés.</p>
        <section class="filtros">
            <div class="select" id="departamentos">Departamentos
                <div class="options" id="opciones-d">
                    <button value="todos">Todos</button>
                    <button value="caqueta">Caquetá</button>
                    <button value="guaviare">Guaviare</button>
                    <button value="narinio">Nariño</button>
                    <button value="nortedesantander">Norte de Santander</button>
                    <button value="putumayo">Putumayo</button>
                </div>
                <span></span>
            </div>
            <div class="select" id="municipios">Municipios
                <div class="options" id="opciones-m">
                    <button value="todos">Todos</button>
                    <button value="barbacoas">Barbacoas</button>
                    <button value="belendelosAndaquies">Belén de los Andaquíes</button>
                    <button value="calamar">Calamar</button>
                    <button value="elCharco">El Charco</button>
                    <button value="elRetorno">El Retorno</button>
                    <button value="elTarra">El Tarra</button>
                    <button value="franciscoPizarro">Francisco Pizarro</button>
                    <button value="lamontaña">La montañita</button>
                    <button value="magui">Magüí</button>
                    <button value="milan">Milán</button>
                    <button value="olayaHerrera">Olaya Herrera</button>
                    <button value="orito">Orito</button>
                    <button value="puertoAsis">Puerto Asis</button>
                    <button value="puertoCaicedo">Puerto Caicedo</button>
                    <button value="puertoGuzman">Puerto Guzmán</button>
                    <button value="robertoPayan">Roberto Payán</button>
                    <button value="sanjosedelFragua">San José del Fragua</button>
                    <button value="sanjosedelGuaviare">San José del Guaviare</button>
                    <button value="putumayo">San Miguel</button>
                    <button value="santaBarbara">Santa Bárbara</button>
                    <button value="sardinata">Sardinata</button>
                    <button value="tibu">Tibú</button>
                    <button value="tumaco">Tumaco</button>
                    <button value="villagarzon">Villagarzón</button>
                </div>
                <span></span>
            </div>
            <div class="select" id="producto-servicio">Tipo de producto/servicio
                <div class="options" id="opciones-ps">
                    <button value="Todos">Todos</button>
                    <button value="agroinsumos">Agroinsumos</button>
                    <button value="agua">Agua</button>
                    <button value="apicultura">Apicultura</button>
                    <button value="artesania">Artesanía</button>
                    <button value="aseo">Aseo</button>
                    <button value="avicultura">Avicultura</button>
                    <button value="bloques">Bloques</button>
                    <button value="cacao">Cacao</button>
                    <button value="chontaduro">Chontaduro</button>
                    <button value="coco">Coco</button>
                    <button value="confeccion">Confección</button>
                    <button value="drogueria">Droguería</button>
                    <button value="ecoturismo">Ecoturismo</button>
                    <button value="especies">Especies</button>
                    <button value="frutos amazonicos">Frutos Amazonicos</button>
                    <button value="ganaderia">Ganadería</button>
                    <button value="huevos">Huevos</button>
                    <button value="internet">Internet</button>
                    <button value="leche">Leche</button>
                    <button value="mariscos">Mariscos</button>
                    <button value="panaderia">Panadería</button>
                    <button value="piña">Piña</button>
                    <button value="piscicultura">Piscicultura</button>
                    <button value="reciclaje">Reciclaje</button>
                    <button value="restaurante">Restaurante</button>
                    <button value="salsamentaria">Salsamentaria</button>
                    <button value="tienda">Tienda</button>
                    <button value="turismo fluvial">Turismo Fluvial</button>
                    <button value="veterinaria">Veterinaria</button>
                    <button value="yuca">Yuca</button>
                </div>
                <span></span>
            </div>
            <input type="text" name="buscar" id="buscar" placeholder="Escribe aquí">
            <button class="button" id="limpiarFiltros">Limpiar Filtros</button>
        </section>
        <section>
            <article class="resultados" id="resultados">
            </article>
            <button class="mostrar-mas" id="mostrar-mas">Mostrar más</button>
        </section>
    </main>
    <aside class="banner">
        <img src="./assets/img/Banner-2.jpg" alt="Banner secundario">
    </aside>
    <footer class="footer">
        <div class="footer_logo">
            <img src="./assets/img/TdO-logo.png" alt="TdO logo">
            <p class="p-ancho">Emprendimientos del sector rural que contribuyen al desarrollo y crecimiento del campo en Colombia</p>
        </div>
        <div class="footer_contacto">
            <p>Mantente informado:</p>
            <div>
                <a href="#"><img src="./assets/icons/whatsapp-bold.svg" alt="Whatsapp ícono"></a>
                <a href="#"><img src="./assets/icons/email-bold.svg" alt="Email ícono"></a>
                <a href="#"><img src="./assets/icons/world-bold.svg" alt="world ícono"></a>
                <a href="#"><img src="./assets/icons/facebook-bold.svg" alt="Facebook ícono"></a>
            </div>
            <p>Copyright © 2022 Marketplace TdO</p>
        </div>
    </footer>
    <script>
        function copiarCorreo(e) {
            const type = 'text/plain';
            const blob = new Blob([e], {type});
            let data = [new ClipboardItem({[type]: blob})];
            navigator.clipboard.write(data)
                .then(() => window.open(`https://${e}`))
        }
        document.getElementById('oculto').value = JSON.stringify(<?= $data ?>);
    </script>
</body>
</html>