/**
 * Ejercicio4DOM:
 * Crear  una  función  llamada  insertAftera  la  que  se  le  pase  
 * el  nuevo  elemento  y  el  elemento  de  referencia  e  inserte  
 * el  nuevo  elemento  despuésdel  elemento  de  referencia  (parecido  
 * a  insertBefore)
 */

(function (){

    let nodos = document.getElementById("lista").children;
    let contador = 0;
    
    insertAfter(getNewLi(), nodos[3]);
    insertAfter(getNewLi(), nodos[nodos.length -1]);
    insertAfter(getNewLi(), nodos[8]);

    function insertAfter(newElement, reference){
        reference.parentNode.insertBefore(newElement, reference.nextSibling);
    }

    function getNewLi(){
        let node = document.createElement("li");
        node.textContent = "Nuevo elemento " + (++contador);
        return node;
    }

})();