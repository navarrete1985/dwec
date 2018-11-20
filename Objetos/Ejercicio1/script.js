/*
Ejercicio1:  añadir  una  serie  de  métodosal  objetoArray:
    ultimo() --> Devuelve  el último  elemento  de  una  matriz,  sin  quitarlo  de  la  matriz.
    primero() --> devuelve  el  primer  elemento  de  la  matriz.
    limpia() --> Limpia  la  matriz  (quita  todos  los  elementos).
    compacta() --> Elimina  los  elementos  indefinidos 
*/

(function () {

    Array.prototype.ultimo = function() {
        return this[this.length - 1];
    };

    Array.prototype.primero = function() {
        return this[0];
    }

    Array.prototype.limpia = function() {
        for (let i=this.length; i>=0; i--) {
            this.pop();
        }
    }

    Array.prototype.compacta = function() {
        let resultado = new Array();
        this.forEach((item) => resultado.push(item));
        return resultado;
    }

    let vector = new Array('Hola', 'Adios', 'Como estás');
    vector[17] = 'adkjsakjs';
    console.log(vector);
    console.log('El resultado de compactar el vector es --> ' + vector.compacta());
    vector.limpia();
    console.log('El resultado al limpiar el vector es --> ' + vector);
    vector.push('Un elemento');
    console.log('El resultado despues de add un elemento al vector limpio es  --> ' + vector);

    
    

})();