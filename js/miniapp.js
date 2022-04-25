
let departureDataEntry = prompt ("Digite a data de partida (Formato DD/MM/YYYY) ")

let departureDate = moment(departureDataEntry, "DD/MM/YYYY")

let today = moment()

let datediff = today - departureDate

let opcaoDesejada = prompt( "Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias ")

if(opcaoDesejada == "1"){
    let secondsOfDeparture = (datediff / 1000)
    alert("Tempo de voo:" + secondsOfDeparture + " segundos ") 
} else if(opcaoDesejada == "2"){
    let minutesOfDeparture = (datediff /1000 / 60)
    alert("Tempo de voo: " + minutesOfDeparture + "minutos")
}  else if(opcaoDesejada == "3"){
    let hoursOfDeparture = (datediff /1000 / 3600)
    alert("Tempo de voo: " + hoursOfDeparture + "horas")
}  else if(opcaoDesejada == "4"){
    let daysOfDeparture = (datediff /1000 / 3600 / 24)
    alert("Tempo de voo: " + daysOfDeparture + "dias")
} else {
    alert ("Opcao invalida!!")
}
