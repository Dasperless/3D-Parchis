let ws;
(function () {
    const sendBtn = document.querySelector('#btnTirarDado');
    const obtieneData = (data) => {
        console.log(data);
        const objData = JSON.parse(data);
        if (data.includes("resultadoDado")) {
            if (objData.nickname === $("#identificacionJugadorText").text()) {
                $("#resDado").text(objData.resultadoDado);
            }
        }
        if (data.includes("movimientoFicha")) {
/*            setposicion(objData.idFicha, objData.posFicha);*/

            //$('#' + objData.idFicha).css('visibility', 'hidden');
            const elementoPadre = $('#' + objData.idFicha).parent();
            console.log(elementoPadre);
            let totalelementoEnTd = $("#" + elementoPadre.prevObject[0].id).siblings().length;
            console.log($("#" + elementoPadre.prevObject[0].id));
            console.log(totalelementoEnTd);
            const idPadre = elementoPadre[0].id;
            if (idPadre !== "" && totalelementoEnTd===0) {
                var id = idPadre.substring(0, idPadre.length - 3);
                console.log("id==>", id);
                $("#" + idPadre).text(id);
            }
            //console.log(elementoPadre);
            $('#' + objData.idFicha).remove();
            setposicion(objData.idFicha, objData.posFicha);
            //$('#btnTirarDado').attr("disabled");
            $("#btnTirarDado").attr('disabled', 'disabled');
            $("#turnoDe").text(objData.turnoJugador);
            if ($("#identificacionJugadorText").text() === objData.turnoJugador) {
                $('#btnTirarDado').removeAttr("disabled");
            }
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

    sendBtn.onclick = function () {
        console.log("Entra");
        if (!ws) {
            console.log("No WebSocket connection :(");
            return;
        }

        ws.binaryType = 'arraybuffer';

        const jsonTirarDado = {
            tipoMensaje: "tirarDado",
            nickname: $("#identificacionJugadorText").text(),

        }

        console.log(jsonTirarDado);
        ws.send(JSON.stringify(jsonTirarDado));
    }


    init();
}) ();

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


$(document).ready(function () {
    const idPartida = getParameterByName("idPartida");
    const idJugador = getParameterByName("idJugador");
    const turnoDe = getParameterByName("turnoDe");
    const color = getParameterByName("color");
    //console.log(color);
    $("#identificacionJuegoText").text(idPartida);
    $("#identificacionJugadorText").text(idJugador);
    $("#turnoDe").text(turnoDe);
    $("#colorInput").val("#"+color);

    if (idJugador === turnoDe) {
        $('#btnTirarDado').removeAttr("disabled");
    }
    //console.log(idPartida);
    //console.log(idJugador);
    //console.log(turnoDe);
    
});

const getFichaMovimiento = (idFicha) => {
    //console.log(idFicha);
    /*const pos = "14";*/
    const jsonFichaMover = {
        tipoMensaje: "moverFicha",
        nickname: $("#identificacionJugadorText").text(),
        idFicha: idFicha,
        dado: $("#resDado").text()
    }
    //$('#' + idFicha).attr('hidden', true);
    //console.log("Fichadadsdas: ", idFicha);
    //$('#' + idFicha).remove();


    ws.send(JSON.stringify(jsonFichaMover));
    //setposicion(idFicha,34);
}

const setposicion = (idFicha, pos) => {
    const color = idFicha.split("x")[1];
    //$("." + idFicha).hide();
    var elementoExistente = $("#" + pos + "pos").find('img');
    console.log(elementoExistente, "CANTIDAD", elementoExistente.length);
    var html = '<img class="fichaEncelda" src="/img/ficha' + color + '.png" id="' + idFicha + '" onclick="getFichaMovimiento(this.id)" />';
    if (elementoExistente.length === 0 || (elementoExistente[0].id).split('x')[1] !== color) {
        $("#" + pos + "pos").html(html);
    }
    else {
        $("#" + pos + "pos").append(html);
    }
    
}