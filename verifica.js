
function verificarPlacaEstado(plate) {

    const dfSequencesDF = [
        {start: "JDP0A01", end: "JKR9J99"},
        {start: "OVM0A01", end: "OVV9J99"}, 
        {start: "OZW0A01", end: "PBZ9J99"}   
    ];
    const dfSequencesMG = [
        {start: "GKJ0A01", end: "HOK9J99"},
        {start: "NXX0A01", end: "NYG9J99"}, 
        {start: "OLO0A01", end: "OMH9J99"}, 
        {start: "OOV0A01", end: "ORC9J99"},
        {start: "OWH0A01", end: "OXK9J99"}, 
        {start: "PUA0A01", end: "PZZ9J99"}, 
        {start: "QMQ0A01", end: "QQZ9J99"}  
    ];
    const dfSequencesGO = [
        {start: "KAV0A01", end: "KFC9J99"},
        {start: "NFC0A01", end: "NGZ9J99"}, 
        {start: "NJX0A01", end: "NLU9J99"}, 
        {start: "NVO0A01", end: "NWR9J99"},
        {start: "OGH0A01", end: "OHA9J99"}, 
        {start: "OMI0A01", end: "OOF9J99"}, 
        {start: "PQA0A01", end: "PRZ9J99"},
        {start: "QRC0A01", end: "QTX9J99"}   
    ];
    plate = plate.replace(/ /g, "").toUpperCase();

    for (let i = 0; i < dfSequencesDF.length; i++) {
        if (dfSequencesDF[i].start <= plate && plate <= dfSequencesDF[i].end) {
            return `"${plate}" esta placa é do DISTRITO FEDERAL`
        }
    }
    for (let i = 0; i < dfSequencesMG.length; i++) {
        if (dfSequencesMG[i].start <= plate && plate <= dfSequencesMG[i].end) {
            return `"${plate}" esta placa é de MINAS GERAIS`
        }
    }
    for (let i = 0; i < dfSequencesGO.length; i++) {
        if (dfSequencesGO[i].start <= plate && plate <= dfSequencesGO[i].end) {
            return `"${plate}" esta placa é de GOIÁS`
        }
    }
    return false;
}
console.log(verificarPlacaEstado("JDP 0A01"));  // Deve retornar true
console.log(verificarPlacaEstado("PCX 9A78"));  // Deve retornar false
console.log(verificarPlacaEstado("KBD 3C98"));
