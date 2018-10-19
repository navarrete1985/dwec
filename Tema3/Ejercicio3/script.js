(function(){

    let imagenes = {
        imagenes: new Array(
            'cala_menuda.jpg',
            'playa_meron.jpg',
            'playa_teresitas.jpg',
            'san_futadera.jpg',
            'valdevaqueros.jpg',
            'cavalleria.jpg',
            'taganana.jpg'
        ),
        descripcion: new Array(
            'Cala Menuda',
            'Playa Merón',
            'Playa de las Teresitas',
            'Playa de San Furtadera',
            'Playa de Valdevaqueros',
            'Plata de Cavallería',
            'Playa de Taganana'
        )
    };
    // let slider = document.getElementById("slider");

    // let clousure = (function(){
    //     let posicion = 1;
        
    //     return function() {
    //         let backgroundUrl = imagenes.imagenes[posicion];
    //         slider.style.backgroundImage = "url('./images/" + backgroundUrl + "')";
    //         slider.nextElementSibling.textContent = imagenes.descripcion[posicion]

    //         posicion = (posicion === imagenes.imagenes.length -1) ? posicion = 0 : posicion += 1;
    //     }
        
    // })();


    // setInterval(clousure, 2000);

    let clousure = (function (){

        let posicion = 1;
        let slider = document.getElementById("slider");
        let timeout = 2000;
        let start = false;
        let interval = null;

        let timmer = function(){
            let backgroundUrl = imagenes.imagenes[posicion];
            slider.style.backgroundImage = "url('./images/" + backgroundUrl + "')";
            slider.nextElementSibling.textContent = imagenes.descripcion[posicion]
            posicion = (posicion === imagenes.imagenes.length -1) ? posicion = 0 : posicion += 1;
        }
        
        return {
            start: function(){
                if (!start){
                    interval = window.setInterval(timmer, timeout);
                    start = !start;
                }
            },
            stop: function(){
                if (start){
                    window.clearInterval(interval);
                    start = !start;
                }
            },
            setTimeout: function(time){
                if (Number.isInteger(timeout)){
                    timeout = time*1000;
                    this.stop();
                    this.start();
                }
            }
        }
    })();

    document.getElementById("buttons").addEventListener('click', function(event){
        if (event.target.classList[0] === 'start'){
            clousure.start();
        }else if (event.target.classList[0] === 'start'){
            clousure.stop();
        }
    });
    let lista = document.getElementById('seconds');
    lista.addEventListener('change', function(event){
        let time = parseInt(lista.value);
        clousure.setTimeout(time);
    });

})();


/*
Realiza una página que saque una serie de diapositivas a partir de unos ficheros
con fotos. El pase de diapositivas será automático cada 2 segundos y aparecerá
además de la foto el título de la misma.
Puedes  añadir  las  funcionalidades  que  se  te  ocurran.
*/