document.getElementById("dia").textContent = dia();

function dia(){
    let dia = new Date().getDay();
    let diaString = '';
    switch(dia){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        return "Lamentablemente hoy no es finde semana :("
        default:
        return "!Es finde semana! :)";
    }

}
