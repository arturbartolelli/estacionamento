
import verificarPlacaEstado from "./utils/verifica.js";

const enviar = document.getElementById("botaoEntrada");


let matriz = new Array(10).fill().map(() => new Array(10).fill(null));

let vagas = 100

const modal = document.getElementById("dialog-box")
const infoPlaca = modal.getElementsByClassName("placa")[0]
const infoEstado = modal.getElementsByClassName("estado")[0]
const infoPosicao = modal.getElementsByClassName("posicao")[0]
const infoTempo = modal.getElementsByClassName("tempoTotal")[0]
const infoValor = modal.getElementsByClassName("valorTotal")[0]

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

const encontrarCarro = (carro, matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === carro) {
                return [i, j];
            }
        }
    }
    return null;
}

const removeCarro = (linha, coluna, div) => {
    matriz[linha][coluna] = null;
    grid.removeChild(div)
    contador.innerHTML = `Vagas: ${++vagas}`
}

const adicionarCarro = () => {
    contador.innerHTML = `Vagas: ${--vagas}`
    grid.innerHTML = "";

    matriz.forEach((linha, i) => {
        linha.forEach((carro, j) => {
            if (carro !== null) {

                const div = criarDiv(carro);

                console.log(carro.linha, carro.coluna)
                console.log(matriz)

                const btnRemove = document.createElement("button");
                btnRemove.setAttribute("class", "btnRemove");
                btnRemove.innerHTML = "X";
                btnRemove.addEventListener("click", (evt) => {

                    modal.style.display = "block"
                    addModal(carro)
                    removeCarro(carro.linha, carro.coluna,div);
                    console.log(matriz)
                });

                div.querySelector('.back-content').appendChild(btnRemove);
                grid.appendChild(div);

            }
        });
    });
    
};

const addModal = (carro) => {
    infoPlaca.innerHTML = `Placa: ${carro.placa}`
    infoEstado.innerHTML = `Estado: ${carro.estado}`
    infoPosicao.innerHTML = `Posição: ${carro.linha} x ${carro.coluna}`
}

const inserirCarroAleatoriamente = (carro, matriz) => {
    let min = 0;
    let max = 9;
    let linha, coluna;

    do {
        linha = Math.floor(Math.random() * (max - min + 1)) + min;
        coluna = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (matriz[linha][coluna] !== null);

    matriz[linha][coluna] = carro;
}

const criarCarro = (event) => {
    
    event.preventDefault()
    const placa = document.querySelector('#placa').value;
    const entrada = document.querySelector('#entrada').value;
    const saida = document.querySelector('#saida').value;


    if(verificarPlacaEstado(placa)) {
        const carro = new Carro(placa, verificarPlacaEstado(placa), entrada, saida)
        
        inserirCarroAleatoriamente(carro, matriz)

        const posicao = encontrarCarro(carro, matriz)
        const [linha, coluna] = posicao

        carro.linha = linha
        carro.coluna = coluna
        console.log(carro.entrada, carro.saida)
        adicionarCarro()
    }
    
};



closeModal.addEventListener("click", () => {
    modal.style.display = "none"
})


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

class Carro { 
    constructor(placa, estado, entrada, saida) {
        this.placa = placa;
        this.linha;
        this.coluna;
        this.estado = estado;
        this.entrada = entrada;
        this.saida = saida;
        this.tempoTotal;
        this.preco;
    }

    info() {
        return this.linha, this.coluna, this.estado, this.placa
    }
}






