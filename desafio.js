const nome = prompt("Qual seu Nome?")
const altura = prompt("Qual é sua altura?")
const peso = prompt("Qual seu peso?")
const imc = peso/(altura*altura)

alert (` ${nome} seu imc é: ${imc.toFixed(1)}`)
if (imc <18.5) {
    alert ("Você está Abaixo do peso")
} else if (imc >= 18.5 && imc <=24.9){
    alert("Você está com Peso normal")
} else if (imc >= 24.9 && imc <= 29.9){
    alert ("Você está com Sobrepeso")
} else if ( imc > 29.9 && imc <= 34.9){
    alert ("Obesidade de grau 1")
} else if (imc >= 34,.9 && imc <= 39.9){
    alert ("Obesidade de grau 2")
} else {
    alert ("Obesidade de grau 3")
}
