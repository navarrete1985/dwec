(function (){

    let lista = document.getElementById("listaCanciones");
    let input = document.getElementById("cancion");
    let inputBuscar = document.getElementById('inputBuscar');
    let btnBuscar = document.getElementById('buscar');
    let btnLimpiar = document.getElementById('limpiar');
    let canciones = lista.children;
    let btn = document.getElementById("botonadd").addEventListener('click', function(){
        let entrada = input.value.trim();
        if (entrada === ""){
            alert("Inserte una canción para poder añadirla.");
        }else if (isRepeat(canciones, entrada)){
            alert("La canción que intenta añadir está ya en la lista!");
        }else{
            addCancion(input.value, lista);
            sortedList();
        }
        input.value = "";
        input.focus();
    });

    lista.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON'){
            let padre = event.target.parentNode;
            padre.remove();
        }
    });

    btnBuscar.addEventListener('click', function(){
        limpiar();
        console.log('entro en buscar');
        if (inputBuscar.value.trim() !== '') {
            let nodos = lista.childNodes;
            for (let item of nodos){
                if (item.nodeName === 'LI' && !item.firstChild.textContent.includes(inputBuscar.value)){
                    item.style.display = 'none';
                }
            }
        }
    });

    btnLimpiar.addEventListener('click', function(){
        limpiar();
    });
    
    function addCancion(nombreCancion, nodo){
        let elemento = document.createElement("li");
        elemento.textContent = nombreCancion;
        let eliminar = document.createElement('button');
        eliminar.textContent = 'Eliminar';
        elemento.appendChild(eliminar);
        nodo.appendChild(elemento);
    }

    function isRepeat(lista, valor){
        for (let item of lista){
            if (item.firstChild.textContent.toLowerCase() === valor.toLowerCase()){
                return true;
            }
        }
        return false;
    }

    function sortedList() {
        Array.from(lista.getElementsByTagName("LI"))
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => lista.appendChild(li));
    }

    function limpiar() {
        for (let item of lista.childNodes){
            if (item.nodeName === 'LI'){
                item.style.display = 'list-item';
            }
        }
    }

})();

/*
- Evitar que se añadan canciones repetidas o sin texto
- Poner un botón para ordenar la lista de canciones alfabéticamente
- Añadir un botón para buscar una canción por su nombre completo o parte de él
- Añadir un botón para eliminar canciones (pedir la canción en el campo
    de texto y luego eliminarla y/o poner un botón eliminar junto a cada canción)
    Pedir confirmación
*/ 