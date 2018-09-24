var numero = 5;
console.log(numero);
sumar(1, 2);
//console.log(resultado); //El resultado es undefined puesto que no tenemos alcance a esta variable
console.log(numero);

contador();
//console.log(resultado2); //la variable resultado2 nos es visible puesto que está declarada en una función, y no tenemos visibilidad

function contador(){
    let resultado = 0;
    var resultado2 = 0;
    for (let i=0; i<20; i++){
        resultado += 1;
        resultado2 += 1;
    }

    //Con esto lo que probamos es el tipo de dato
    if ( typeof resultado == "number"){
        console.log("El resultado es tipo numérico")
    }else{
        console.log("El resultado es otra cosa que no es número")
    }

    console.log("resultado --> ", resultado, "\nresultado2 -->", resultado2);
    
    //La variable i no es visible fuera del for puesto que está declarada como let
}

function sumar(numero1, numero2){
    var resultado = 0;
    resultado = numero1 + numero2;
    console.log(resultado);
    numero = resultado;
}

var usuario = (function(){
    var nombre = "un nombre";
    var apellidos = "apellidos"
    
    return{
        mostrar: function(){
            return nombre + apellidos;
        },

        setNombre: function(nombre){
            this.nombre = nombre;
            return true;
        },

        setApellidos: function(apellido){
            this.apellidos = apellido;
            return true;
        }
    }    
})();


console.log("El nombre del objeto es --> ", usuario.mostrar())
