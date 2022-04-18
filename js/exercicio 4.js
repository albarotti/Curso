let nomedopiloto = prompt ("Qual o nome do piloto?")
let velocidadeInicial = 0 
let velocidadeDesejada = prompt ("Qual velocidade você deseja?")
let velocidadeEscolhida = confirm ("Estamos viajando na velocidade " + velocidadeDesejada + "km/s")
if (velocidadeEscolhida) {
    velocidadeInicial = velocidadeDesejada
}
if (velocidadeInicial <= 0) {
    alert ("Nave esta parada. Considere  partir  e aumentar a velocidade!")
} else if( velocidadeInicial < 40 ){
    alert ("Você esta devagar, podemos aumentar mais!")
} else if( velocidadeInicial < 80){
    alert("Parece que estamos em uma boa velocidade!")
} else if ( velocidadeInicial < 100) {
    alert ("VELOCIDADE ALTA, CONSIDERE DIMINUIR !!")
} else {
    alert ("VELOCIDADE PERIGOSA. CONTROLE AUTOMATICO INICIADO")
}
alert ("Piloto: " + nomedopiloto + "\nVelocidade: " + velocidadeInicial + "km/s" )