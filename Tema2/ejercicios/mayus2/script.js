(function (){
    
    var texto;
    
    document.getElementById("comprobar").addEventListener("click", function(){
        for(let i = 1; i < 4; i++){
            var paragraph = document.getElementById("salida" + (i));
            //document.getElementById("salida" + i).textContent = comprobarTexto(document.getElementById("input" + i).value.replace(/\s/g,''));
            paragraph.textContent = comprobarTexto2(document.getElementById("input" + (i)).value.replace(/\s/g,''));
        }
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
        for(let i = 0; i < cadena.length && (!minuscula || !mayuscula); i++){
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

    /**
     * Se declaran dos variables, cadenaMayus y cadenaMinus
     * 
     * Tras comprobar que la cadena no está vacía ni es un número
     * se comparará la cadena con cadenaMayus y cadenaMinus.
     * 
     * Se devolverá la variable texto según la composición de
     * la cadena.
     * @param {*} cadena
     * @returns texto 
     */
    function comprobarTexto2(cadena) {

        var cadenaMayus = cadena.toUpperCase();
        var cadenaMinus = cadena.toLowerCase();
        
        var texto = "La cadena está formada por mayúsculas y minúsculas";

        if(cadena.length == 0) {
            texto = "La cadena está vacía";
        } else if(!isNaN(cadena)) {
            texto = "La cadena está formada por números";
        } else {
            if(cadena == cadenaMayus) {
                texto = "La cadena está formada por mayúsculas";
            } else if(cadena == cadenaMinus){
                texto = "La cadena está formada por minúsculas";
            }
        }

        return texto;
    }

})();