var numero1 = 10
var numero2 = 5
var nome = "gabriel"

// if (numero1> numero2){
//     console.log("Sim o número é Maior")
//     document.getElementById('Resposta').innerHTML ="<h1>Sim o numero é Maio</h1>"
// }
// else if (numero1== numero2) [
// console.log("Os numeros são iguais !!!")
// ]
// else{
//     console.log("Não, o numero não é Maior")
// }

function comparar() {
    var num1 = document.getElementById('numero1').value
    var num2 = document.getElementById('numero2').value


    console.log(num1)
    console.log(num2)

    if (parseInt(num1 > num2)) {
        console.log("o numero: " + num1 + "é maior que o numero " + num2)
        alert("o numero: " + num1 + "é maior que o numero " + num2)
    }
    else if (parseInt(num1) == parseInt(num2)) {
        alert("os dois numeros são iguais")
    }
    else{
        alert("o numero: "+ num2 + "é maior que o numero " + num1)
    }

}