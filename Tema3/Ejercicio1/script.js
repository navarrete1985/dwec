(function (){

    let lista = document.getElementById("listaCanciones");
    let input = document.getElementById("cancion");
    let canciones = lista.children;
    let btn = document.getElementById("botonadd").addEventListener('click', function(){
        let entrada = input.value.trim();
        if (entrada === ""){
            alert("Inserte una canción para poder añadirla.");
        }else if (isRepeat(canciones, entrada)){
            alert("La canción que intenta añadir está ya en la lista!");
        }else{
            addCancion(input.value, lista);
        }
        input.value = "";
        input.focus();
    });
    
    function addCancion(nombreCancion, nodo){
        let elemento = document.createElement("li");
        elemento.textContent = nombreCancion;
        nodo.appendChild(elemento);
    }

    function isRepeat(lista, valor){
        for (let item of lista){
            if (item.textContent.toLowerCase() === valor.toLowerCase()){
                return true;
            }
        }
        return false;
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