(function (){
    var letras = ['T',  'R',  'W',  'A',  'G',  'M',  'Y',  'F',  'P',  'D',  'X',  'B',  'N',  'J',  'Z',  'S',  'Q',  'V',  'H',  'L',  'C',  'K',  'E',  'T'];

    document.getElementById("btn").addEventListener("click", (ev) => {
        let contenido = document.getElementById("dni").value;
        if (contenido.length == 9 && parseInt(contenido.substring(0,9))){
            comprobarDNI(contenido);
        }else{
            alert("Por favor, rellene correctamente el formulario!")
        }
    });

    function comprobarDNI(dni){
        let indice = parseInt(dni.substring(0,9))%23;
        if(letras[indice].toLowerCase() == dni.charAt(8).toLowerCase()){
            alert("El dni introducido es correcto!!")
        }else{
            alert("El dni introducido es erróneo!!")
        }
    }

})()