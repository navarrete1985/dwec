let validacion = new Validacion('formId');
let form = document.getElementById('formId');
form.addEventListener('submit', event => {
    event.preventDefault();
    validacion.start();
});

validacion.addSuccessListener(function() {
    console.log('validacion ok');
});

validacion.addErrorListener(function(numError) {
    console.log(`Error en la validación, número de errores -> ${numError}`);
})