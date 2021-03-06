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
            element.prediccion.dia.forEach((item) => {
                createRow(item.fecha, item.probPrecipitacion[0].value, 
                    item.humedadRelativa, item.viento[0].velocidad, item.temperatura,
                    item.sensTermica)
            })
        });
    }

    function createRow(dia, probLluvia, humRel, viento, temp, sensTer) {
        $('table.table tbody').append(
            `<tr>
                <th class='text-center' scope="row">${dia}</th> 
                <td class='text-center'>${probLluvia}%</td>
                <td class='text-center'>${humRel.maxima}-${humRel.minima} %</td>
                <td class='text-center'>${viento} km/h</td>
                <td class='text-center'>${temp.maxima}ºC - ${temp.minima}ºC</td>
                <td class='text-center'>${sensTer.maxima}ºC - ${sensTer.minima}ºC</td>
            </tr>`
        );
    }
}());
