/**
 * Modificar  el  ejemplo  anterior  aplicando  los  estilos  mediante  CSS  
 * (utiliza  clases  en  el  HTML).  
 * Necesitarás  hacer  uso  del  la  propiedad  classList que  se  estudia a  
 * continuación
 */
(function () {

    let parrafo = document.getElementById("parrafo");
    let elemento = parrafo.lastElementChild;
    let sleep = (time) => {
        return new Promise(resolver => setTimeout(resolver, time));
    }

    cambiar(elemento);
    
    async function cambiar(elemento) {
        while(true){
            await sleep(2000).then(()=>{
                elemento.classList.toggle("link");
            });            
        };
    }
    
})();