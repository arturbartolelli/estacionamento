

export class Intervalo {
    constructor() {
    this.intervalo = null;
    }
    iniciar() {
        if(this.intervalo === null) {
        this.now = new Date()
        this.hour = this.now.getHours();
        this.minute = this.now.getMinutes();
        this.minhour= this.hour*60 + this.minute
       
        this.intervalo = setInterval(() => {
            console.log("Horário", this.minhour)
            this.minhour +=1
            }, 1000)
        } else {
            console.log("O intervalo já foi iniciado.");
        }
    }
    parar() {
        if(this.intervalo !== null) {
            console.log("Último minuto:", this.minhour)
            let res = this.minhour - (this.hour*60+ this.minute)
            clearInterval(this.intervalo);
            this.intervalo = null;
            return `Intervalo de tempo: ${res/60}:${res%60}`
        } else {
            console.log("O intervalo já foi parado.");
        }
    }
}
      







