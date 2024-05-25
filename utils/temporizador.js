
export default function calculaPreco(ent, out) {
    let [hE, mE] = ent.split(":").map(Number);
    let [hS, mS] = out.split(":").map(Number);

    let minS = (hS*60) + mS
    let minE = (hE*60) + mE

    const interval = minS - minE

    let preco, soHoras;

    if(interval <= 15) {
        return 0, interval;
    } else {
        const tempoHoras = interval / 60;
        soHoras = Math.ceil(tempoHoras)

        if(soHoras <= 3) {
            preco = 10;
            return preco, interval
        } else {
            preco = 10 + ((soHoras - 3) * 3)
            return preco, interval
        }
    }    
}
