/*
 En c9 https://preview.c9users.io/apsierra/nuevo-ejmplosfaciles/ejercicioViajes.html 
    está el HTML correspondiente a este ejercicio de repaso. Se trata de la página de una
    agencia de viajes y como verás el HTML usa la misma estructura para cada uno de los 
    viajes (un <div> con clase 'tour' para cada destino. Utilizando el código HTML que 
    se proporciona, debes escribir los ficheros viajes.css y viajes.js  para  hacer que 
    la página se comporte de la siguiente forma:

    Al hacer clic sobre el enlace “Ver fotos” aparecerán todas las fotos (previamente están 
        ocultas), al volver a hacer clic desaparecerán.
    Al modificar el campo "número de noches" de cualquier viaje,  se debe modificar 
        automáticamente el precio (el precio por día está en el span con clase 'tour'
        correspondiente a ese viaje) .
    Al pulsar el botón de "reserve ahora", desaparecerá dicho botón y aparecerá en su
        lugar el mensaje: “Llame al 902 30 30 30 para reservar este viaje”.
*/

(function() {

    document.querySelector("a.ver-fotos").addEventListener('click', function(event){
        let elemento = event.target.nextElementSibling.classList.toggle('hidden');
    })

    document.querySelectorAll('div.tour input[type="number"]').forEach(item=> {
        item.addEventListener('change', calcularPrecio);
    });

    document.querySelectorAll('div.tour button.book').forEach(item=>{
        item.addEventListener('click', accionReserva);
    });

    function calcularPrecio(event) {
        let padre = event.target.parentNode;
        let salida = padre.querySelector('span.total');
        if (salida !== null) {
            salida.textContent = event.target.value * padre.getAttribute('data-precio-dia');
        }
    }

    function accionReserva(event) {
        event.target.classList.add('hidden');
        let salida = document.createElement('span');
        salida.textContent = 'Llame al 902 30 30 30 para reservar este viaje';
        event.target.parentNode.appendChild(salida);
    }

})();

