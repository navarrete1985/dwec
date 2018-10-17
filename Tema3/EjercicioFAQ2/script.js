(function() {

    let imagenes = {
        playas: new Array(
            'cala_menuda.jpg',
            'playa_meron.jpg',
            'playa_teresitas.jpg',
            'san_futadera.jpg',
            'valdevaqueros.jpg',
            'cavalleria.jpg',
            'taganana.jpg'
        ),
        mountain: new Array(
            'aneto.jpg',
            'calvitero.jpg',
            'teide.jpg',
            'cerro_calderon.jpg',
            'mulhacen.jpg',
            'pico_lobo.jpg',
            'trevinca.jpg'
        )
    };
    let imagen = document.getElementById('imagen');

    document.getElementById('wrapper').addEventListener('click', accion);

    function accion(event) {
        event.preventDefault();
        let elemento = event.target;
        switch (elemento.tagName) {
            case 'H2':
                let contenedor = elemento.parentNode.nextElementSibling;
                contenedor.classList.toggle('esconder');
                if (contenedor.classList[0] === 'esconder'){
                    imagen.classList.add('esconder');    
                }
                elemento.classList.toggle('menos');
                break;  
            case 'LI':
                imagen.classList.remove('esconder');
                let posicion = Array.prototype.indexOf.call(elemento.parentElement.children, elemento);
                let tipo = elemento.parentNode.parentNode.parentNode.classList[0];
                let backgroundUrl = (tipo === 'playas') ? imagenes.playas[posicion] : imagenes.mountain[posicion];
                imagen.style.backgroundImage = "url('./images/" + backgroundUrl + "')";
                break;
        }
    };

})();



/*Desarrolla  una  aplicación  parecida  a  la  aplicación  FAQs  que  se  ha  mostrado  de  ejemplo  
pero  que  despliegue  una  lista  de  nombres  de    paisajes  naturales  en  cada  link.
Los  link  estarán  agrupados  en  "playas"  y  "montañas".  En  principio  aparecerán  sólo  las  cabeceras
de  los  grupos  con  el  signo  +  en  la  parte  izquierda.  Si  el  usuario  hace  clic  en  uno  de  los
grupos  (playas  o  montañas),  se  desplegará  una  lista  de  nombres  de  paisajes  del  tipo  correspondiente.
Si  el  usuario  hace  clic  en  uno  de  los  nombres  desplegados  aparecerá  una  imagen  del  paisaje  
asociado  a  la  derecha  de  la  lista.  Además,  cada  vez  que  el  usuario  haga  clic  en  un  grupo  con  un
signo  más  o  menos  delante,  la  imagen  del  paisaje  desaparecerá.
Asegúrate  de  cancelar  la  acción  por  defecto  de  los  links*/ 



