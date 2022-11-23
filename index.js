const departamentos = document.getElementById('departamentos')
const municipios = document.getElementById('municipios')

departamentos.addEventListener('click', (e) => {
    e.target.classList.toggle('select-activate');
    e.target.children[0].classList.toggle('activate');
})
municipios.addEventListener('click', (e) => {
    e.target.classList.toggle('select-activate');
    e.target.children[0].classList.toggle('activate');
})