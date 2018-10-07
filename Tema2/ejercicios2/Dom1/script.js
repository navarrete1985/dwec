/**
 * Ejercicio1DOM:
 * Utilizando  las  funciones  DOM,  mostrar  por  pantalla  la  siguiente  información:
 *   1.Número  de  enlaces  de  la  página
 *   2.Dirección  a  la  que  enlaza  el  penúltimo  enlace
 *   3.Numero  de  enlaces  que  enlazan  a  http://prueba
 *   4.Número  de  enlaces  del  tercer  párraf
 */

(function () {

    let enlaces = document.getElementsByTagName("a");
    console.log("El número total de enlaces de la página es de --> " + enlaces.length);

    let penultimoNodo = enlaces[enlaces.length - 2];
    console.log("El penúltimo nodo enlaza a --> " + penultimoNodo.getAttribute("href"));

    let count = 0;
    for (item of enlaces) {
        if (item.hasAttribute("href") && item.getAttribute("href") === "http://prueba.com") {
            count++;
        }
    }
    console.log("El número total de coincidencias con http://prueba.com es de --> " + count);

    let parrafos = document.getElementsByTagName("p");
    
    if (parrafos.length > 2){
        console.log("El número de enlaces del tercer párrafo es de --> " + parrafos[2].getElementsByTagName("a").length);
    }
    

})();

