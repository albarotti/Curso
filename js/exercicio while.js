let contagemInical = 0
let dobraEspacial = ""

let nomeDaNave = prompt("Qual o nome dessa nave?")

dobraEspacial  = prompt ("Deseja entrar em dobra espacial?\n1-Sim\n2-Não")

while (dobraEspacial == 1 ){
    contagemInical += 1
    dobraEspacial  = prompt ("Deseja entrar em dobra espacial?\n1-Sim\n2-Não")
}
alert (" Nave: " +nomeDaNave+ "\n Quantidade de dobras espaciais realizadas: " +contagemInical+" dobras")