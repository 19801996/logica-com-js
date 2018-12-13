/*
Uma empresa decide dar aumento de 30% aos funcionários cujo
salário é inferior a 500 reais. Escreva um programa que receba o
salário de um funcionário e imprima o valor do salário reajustado ou
uma mensagem caso o funcionário não tenha direito a aumento.
*/

function calcular(){
    event.preventDefault();
    //entrada
    //receber n1
    var numero = parseFloat(document.getElementById('numero').value);
    var resultado = "";

    if (numero >= 0) {//verdadeiro
        resultado = "Número é positivo";
    } else {//falso
        resultado = "Número é negativo";
    }

    //apresentar o resultado
    document.getElementById('resultado').innerHTML = resultado;
    
}