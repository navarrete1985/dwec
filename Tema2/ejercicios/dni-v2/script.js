(function (){
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    document.getElementById("btn").addEventListener("click", (ev) => {
        let contenido = document.getElementById("dni").value;
        if (contenido.length == 9 && parseInt(contenido.substring(0,8))){
            comprobarDNI(contenido);
        }else{
            alert("Por favor, rellene correctamente el formulario!")
        }
    });

    function comprobarDNI(dni){
        let indice = parseInt(dni.substring(0,8))%23;
        if(letras[indice].toLowerCase() == dni.charAt(8).toLowerCase()){
            alert("El dni introducido es correcto!!")
        }else{
            alert("El dni introducido es erróneo!!")
        }
    }

})();