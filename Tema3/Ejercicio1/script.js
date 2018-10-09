(function (){

    let lista = document.getElementById("listaCanciones");
    let input = document.getElementById("cancion");
    let btn = document.getElementById("botonadd").addEventListener('click', function(){
        if (input.value.trim() != ""){
            addCancion(input.value, lista);
        }
    });
    

    function addCancion(nombreCancion, nodo){
        let elemento = document.createElement("li");
        elemento.textContent = nombreCancion;
        nodo.appendChild(elemento);
    }

})();