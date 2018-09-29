(function (){
    document.getElementById("calcular").addEventListener("click", (event)=>{
        let numero = document.getElementById("numero").value;
        if(numero == 0 || parseInt(numero)){
            if(numero%2 == 0){
                alert("El número introducido es par");
            }else{
                alert("El número introducido es impar");
            }
        }else{
            alert("Formato de entrada inválido");
        }
    })
})();