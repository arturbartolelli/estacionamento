//---- Fazendo esta parte primeiro -----
//JDP 0A01 a JKR 9J99 Distrito Federal (DF)
//OVM 0A01 a OVV 9J99 Distrito Federal (DF) 2ª sequência
//OZW 0A01 a PBZ 9J99 Distrito Federal (DF) 3ª sequência

let plate = "JKJ0A01";
let regexDF1 = /^[J][D-K][P-R][0-9][A-J][0-9]{2}$/;
let regexDF2 = /^[O][V][M-V][0-9][A-J][0-9]{2}$/;
let regexDF3 = /^[O-P][B-Z][W-Z][0-9][A-J][0-9]{2}$/;

if (regexDF1.test(plate)) {
    console.log("A placa é do DISTRITO FEDERAL1.");
}else if(regexDF2.test(plate)){
    console.log("A placa é do DISTRITO FEDERAL2.");
}else if(regexDF3.test(plate)){
    console.log("A placa é do DISTRITO FEDERAL3.");
}
else {
    console.log("A placa NÃO é do DISTRITO FEDERAL.");
}

//---- Fazendo esta parte segundo -----
//KAV 0A01 a KFC 9J99 Goiás (GO)
//NFC 0A01 a NGZ 9J99 Goiás (GO) 2ª sequência
//NJX 0A01 a NLU 9J99 Goiás (GO) 3ª sequência
//NVO 0A01 a NWR 9J99 Goiás (GO) 4ª sequência
//OGH 0A01 a OHA 9J99 Goiás (GO) 5ª sequência
//OMI 0A01 a OOF 9J99 Goiás (GO) 6ª sequência
//PQA 0A01 a PRZ 9J99 Goiás (GO) 7ª sequência
//QRC 0A01 a QTX 9J99 Goiás (GO) 8ª sequência

let regexGO1 = /^[K][A-F][C-V][0-9][A-J][0-9]{2}$/;
let regexGO2= /^[N][FG][C-Z][0-9][A-J][0-9]{2}$/;
let regexGO3 = /^[N][J-L][U-X][0-9][A-J][0-9]{2}$/;

if (regexGO1.test(plate)) {
    console.log("A placa é do GOIÁS1.");
}else if(regexGO2.test(plate)){
    console.log("A placa é do GOIÁS2.");
}else if(regexGO3.test(plate)){
    console.log("A placa é do GOIÁS3.");
}
else {
    console.log("A placa NÃO é do GOIÁS.");
}