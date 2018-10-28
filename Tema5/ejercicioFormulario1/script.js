/*
Diseñar un formulario que cuente con los siguientes campos:
- El nombre: longitud mínima 3 caracteres y máxima 15. Sólo puede contener letras y números.
- Una contraseña: sólo puede contener letras , números y el subrayado; al menos debe contener
una letra en mayúsculas, una letra en minúsculas y un número; longitud mínima 6 caracteres y máxima 15.
- Repetición de la contraseña: debe coincidir con la anterior, obviamente.
- La dirección de email: no puede estar vacío, hay que comprobar que cumple el patrón de una
dirección de email.
-Sexo: se debe elegir un valor
- Fecha de nacimiento: comprobar que es una fecha válida y el usuario o usuaria es mayor de edad
- Ciudad y país de residencia: no obligatorios
- Foto
- Una operación matemática de suma entre dos números enteros de un dígito determinados al
azar (por ej. 5 + 3 = ?) con el fin de solicitar su resultado para evitar bots
- Una casilla de verificación de "Acepto las condiciones" inicialmente desactivada. Hasta que ésta
opción no se verifique no se habilitará el botón de envío.
- Un botón de envío con el texto "Crear cuenta"
- Un botón de borrado de datos (reset)
*/

(function() {

    let form = document.getElementById('form');
    let number1 = generateNumber(0, 100);
    let number2 = generateNumber(0, 100);
    let label = document.getElementById('label');
    label.textContent += ' ' + number1 + ' + ' + number2;
    form.addEventListener('submit', checkForm);
    form.addEventListener('reset', checkReset);
    document.getElementById('condiciones').addEventListener('change', function(event){
        let btnSubmit = form.querySelector('input[type="submit"]');
        btnSubmit.disabled = (event.target.checked ? false : true);
    });
    window.addEventListener('beforeunload', function(event){
        event.returnValue = 'Seguro de que quieres abandonar la página?';
    });

    function checkForm(event) {
        event.preventDefault();
        let nombre = document.getElementById('nombre');
        let passwd = document.getElementById('pswd');
        let adge = document.getElementById('nacimiento');
        let inputOp = document.getElementById('verify');
        let isValidName = checkName(nombre, 3, 15);
        let isValidPass = checkPassword(passwd);
        let isValidEmail = checkMail(document.getElementById('email'));
        if (isValidPass){
            isValidPass = checkRepeatPass(passwd, document.getElementById('rpswd'));
        }
        let isValidGenre = checkBoxCheck(document.getElementsByName('genero'));
        if (!isValidGenre) {
            addErrorToElement(document.querySelector('div.sexo'), 'Campo obligatorio, marque una opción');
        }else {
            removeErrorToElement(document.querySelector('div.sexo'));
        }

        let isValidage = checkAge(document.getElementById('nacimiento').value, 18);
        isValidage ? removeErrorToElement(nacimiento.previousElementSibling) : addErrorToElement(nacimiento.previousElementSibling, 'Campo obligatorio y mayor de 18');

        let isValidOp = (inputOp.value == number1+number2 ? true : false);
        isValidOp ? removeErrorToElement(inputOp) : addErrorToElement(inputOp, 'Operación matemática de verificación erronea');

    }

    function checkReset(event) {
        if (!confirm('Seguro que quiere resetear el formulario')){
            event.preventDefault();
        }else {
            form.querySelector('input[type="submit"]').disabled = true;
        }   
    }

    function checkName(node, minSize, maxSize) {
        let result = true;
        /*/^([a-zA-Z0-9\s]{" + minSize + "," + maxSize + "})$/*/ 
        let regex = new RegExp("^([a-zA-Z0-9\\s]{" + minSize + "," + maxSize + "})$");
        let cadena = node.value.trim();
        if (!regex.test(cadena)){
            addErrorToElement(node, 'Campo inválido, cadena alfanumerica entre ' + minSize + ' y ' + maxSize + ' carateres');
            result = false;
        }else {
            removeErrorToElement(node);
        }
        return result;
    }

    function checkMail(node) {
        let result = true;
        let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(node.value)) {
            addErrorToElement(node, "Formato de email inválido!");
            result = false;
        }else {
            removeErrorToElement(node);
        }
        return ;
    }

    function checkPassword(node) {
        let result = true;
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]|[^ ]){6,15}$/;
        if(!regex.test(node.value)) {
            addErrorToElement(node, 'Contraseña inválida, debe estar formada por numeros, subrayado y letras, al menos 1 mayuscula, 1 minuscula y un número');
            result = false;
        }else {
            removeErrorToElement(node);
        }

        return result;
    }

    function checkRepeatPass(pass, rpass) {
        result = true;
        if (pass.value !== rpass.value) {
            addErrorToElement(rpass, 'Las contraseñas no coinciden!');
            result = false;
        }else{
            removeErrorToElement(rpass);
        }
    }

    function checkBoxCheck(nodes) {
        let result = false;
        for (let item of nodes) {
            if (item.checked){
                result = true;
            }
        }
        return result;
    }

    function checkAge(date, years) {
        if (date !== null && getAge(date) >= years) {
            return true;
        }
        return false;
    }

    function addErrorToElement(node, erorr) {
        previousNode = node.previousSibling;
        let find = false;
        if (previousNode !== undefined && previousNode.tagName === 'DIV') {
            find = true;
        }
        if (!find) {
            let error = document.createElement('div');
            error.textContent = erorr;
            error.classList.add('error');
            form.insertBefore(error, node);
        }
    }

    function removeErrorToElement(node) {
        previousNode = node.previousSibling;
        if (previousNode !== undefined && previousNode.tagName === 'DIV' && previousNode.classList.contains('error')){
            form.removeChild(previousNode);
        }
    }

    function getAge(date) {
        var today = new Date();
        var userDate = new Date(date);
        var age = today.getFullYear() - userDate.getFullYear();
        var m = today.getMonth() - userDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < userDate.getDate())) {
            age--;
        }
        return age;
    }

    function generateNumber(min, max) {
        return Math.floor((Math.random() * max - min)) + min;
    }

})();
