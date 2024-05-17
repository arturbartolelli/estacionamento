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


let str = "OZW 0A01";

function verificarEstado (placaVeh){
    
}






