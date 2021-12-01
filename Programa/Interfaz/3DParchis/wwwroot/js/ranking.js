let ws;
(function () {
    const sendBtn = document.querySelector('#sendBtn');
    const obtieneData = (data) => {
        console.log(data);
        const objData = JSON.parse(data);
        if (data.includes("ranking")) {
            html = "";
            for (var i = 0; i < objData.ganadores.length; i++) {
                html += "<tr>";
                html += "<td>" + objData.ganadores[i].nombre + "</td>"
                html += "<td>" + objData.ganadores[i].creador + "</td>"
                html += "<td>" + objData.ganadores[i].idPartida + "</td>"
                html += "</tr>";
            }
            $("#tbJudador").html(html);
        }
    
    }


    // Abre conexion con el socketServer
    function init() {
        if (ws) {
            ws.onerror = ws.onopen = ws.onclose = null;
            ws.close();
        }

        ws = new WebSocket('ws://parchis3dtec.loca.lt');
        ws.onopen = () => {
            console.log('Connection opened!');
        }
        ws.binaryType = 'arraybuffer';
        ws.onmessage = ({ data }) => obtieneData(data);
        ws.onclose = function () {
            ws = null;
        }
    }

    init();
    sendBtn.onclick = function () {
    console.log("Entra");
    if (!ws) {
        console.log("No WebSocket connection :(");
        return;
    }

    ws.binaryType = 'arraybuffer';

    const jsonTirarDado = {
        tipoMensaje: "verRanking",
        //nickname: $("#identificacionJugadorText").text(),

    }

    console.log(jsonTirarDado);
    ws.send(JSON.stringify(jsonTirarDado));
    }


    init();
    //$("#sendBtn").click();
})();


//$(document).ready(function () {
//    $("#sendBtn").click();
//});
