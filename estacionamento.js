
import verificarPlacaEstado from "./utils/verifica.js";
const enviar = document.querySelector("#botaoEntrada");

let str = "OZW 0A01"; 
console.log(verificarPlacaEstado(str))

var estacionamento = [];
var horaEntrada, horaSaida;
let matriz = new Array(10).fill().map(() => new Array(10).fill(null));

let vagas = 100

const modal = document.getElementById("dialog-box")
const closeModal = document.getElementById("btnClose")
const contador = document.getElementById("contador")

contador.innerHTML = `Vagas: ${vagas}`

let grid = document.getElementById('grid');

const criarDiv = (carro) => {

    const card = document.createElement('div');
    card.classList.add('card1');

    const content = document.createElement('div');
    content.classList.add('content');

    const back = document.createElement('div');
    back.classList.add('back');

    const backContent = document.createElement('div');
    backContent.classList.add('back-content');
    backContent.innerHTML = `Placa: ${carro.placa}`;


    back.appendChild(backContent);
    content.appendChild(back);
    card.appendChild(content);
    return card;
}

const adicionarCarro = () => {
    contador.innerHTML = `Vagas: ${--vagas}`
    grid.innerHTML = "";

    matriz.forEach((linha, i) => {
        linha.forEach((carro, j) => {
            if (carro !== null) {
                const div = criarDiv(carro);
                div.setAttribute("data-posicao", `${i}-${j}`);

                const btnRemove = document.createElement("button");
                btnRemove.setAttribute("class", "btnRemove");
                btnRemove.innerHTML = "X";
                btnRemove.addEventListener("click", (evt) => {
                    const linha = parseInt(posicao[0]);
                    const coluna = parseInt(posicao[1]);
                    modal.style.display = "block"
                    removeCarro(linha, coluna);
                });

                div.querySelector('.back-content').appendChild(btnRemove);
                grid.appendChild(div);

            }
        });
    });
    
};


const removeCarro = (linha, coluna) => {
    matriz[linha][coluna] = null;
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none"
    console.log(matriz)
})

const pegarHoraEntrada = () => {
    let tempo = new Date;
    let horaIn = tempo.getHours();
    let minIn = tempo.getMinutes();
    
    horaEntrada = horaIn*60 + minIn;
}

const pegarHoraSaida = () => {
    let tempo = new Date;
    let horaIn = tempo.getHours();
    let minIn = tempo.getMinutes();
    
    horaSaida = horaIn*60 + minIn;
}

const criarCarro = (event) => {
    event.preventDefault()
    const placa = document.querySelector('#placa').value;
    // pegarHoraEntrada();
    const carro = new Carro(placa)
    const posicaoCarro = inserirCarroAleatoriamente(carro, matriz)
    carro.posicao = posicaoCarro
    adicionarCarro()
};

const inserirCarroAleatoriamente = (carro, matriz) => {
    let min = 0;
    let max = 9;
    let linha, coluna;

    do {
        linha = Math.floor(Math.random() * (max - min + 1)) + min;
        coluna = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (matriz[linha][coluna] !== null);

    matriz[linha][coluna] = carro;
    return { linha, coluna };
}

const encontrarCarro = (carro, matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === carro) {
                return { linha: i, coluna: j };
            }
        }
    }
    return null;
}

enviar.addEventListener("click", criarCarro);

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
class Carro { 
    constructor(placa) {
        this.placa = placa;
        this.posicao = {};
    }
}






