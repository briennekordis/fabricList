import './fabrics.js';

window.addEventListener('load', ()=> {
    createFabricList();
});

async function createFabricList(){
    const response = await fetch('./fabric.json');
    const json = await response.json();
    const fabrics = document.getElementById('fabrics');

    json.fabrics.forEach((fabric) => {
        const element = document.createElement('stash-fabrics');
        element.fabric = fabric;
        fabrics.appendChild(element);
    })
}
