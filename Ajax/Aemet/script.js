(function() {
    let key = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYWNob19wZW5hQGhvdG1haWwuY29tIiwianRpIjoiZjBlNjdhNmEtOWQzMi00NTkzLWFmZTktYTBiMjVhYTY5YzkwIiwiaXNzIjoiQUVNRVQiLCJpYXQiOjE1NDY5MzY5NzYsInVzZXJJZCI6ImYwZTY3YTZhLTlkMzItNDU5My1hZmU5LWEwYjI1YWE2OWM5MCIsInJvbGUiOiIifQ.EgyVfXO-0_iPv9e5nRNvFQKC2FkltEe1vFz9rdzsV8I";
    var url = `https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/18087/?api_key=${key}`;
    var solicitud = new XMLHttpRequest();
    solicitud.open("GET", url);
    solicitud.onload = function() {
        if (solicitud.status == 200) {
            let obj = JSON.parse(solicitud.responseText);
            obtenerDatos(obj.datos);
        }
    };
    solicitud.send(null);

    function obtenerDatos(url) {
        let request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => {
            if (request.status == 200) {
                let data = JSON.parse(request.responseText);
                pintarDatos(data);
            }
        } 
        request.send(null);
    }

    function pintarDatos(data) {
        data.forEach(element => {
            element.prediccion.dia.forEach((item, index) => {
                createRow(item.fecha, item.probPrecipitacion[0].value, 
                    item.humedadRelativa, item.viento[0].velocidad, item.temperatura,
                    item.sensTermica)
            })
        });
    }

    function createRow(dia, probLluvia, humRel, viento, temp, sensTer) {
        $('table.table tbody').append(
            `<tr>
                <th scope="row">${dia}</th> 
                <td>${probLluvia}%</td>
                <td>${humRel.maxima}/${humRel.minima} %</td>
                <td>${viento} km/h</td>
                <td>${temp.maxima}ºC - ${temp.minima}ºC</td>
                <td>${sensTer.maxima}ºC - ${sensTer.minima}ºC</td>
            </tr>`
        );
    }

    function getDay(index) {
        let dia = '';
        
    }

// function actualizaVentas(respuesta) {
//     var divVentas = document.getElementById("ventas");
//     var ventas = JSON.parse(respuesta); // pasamos el dato recibido en un string JSON  a un objeto (o array de objetos)
//     for (var i = 0; i < ventas.length; i++) {
//         var venta = ventas[i];
//         var div = document.createElement("div");
//         div.classList.add("venta");
//         div.textContent = venta.nombre + " vendió " + venta.ventas + " galletas";
//         divVentas.appendChild(div);
//     }
// }
// //Función escrita usando XMLHttpRequest Nivel 1, en IE o Opera, o versiones antiguas
// // de Firefox, Safari o Chrome, hay que usar esto en lugar del nivel 2
// // Podríamos llamarlo si el navegador no soporta el nivel 2
// function obtenerVentas_antiguo() {
//     var url = "./ventas.json"; //funciona en local ejecutandolo desde brackets (para no montar un servidor web)

//     var solicitud = new XMLHttpRequest();
//     solicitud.open("GET", url);
//     solicitud.onreadystatechange = function() {
//         if (solicitud.readyState == 4 && solicitud.status == 200) {
//             actualizaVentas(solicitud.responseText);
//         }
//     };
//     solicitud.send(null);
// }
}());
