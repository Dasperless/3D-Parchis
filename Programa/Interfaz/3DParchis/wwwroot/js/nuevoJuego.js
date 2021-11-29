let ws;
(function () {
    const sendBtn = document.querySelector('#btnCrearJuego');
    const obtieneData = (data) => {
        console.log(data);
        let objData = (JSON.parse(data));
        if (data.includes("crearPartida")) {
            var index = 0;
            console.log(objData);
            objData = objData.reverse();
            //if ($("#nombreJuegoServer").val()!=="") {
            //    index = objData.map(partida => partida.identificador).indexOf($("#nombreJuegoServer").val());
            //}
            $("#creadorNombreJuegoServer").val(objData[index].nickname);
            $("#nombreJuegoServer").val(objData[index].identificador);
            $("#cantJugadorServer").val(objData[index].cantidadJugadoresUnidos);
            console.log(objData[index].cantidadJugadoresUnidos);
            console.log($("#cantidadJugadorJuegoInput").val());
            const cantidadServer = (objData[index].cantidadJugadoresUnidos)*1;
            const cantidadJuego = ($("#cantidadJugadorJuegoInput").val()) * 1;
            if (cantidadServer === cantidadJuego) {
                $('#iniciarPartida').removeAttr("disabled");
            }
        }
        if (data.includes("juegoIniciado")) {
            const nombrePartida = $("#nombreJuegoServer").val();
            const resultado = objData.color.find(elemento => elemento.nickname === $("#creadorNombreJuegoServer").val());

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
            window.location.href = '../../Home/Juego/?idPartida=' + nombrePartida + '&idJugador=' + $("#creadorNombreJuegoServer").val() + '&turnoDe=' + objData.turnoDe + '&color=' + color;
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

        const jsonCrearPartida = {
            tipoMensaje: "crearPartida",
            identificador: "id",
            nickname: $("#niknameInput").val(),
            cantidadJugadorJuego: $("#cantidadJugadorJuegoInput").val(),
            cantidadJugadoresUnidos: "1",
            listaJugadores:[]
        }

        console.log(jsonCrearPartida);
        //const jsonUnirsePartida = {
        //    tipoMensaje: "unirsePartida",
        //    nombrePartida: "nombrePartida",
        //    nickname: "nombre"
        //}

        //const jsonVerRanking = {
        //    tipoMensaje: "verRanking",
        //    nickname: "nombre"
        //}


        ws.send(JSON.stringify(jsonCrearPartida));
    //    showMessage(JSON.stringify(jsonCrearPartida));
    }


    init();
})();

const iniciarPartida = () => {
    const nombrePartida = $("#creadorNombreJuegoServer").val();
    const jsonIniciarPartida = {
        tipoMensaje: "iniciarPartida",
        idPartida: $("#nombreJuegoServer").val()
    }
    ws.send(JSON.stringify(jsonIniciarPartida));
//    window.location.href = '../../Home/Juego/?idPartida=' + nombrePartida + '&idJugador=' + $("#creadorNombreJuegoServer").val();
}