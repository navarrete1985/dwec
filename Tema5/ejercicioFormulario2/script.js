/*
Realiza una una página web que presente un test de preguntas sobre el lenguaje 
JavaScript. Debe contener al menos 10 preguntas y se deben utilizar los 
siguientes tipos de elementos de formulario:
· Más de una respuesta: (varios checkbox)
· Una sola respuesta de entre varias.
· Una respuesta a elegir de una lista
· Una respuesta para insertar en un campo de texto.
· Una respuesta que sea un comentario que no será evaluable. 
    El comentario contendrá un máximo de 100 caracteres y debe indicarse en 
    todo momento el número de caracteres que quedan para alcanzar el límite.
La página mostrará un botón "Borrar respuestas" y otro "Corrección".
El botón Corrección hará que se muestre el número de preguntas contestadas, el 
porcentaje de aciertos, el número de aciertos, el número de fallos y el número 
de preguntas no contestadas, así como el tiempo invertido.
Tras el primer intento, el botón "Corrección" se convertirá en "Reintentar".
Cuando se hayan acertado todas las preguntas (100% de aciertos) el botón de
Corrección se deshabilitará
*/

(function(){
    let respuestas = {
        'pr1': new Array("1", "2"),
        'pr2': new Array("3"),
        'pr3': new Array("currentTarget"),
        'pr4': new Array("35"),
        'pr5': new Array("2"),
        'pr6': new Array("1"),
        'pr7': new Array("2"),
        'pr8': new Array("2"),
        'pr9': new Array("1")
    };
    let correctas = 0;
    let fallidas = 0;
    let nc = 0;

    let timmer = (function(){
        let spanSegundos = document.getElementById('segundos');
        let spanMinutos = document.getElementById('minutos');
        let minutos = 0;
        let segundos = 0;
        let interval = null;
        let start = false;

        let count = function() {
            if (segundos < 59) {
                segundos++;
            }else {
                segundos = 0;
                minutos++;
            }
            spanSegundos.textContent = (segundos < 10) ? '0' + segundos : segundos;
            spanMinutos.textContent = (minutos < 10) ? '0' + minutos : minutos;
        };

        return {
            start: function(){
                if (!start){
                    interval = window.setInterval(count, 1000);
                    start = !start;
                }
            },
            stop: function(){
                if (start){
                    window.clearInterval(interval);
                    start = !start;
                }
            },
            reset: function(){
                if(interval != null) {
                    window.clearInterval(interval);
                }
                spanSegundos.textContent = "00";
                spanMinutos.textContent = "00";
                minutos = 0;
                segundos = 0;
                start = false;
                this.start();
            }
        }
    })();

    document.getElementById('pr10').addEventListener('keypress', function(event){
        if(event.target.value.length >= 100) {
            event.preventDefault();
        } else {
            let span = document.querySelector('div.wordCount span');
            span.textContent = event.target.value.length + 1;
        }
    });

    document.getElementById('pr10').addEventListener('keyup', function(event){
        if(event.keyCode === 8) {
            let span = document.querySelector('div.wordCount span');
            span.textContent = event.target.value.length;
        }
    });

    document.getElementById('form').addEventListener('reset', function(e){
        e.preventDefault();
        timmer.reset();
    });

    document.getElementById('form').addEventListener('submit', correccion);

    function correccion(event) {
        event.preventDefault();
        resetResultado();
        for ( let i=1; i<10; i++ ) {
            let pregunta = 'pr' + i;
            let items = document.getElementsByName(pregunta);
            console.log(respuestas[pregunta]);
            switch (items[0].type) {
                case 'checkbox':
                case 'radio':
                    validarCheckbox(pregunta, items);
                break;
                case 'text':
                    validarText(pregunta, items[0]);
                break;
                case 'select-one':
                    validarSelect(pregunta, items[0]);
                break;
            }
        }
        console.log('El resultado del test es \nTotal de respuestas correctas: ' + correctas
                + '\nTotal de respuestas erroneas: ' + fallidas 
                + '\nTotal de respuestas no marcadas: ' + nc);
    }

    function validarCheckbox(pregunta, items) {
        let seleccionados = 0;
        let error = 0;
        for (let i=0; i<items.length; i++) {
            if(items[i].checked && items[i].value !== '-1') {
                seleccionados++;
                if (!respuestas[pregunta].includes(items[i].value)) {
                    error++;
                }
            }
        }
        if(seleccionados === 0) {
            nc++;
        }else if (error === 0 && seleccionados === respuestas[pregunta].length ) {
            correctas++;
        }else {
            fallidas++;
        }
    }

    function validarText(pregunta, input) {
        if(input.value.trim() === '') {
            nc++;
        }else if (input.value.trim() === respuestas[pregunta][0]) {
            correctas++;
        }else {
            fallidas++;
        }
    }

    function validarSelect(pregunta, select) {
        if (select.value === '') {
            nc++;
        }else if (select.value === respuestas[pregunta][0]) {
            correctas++;
        }else {
            fallidas++;
        }
    }

    function resetResultado() {
        correctas = 0;
        fallidas = 0;
        nc = 0;
    }

    timmer.start();

})();
