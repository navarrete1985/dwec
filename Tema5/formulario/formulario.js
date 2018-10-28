(function (){
	 var formulario = document.getElementById("formulario");
	 formulario.addEventListener('submit', validarFormulario);

	function validarFormulario(e){
	 	e.preventDefault();
	 	var nombre = document.getElementById("nombre").value;
	 	var apellido = document.getElementById("apellido").value;
		var email = document.getElementById("email").value;
		 
		let salida = "";
	 	if(nombre.trim().length < 3 || nombre.trim().length > 10 || apellido.trim().length < 3 || apellido.trim().length > 10) {
			salida += '- Nombre/Apellidos requerido entre 3-10 caracteres\n\n';
	 	}

	 	if(!validar_email(email)) {
			salida += "- Email incorrecto";
		}

		if (salida !== "") {
			alert(salida);
		}else {
			formulario.submit();
		}

		function validar_email( email ) {
			var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test(email);
		}
	}
})();	
	
