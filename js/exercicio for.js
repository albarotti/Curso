
let nave = prompt ("Qual o nome da nave?")
let letraPrimaria = prompt ("Qual letra deseja mudar?")
let letraSecundaria = prompt ("Para qual letra deseja mudar?")
let novoNome = ""

for (let i = 0; i < nave.length; i++ ){
    if (nave[i] == letraPrimaria){
        novoNome += letraSecundaria
    } else{
        novoNome += nave[i]
        }
    }
alert ("O novo nome da nave é : " +novoNome )
    
    
