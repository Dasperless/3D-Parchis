﻿let ws;
let partidaGlobal;
(function () {
    const sendBtn = document.querySelector('#buscarPartidas');
/*    let ws;*/
    const obtieneData = (data) => {
        console.log(data);
        const objData = JSON.parse(data);
        if (data.includes("crearPartida")) {
            var html = "";
            for (var i = 0; i < objData.length; i++) {
                html += "<tr>";
                html += "<td>" + objData[i].identificador + "</td>";
                html += "<td>" + objData[i].nickname + "</td>";
                html += "<td>" + objData[i].cantidadJugadorJuego + "</td>";
                html += "<td>" + objData[i].cantidadJugadoresUnidos + "</td>";
                console.log(objData[i].identificador);
                html += "<td><button class='btn btn-outline-success' id='" + objData[i].identificador + "' onclick='iniciarJuego(this.id)'>Unirse <i class='bx bx-check bx-burst-hover bx-border-circle'></i></button></td>";
                html += "</tr>";
            }
            $("#tbodyJuego").html(html);
        }
        if (data.includes("juegoIniciado")) {
            //var results = objData.color.filter(function (nickname) { return objData.color.nickname === $("#niknameInput").val(); });
            const resultado = objData.color.find(elemento => elemento.nickname === $("#niknameInput").val());

            let color = "";
            if (resultado.color === 1) {
                color = "ffff00"
            }
            if (resultado.color === 2) {
                color = "001fff"
            }
            if (resultado.color === 3) {
                color = "ff0000"
            }
            if (resultado.color === 4) {
                color = "0c9700"
            }
            console.log(resultado);
            window.location.href = '../../Home/Juego/?idPartida=' + partidaGlobal + '&idJugador=' + $("#niknameInput").val() + '&turnoDe=' + objData.turnoDe + '&color=' + color;

        }
        //$("#creadorNombreJuegoServer").val(objData.nickname);
        //$("#nombreJuegoServer").val(objData.identificador);
        //$("#cantJugadorServer").val(objData.cantidadJugadoresUnidos);
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

    sendBtn.onclick = function () {
        console.log("Entra");
        if (!ws) {
            console.log("No WebSocket connection :(");
            return;
        }

        ws.binaryType = 'arraybuffer';

        const jsonConsultaPartida = {
            tipoMensaje: "getPartidas",
            nickname: $("#niknameInput").val()
        }

        console.log(jsonConsultaPartida);
        //const jsonUnirsePartida = {
        //    tipoMensaje: "unirsePartida",
        //    nombrePartida: "nombrePartida",
        //    nickname: "nombre"
        //}

        //const jsonVerRanking = {
        //    tipoMensaje: "verRanking",
        //    nickname: "nombre"
        //}


        ws.send(JSON.stringify(jsonConsultaPartida));
    //    showMessage(JSON.stringify(jsonCrearPartida));
    }

    init();
})();

const iniciarJuego = (idJuego) => {
    console.log(idJuego);
    partidaGlobal = idJuego;
    const jsonUnirsePartida = {
        tipoMensaje: "unirsePartida",
        idPartida: idJuego,
        nickname: $("#niknameInput").val(),
        nickname: $("#niknameInput").val(),
    }
    ws.send(JSON.stringify(jsonUnirsePartida));
    $("#buscarPartidas").click();
}