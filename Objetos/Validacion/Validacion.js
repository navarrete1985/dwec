
/**
 * Clase encargada de realizar la validación de un formulario
 */
class Validacion {

    regex = {
        ruleRegex: /^(.+?)\[(.+)\]$/,
        numericRegex: /^[0-9]+$/,
        integerRegex: /^\-?[0-9]+$/,
        decimalRegex: /^\-?[0-9]*\.?[0-9]+$/,
        emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        alphaRegex: /^[a-z]+$/i,
        alphaNumericRegex: /^[a-z0-9]+$/i,
        alphaDashRegex: /^[a-z0-9_\-]+$/i,
        naturalRegex: /^[0-9]+$/i,
        naturalNoZeroRegex: /^[1-9][0-9]*$/i,
        ipRegex: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
        base64Regex: /[^a-zA-Z0-9\/\+=]/i,
        numericDashRegex: /^[\d\-\s]+$/,
        urlRegex: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        dateRegex: /\d{4}-\d{1,2}-\d{1,2}/
    }

    /**
     * 
     * @param {String} formId Identificador del formulario a tratar
     */
    constructor(formId) {
        this._form = formId;
        this._success = null;
        this._error = null;
    }

    addSuccessListener(success) {
        this.success = success;
    }

    addErrorListener(error) {
        this.error = error;
    }

    start() {
        this.elementos = document.querySelectorAll('' + formId);
        for (field of this._elementos) {
            switch (field.type) {
                case 'password':
                this.valdiarPasswd(field);
                break;
                case 'text':
                this.validarInput(field);
                break;
                case 'email':
                this.validarEmail(field);
                break;
                case 'checkbox':
                this.validarCheckbox(field);
                break;
            }
        }
    }

    valdiarPasswd(field) {
        if (field !== undefined && field !== null)
    }

    validarInput(field) {

    }

    validarEmail(field) {

    }

    validarCheckbox(field) {

    }
    
}