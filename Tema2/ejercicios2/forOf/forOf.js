/*
Investigar sobre bucle forOf
La diferencia entre los bucles for in y for of es que:
    -Los bucles for in iteran sobre todas las propiedades de un objeto, 
    mientras que los for of iteran sobre todos los elementos de una colección
    que tengan la propiedad Symbol.iterator.
    Por lo que en un ejemplo, un for in en un objeto que tiene un array y una propiedad,
    si realizamos el bucle, obtendremos los elementos del array más la propiedad, mientras 
    que si esto mismo lo iteramos con un for of, lo que obtendremos son los valores
    que contiene el array, no la propiedad.
*/

(function (){

    let nombres = ["Antonio", "Juan", "Ana", "Carlos"]; //Coleccion
    nombres.propiedad = "Grupo A";//Propiedad de la colección

    console.log("-------------------For In-------------------");
    for (let item in nombres) {
        console.log(item);
    }
    
    console.log("-------------------For Of-------------------");
    for (let item of nombres) {
        console.log(item);
    }

})();


/*
1-. Comprobar si la lista de nodos element.childNodes() es dinámica
2-. Comprobar la diferencia entre lista de nodos elements.children
*/ 

(function (){
    let lista = document.getElementById("lista");
    let elementos1 = lista.childNodes;
    let elementos2 = lista.children;

    console.log("Elementos inicio");
    console.log(elementos1);
    console.log(elementos2);

    lista.removeChild(lista.lastElementChild);

    console.log("Elementos eliminación 1 elemento");
    console.log(elementos1);
    console.log(elementos2);

    lista.removeChild(lista.lastElementChild);

    console.log("Elementos eliminación 2 elementos");
    console.log(elementos1);
    console.log(elementos2);

    /**
     * La propiedad elemento.childNodes nos devuelve un NodeList, por lo que no es dinámico 
     * cuando vamos eliminando o añadiendo elementos al DOM, mientras que la propiedad 
     * elemento.children nos devuelve un HTMLCollection, que si es una colección de los
     * nodos hijos dinámica, con lo que va cambiando de tamaño conforme el arbol del DOM
     * se va cambiando a lo largo de la vida.
     */

})();

