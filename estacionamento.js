const enviar = document.querySelector("#botaoEntrada");

var estacionamento = [];
var horaEntrada, horaSaida;

const pegarHoraEntrada = () => {
    let tempo = new Date;
    let horaIn = tempo.getHours();
    let minIn = tempo.getMinutes();
    
    horaEntrada = horaIn*60 + minIn;
}

const pegarValor = () => {
    const placa = document.querySelector('#placa').value;
    pegarHoraEntrada();
    estacionamento.push(placa)
};

const pegarHoraSaida = () => {
    let tempo = new Date;
    let horaIn = tempo.getHours();
    let minIn = tempo.getMinutes();
    
    horaSaida = horaIn*60 + minIn;
}

enviar.addEventListener("click", pegarValor);

function calculaPreco(hIn, hOut) {
    const tempoTotal = hOut - hIn
    let preco, soHoras;

    if(tempoTotal <= 15) {
        return 0;
    } else {
        const tempoHoras = tempoTotal / 60;
        soHoras = Math.ceil(tempoHoras)

        if(soHoras <= 3) {
            preco = 10;
            return preco
        } else {
            preco = 10 + ((soHoras - 3) * 3)
            return preco
        }
    }    
}

console.log(calculaPreco(0, 15))



//////////////////////////////
//GKJ 0A01 a HOK 9J99 Minas Gerais (MG)
//NXX 0A01 a NYG 9J99 Minas Gerais (MG) 2ª sequência
//OLO 0A01 a OMH 9J99 Minas Gerais (MG) 3ª sequência
//OOV 0A01 a ORC 9J99 Minas Gerais (MG) 4ª sequência
//OWH 0A01 a OXK 9J99 Minas Gerais (MG) 5ª sequência
//PUA 0A01 a PZZ 9J99 Minas Gerais (MG) 6ª sequência
//QMQ 0A01 a QQZ 9J99 Minas Gerais (MG) 7ª sequência
//KAV 0A01 a KFC 9J99 Goiás (GO)
//NFC 0A01 a NGZ 9J99 Goiás (GO) 2ª sequência
//NJX 0A01 a NLU 9J99 Goiás (GO) 3ª sequência
//NVO 0A01 a NWR 9J99 Goiás (GO) 4ª sequência
//OGH 0A01 a OHA 9J99 Goiás (GO) 5ª sequência
//OMI 0A01 a OOF 9J99 Goiás (GO) 6ª sequência
//PQA 0A01 a PRZ 9J99 Goiás (GO) 7ª sequência
//QRC 0A01 a QTX 9J99 Goiás (GO) 8ª sequência

//---- Fazendo esta parte primeiro -----
//JDP 0A01 a JKR 9J99 Distrito Federal (DF)
//OVM 0A01 a OVV 9J99 Distrito Federal (DF) 2ª sequência
//OZW 0A01 a PBZ 9J99 Distrito Federal (DF) 3ª sequência


let str = "OZW 0A01";

function verificarEstado (placaVeh){
    
}






