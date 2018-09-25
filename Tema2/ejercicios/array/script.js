(function showTerm(){
    var tempByHour = new Array();
    tempByHour[0] = 59.2;
    tempByHour[1] = 60.1;
    tempByHour[2] = 63;
    tempByHour[3] = 65;
    tempByHour[4] = 62;

    for (let i=0; i<tempByHour.length; i++){
        if (i == parseInt(tempByHour.length/2)){
            document.getElementById("temp" + i).textContent = "La temperatura a medio día es fué de " + tempByHour[i] + "ºF";
        }else{
            document.getElementById("temp" + i).textContent = "La temperatura a las " + i + " fué de " + tempByHour[i] + "ºF";
        }
    }
})()