/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

const botaoSubtrair = document.getElementById("subtrair")
const botaoMultiplicar = document.getElementById("multiplicar")
const botaoDividir = document.getElementById("dividir")

c
function somar() {

    const numero1 = parseFloat (document.querySelector("#numero1Soma").value)
    const numero2 = parseFloat (document.querySelector("#numero2Soma").value)

    const total = numero1 + numero2

    
    const paragrafo = document.getElementById("resultadoSoma")
    const resultado = document.createElement('strong')
    paragrafo.appendChild(resultado)
    resultado.innerText = total
}

function subtrair() {
    
    const numero1 = parseFloat(document.querySelector("#numero1Sub").value)
    const numero2 = parseFloat(document.querySelector("#numero2Sub").value)

    const igual = numero1 - numero2

    const paragrafo = document.getElementById("resultadoSub")
    const resultado2 = document.createElement('strong')
    paragrafo.appendChild(resultado2)
    resultado2.innerText = igual    
}

function multiplicar() {
    const numero1 = parseFloat(document.querySelector("#numero1Mult").value)
    const numero2 = parseFloat(document.querySelector("#numero2Mult").value)
    
    const resultadoFinalMult = numero1 * numero2
     
    const pararagrafo = document.querySelector("#resultadoMult")
    const resultado3= document.createElement('strong')
    pararagrafo.appendChild(resultado3)
    resultado3.innerText = resultadoFinalMult
   // document.getElementById("resultadoMult").innerHTML  

}

function dividir() {
 
    const numero1 = parseFloat(document.querySelector("#numero1Div").value)
    const numero2 = parseFloat(document.querySelector("#numero2Div").value)
    
    const resultadoFinalDiv = numero1/numero2

    const pararagrafo = document.querySelector("#resultadoDiv")
    const resultado4= document.createElement('strong')
    pararagrafo.appendChild(resultado4)
    resultado4.innerText = resultadoFinalDiv 

}

//botaoSubtrair.addEventListener('click', subtrair)
//botaoMultiplicar.addEventListener('click', multiplicar)
//botaoDividir.addEventListener('click',dividir)