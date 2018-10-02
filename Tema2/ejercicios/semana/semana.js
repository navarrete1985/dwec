(function(){

    let salida = document.getElementById('dia');
    let btnDia = document.getElementById('btnDia').addEventListener('click', dia);
    let btnFinde = document.getElementById('btnFinde').addEventListener('click', esFinde);

    let dias = "Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado".split(",");

    function dia(){
        let dia = new Date().getDay();
        diaString = "Ha ocurrido algún error al calcular el día";
        if (dia >= 0 && dia < 7){
            diaString = 'Hoy es ' + dias[dia];
        }
        salida.textContent = diaString;
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
