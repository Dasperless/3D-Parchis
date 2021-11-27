(function () {
    const sendBtn = document.querySelector('#btnCrearJuego');
    let ws;
    const obtieneData = (data) => {
        console.log(data);
        const objData = JSON.parse(data);
        $("#creadorNombreJuegoServer").val(objData.nickname);
        $("#nombreJuegoServer").val(objData.identificador);
        $("#cantJugadorServer").val(objData.cantidadJugadoresUnidos);
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
            listaJugadores="[]"
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