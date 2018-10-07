/**
 * Ejercicio3DOM:  
 * A  partir  del  ejemplo  anterior,visualiza  el  contenido  de  cada  párrafo  
 * al  final  de  la  página  utilizando  .innerText  e  .innerHTML.
 * Comprueba qué  ocurre  al  añadir  texto  y  contenido  html  con  .innerText,
 * .textContent  e  .innerHTML.
 * ¿Cómo  podemos  añadir  texto  al  segundo  párrafo,  sin  afectar  a  los  
 * elementos  hijosdel  mismo?
 *  Para no afectar a las etiquetas que están dentro necesitamos utilizar o innerHTML
 * Utiliza  botones  para  que  en  la  página  se pueda  elegir  qué  contenido  
 * se  quiere  sustituir.
 */

(function () {
    let parrafo1 = document.getElementById("parrafo1");
    let parrafo2 = document.getElementById("parrafo2");
    document.getElementById("btn1").addEventListener("click", function(){
        reset();
        parrafo2.innerText += " Contenido extra";
    });

    document.getElementById("btn2").addEventListener("click", function(){
        reset();
        parrafo2.innerHTML += " Contenido extra";
    });

    document.getElementById("btn3").addEventListener("click", function(){
        reset();
        parrafo2.textContent += " Contenido extra";
    });

    console.log("Contenido del 1er párrafo innerText --> " + parrafo1.innerText);
    console.log("Contenido del 1er párrafo innetHTML --> " + parrafo1.innerHTML);
    console.log("Contenido del 1er párrafo textContent --> " + parrafo1.textContent);

    let contenido = parrafo2.innerHTML;

    console.log("Contenido del 2º párrafo innerText --> " + parrafo2.innerText);
    console.log("Contenido del 2º párrafo innetHTML --> " + parrafo2.innerHTML);
    console.log("Contenido del 2º párrafo textContent --> " + parrafo2.textContent);

    parrafo1.innerText += "añadido con innerText, ";
    parrafo1.innerHTML += "añadido con innerHTML, ";
    parrafo1.textContent += "añadido con textContetn";

    parrafo2.innerText += "añadido con innerText, ";
    parrafo2.innerHTML += "añadido con innerHTML, ";
    parrafo2.textContent += "añadido con textContetn";

    //Para poder añadir contenido sin variar a las etiquetas que están dentro del párrafo
    //tenemos que utilizar la propiedad innerHTML, puesto que con las otras, lo que 
    //hacemos es inutilizar las etiquetas internas
    parrafo2.innerHTML = contenido;
    parrafo2.innerHTML += "Esto no afecta a las etiquetas internas";
    
    function reset() {
        parrafo2.innerHTML = contenido;
    }

})();
