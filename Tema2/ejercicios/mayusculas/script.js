(function (){
    document.getElementById("comprobar").addEventListener("click", (event) => {
        alert(comprobarTexto(document.getElementById("cadena").value.trim().replace(' ', '')));
        
        // if(cadena.length == 0){
        //     alert("Introduzca una cadena de caracteres para poder ser analizada!");
        //     return;
        // }
        // let minuscula = false;
        // let mayuscula = false;
        // for(let i=0; i<cadena.length && (!minuscula || !mayuscula); i++){
        //     let caracter = cadena.charAt(i);
        //     if(!mayuscula && (caracter == caracter.toUpperCase() && caracter != caracter.toLowerCase())){
        //         mayuscula = true;
        //     }else if(!minuscula && (caracter == caracter.toLowerCase() && caracter != caracter.toUpperCase())){
        //         minuscula = true;
        //     }
        // }
        // if(minuscula && mayuscula){
        //     alert("La cadena introducida tiene mayúsculas y minúsculas");
        // }else if(minuscula){
        //     alert("La cadena introducida tiene sólamente minúsculas");
        // }else if(mayuscula){
        //     alert("La cadena introducida tiene sólamente mayúsculas");
        // }else{
        //     alert("La cadena introducida no tiene ni minúsculas ni mayúsculas");
        // }

    });

    /**
     * Modularizamos para que la función no sea dependiente de un id, con lo que podemos
     * reutilizar la función en otras partes de nuestro programa
     * @param {*} cadena 
     */
    function comprobarTexto(cadena){
        let resultado = "La cadena introducida no tiene ni minúsculas ni mayúsculas";
        if(cadena.length == 0){
            return "Introduzca una cadena de caracteres para poder ser analizada!";
        }

        let minuscula = false;
        let mayuscula = false;
        for(let i=0; i<cadena.length && (!minuscula || !mayuscula); i++){
            let caracter = cadena.charAt(i);
            if(!mayuscula && (caracter == caracter.toUpperCase() && caracter != caracter.toLowerCase())){
                mayuscula = true;
            }else if(!minuscula && (caracter == caracter.toLowerCase() && caracter != caracter.toUpperCase())){
                minuscula = true;
            }
        }

        if(minuscula && mayuscula){
            resultado = "La cadena introducida tiene mayúsculas y minúsculas";
        }else if(minuscula){
            resultado = "La cadena introducida tiene sólamente minúsculas";
        }else if(mayuscula){
            resultado = "La cadena introducida tiene sólamente mayúsculas";
        }

        return resultado;
    };

})();