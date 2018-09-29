(function(){

    let salida = document.getElementById('dia');
    let btnDia = document.getElementById('btnDia').addEventListener('click', dia);
    let btnFinde = document.getElementById('btnFinde').addEventListener('click', esFinde);

    function dia(){
        let dia = new Date().getDay();
        let diaString = '';
        switch(dia){
            case 0:
                diaString = 'Domingo';
                break;
            case 1:
                diaString = 'Lunes';
                break;
            case 2:
                diaString = 'Martes';
                break;
            case 3:
                diaString = 'Miércoles';
                break;
            case 4:
                diaString = 'Jueves';
                break;
            case 5:
                diaString = 'Viernes';
                break;
            case 6:
                diaString = 'Sábado';
                break;
            default:
                salida = "Hay algún error al calcular el día";
        }
        salida.textContent = 'Hoy es ' + diaString;
    }

    function esFinde(){
        let dia = new Date().getDay();
        let respuesta = 'Ha ocurrido un error!'
        if(dia > 0 || dia <6){
            dia = (dia == 5) ? 'Es viernes y casi es finde semana!!!!' : 'Por desgracia toca currar...no es finde semana :(';
        }else if(dia == 0 || dia == 6){
            dia = 'Enhorabuena, es finde semana!!! ;)'
        }
        salida.textContent = dia;
    }

})();
