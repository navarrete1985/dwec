(function (){
	 var formulario = document.getElementById("formulario");
	 formulario.addEventListener('submit', validarFormulario);

	 function validar_email( email ) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
	}


	 function validarFormulario(e){
	 	e.preventDefault();
	 	var nombre = document.getElementsByName("nombre")[0].value
	 	var apellidos = document.getElementsByName("apellido")[0].value
	 	var email = document.getElementsByName("email")[0].value
	 	var val = false;
	 	if(nombre.length >=3 && nombre.length <=10){
	 		val= true;
	 	}else{
	 		val= false;
	 		alert('introduce entre 3-10')
	 	}

	 	if(apellidos.length >=3 && apellidos.length <=10){
	 		val= true;
	 	}else{
	 		val= false;
	 		alert('introduce entre 3-10 en apellidos')
	 	}

	 	if( validar_email( email ) ){
	 		val=true;
    	alert("El email es correcto");
		}else{
    	alert("email incorrecto")
    	val=false;
		 }

		 if(val==true){
			formulario.submit()
		}


		}


})();	
	
