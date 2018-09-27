(function (){
    document.getElementById('comprobar').addEventListener('click', (event) =>{
        let entrada = document.getElementById('palabra').value.trim().replace(/\s/g, '');
        if(entrada.length <= 1){
            alert('Introduzca una cadena de más de 1 caracter');
            return;
        }
        let entradaReverse = entrada.split('').reverse();
        entrada = entrada.split('');
        let esPalindromo = true;
        for(let i=0; i<entrada.length && palindromo; i++){
            if(entrada[i] != entradaReverse[i]){
                esPalindromo = false;
            }
        }
        if(esPalindromo){
            alert('La palabra introducida es un palíndromo');
        }else{
            alert('La palabra introducida no es un palíndromo');
        }
    })
})()