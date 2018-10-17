(function() {

    document.getElementById('wrapper').addEventListener('click', accion);

    function accion(event) {
        let elemento = event.target;
        while (elemento.tagName !== 'H2' && elemento.tagName !== 'DIV') {
            elemento = elemento.parentNode;
        }
        if (elemento.id !== 'wrapper'){
            if (elemento.tagName === 'DIV'){
                elemento.classList.toggle('cerrado');
                elemento.previousElementSibling.classList.toggle('menos');
            }else{
                elemento.nextElementSibling.classList.toggle('cerrado');
                elemento.classList.toggle('menos');
            }
        }
    };

})();



/*Hacer  el  ejemplo  FAQs  con  delegación  de  evento*/ 