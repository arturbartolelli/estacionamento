import verificarPlacaEstado from "./utils/verifica.js";
const enviar = document.querySelector("#botaoEntrada");


let str = "OZW 0A01"; 
console.log(verificarPlacaEstado(str))

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





