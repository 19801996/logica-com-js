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
    var salario = parseFloat(document.getElementById('salario').value);
    var resultado = "";

    if (salario < 500) {//verdadeiro
        resultado = salario * 1.30;
        resultado = resultado.toFixed(2);
    } else {//falso
        resultado = "sem direito a reajuste";
    }

    //apresentar o resultado
    document.getElementById('resultado').innerHTML = resultado;
    
}