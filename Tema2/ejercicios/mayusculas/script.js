(function (){
    document.getElementById("comprobar").addEventListener("click", (event) => {
        let cadena = document.getElementById("cadena").value.trim().replace(' ', '');
        if(cadena.length == 0){
            alert("Introduzca una cadena de caracteres para poder ser analizada!");
            return;
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
            alert("La cadena introducida tiene mayúsculas y minúsculas");
        }else if(minuscula){
            alert("La cadena introducida tiene sólamente minúsculas");
        }else if(mayuscula){
            alert("La cadena introducida tiene sólamente mayúsculas");
        }else{
            alert("La cadena introducida no tiene ni minúsculas ni mayúsculas");
        }
    })
})()