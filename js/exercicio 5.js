let distanciaAnosLuz = prompt("Digite a distância em anos-luz")

let opcaoDesejada = prompt("Para qual unidade deseja conveter?\n1. Parse(pc)\n2. Unidade Astronômica (AU)\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")

let opcaoEscolhida
let conversaoDesejada

switch(opcaoDesejada) {
    case "1":
        opcaoEscolhida = "Parsec"
        conversaoDesejada = distanciaAnosLuz * 0.306601
        break
    case "2":
        opcaoEscolhida = "Unidade Astronômica"
        conversaoDesejada = distanciaAnosLuz * 63241.1
        break
    case "3":
        opcaoEscolhida = "Quilômetros"
        conversaoDesejada = distanciaAnosLuz * 9.5 * Math.pow(10, 12)
        break
    default:
        opcaoEscolhida = "Unidade não identificada"
        conversaoDesejada = "Conversão fora do escopo"
}

alert("Distância em Anos-luz: " + distanciaAnosLuz + "\n" + opcaoEscolhida + ": " + conversaoDesejada)