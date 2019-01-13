/*
Ejercicio: Realizar un formulario que pida dos direcciones de e-mail 
y las valide al pulsar el botón de envío. Si están vacías debe mostrar
un error y si no coinciden también. Los errores aparecerán a la derecha de los 
campos de texto.
*/

$(function() {

    $("form").submit(event => {
        event.preventDefault();
        if (checkMail()) {
            $("form")[0].submit();
        }
    });
    
    function checkMail() {
        clearError($('#groupEmail .label.error'));
        if(!isValidEmail() || !isSameEmail($('#inputEmail'), $('#inputEmail2'))) {
            return false;
        }
        return true;
    }
    
    function isValidEmail() {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        let result = regex.test($('#inputEmail').val()) && regex.test($('#inputEmail2').val());
        if (!result) {
            error($('#groupEmail'), 'El formato de los correos no es válido, ejemplo: email@email.com');
        }
        return result;
    }

    function isSameEmail(obj1, obj2) {
        let result = obj1.val() == obj2.val() && obj1.val().length !== 0 ? true : false;
        if (!result) {
            error($('#groupEmail'), 'Los correos electrónicos no son iguales');
        }
        return result;
    }
    
    function error(group, error) {
        group.append('<span class="label error label-important">' + error + '</span>');
    }

    function clearError(obj) {
        obj.remove();
    }

});