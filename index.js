const departamentos = document.getElementById('departamentos')
const municipios = document.getElementById('municipios')

const resetFilters = (e) => {
    e.target.parentElement.parentElement.classList.remove('select-activate');
    e.target.parentElement.classList.remove('activate');
}

departamentos.addEventListener('click', (e) => {
    municipios.classList.remove('select-activate')
    municipios.children[0].classList.remove('activate')
    if (e.target.localName === 'div' && e.target.id === 'departamentos') {
        e.target.classList.toggle('select-activate');
        e.target.children[0].classList.toggle('activate');
    }
    if(e.target.localName === 'button') {
        departamentos.children[1].innerText = e.target.innerText;
        resetFilters(e)
    }
})
municipios.addEventListener('click', (e) => {
    departamentos.classList.contains('select-activate') && departamentos.classList.remove('select-activate')
    departamentos.children[0].classList.contains('activate') && departamentos.children[0].classList.remove('activate')
    if(e.target.localName === 'div' && e.target.id === 'municipios') {
        e.target.classList.toggle('select-activate');
        e.target.children[0].classList.toggle('activate');
    }
    if(e.target.localName === 'button') {
        municipios.children[1].innerText = e.target.innerText;
        resetFilters(e)
    }
})