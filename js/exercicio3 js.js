alert("Bem vindo! pediremos algumas informações");
let nomeMaisVelha = prompt("Informe o nome da pessoa mais velha");
let idadeMaisVelha = prompt("Informe a idade da pessoa mais velha");
let nomeMaisnova = prompt("Informe o nome da pessoa mais nova");
let idadeMaisnova = prompt("Informe a idade da pessoa mais nova");
let difDeIdade = idadeMaisVelha - idadeMaisnova ;
alert(
    "Pessoa mais velha: " + nomeMaisVelha + "\nIdade: " + idadeMaisVelha + 
    "\n\nPessoa mais nova: " + nomeMaisnova + "\nIdade: " + idadeMaisnova +
    "\n\nDiferença de idade: " + difDeIdade
)