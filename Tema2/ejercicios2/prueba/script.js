(function () {
    document.getElementById("bcambio").addEventListener("click", function(){
        escribe();
    });

    function escribe() {
        var parrafo1 = document.getElementById("parrafo1");
        var parrafo2 = document.getElementById("parrafo2");
        var enlace = document.querySelector("#parrafo2 a");
        var ul = document.createElement("ul");
        var plantillaLi = document.createElement("li");
        var li = plantillaLi.cloneNode();
        li.classList.add("menuItem");
        li.innerText = "Uno";
        ul.appendChild(li);
        li = plantillaLi.cloneNode();
        li.appendChild(enlace);
        ul.appendChild(li);
        parrafo1.appendChild(ul);
        boton = document.getElementById("bcambio");
        boton.parentNode.removeChild(boton);
    }
})();