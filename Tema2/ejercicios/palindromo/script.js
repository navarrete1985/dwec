(function (){
    document.getElementById('comprobar').addEventListener('click', (event) =>{
        alert(palindromo(document.getElementById('palabra').value.trim().replace(/\s/g, '')));
    })

    function palindromo(cadena){
        let result = 'La cadena introducida no es nun palíndromo';
        let entradaReverse = cadena.split('').reverse().join('');

        if(cadena.length <= 1){
            result = 'Introduzca una cadena de más de 1 caracter';
        }else if (cadena == entradaReverse){
            result = 'La cadena introducida es un palíndromo';
        }

        return result
    }

})();