/*
12.Faça um programa que receba um número do usuário e informe se
este número é par ou ímpar.
*/

function calcular(){//início da função
    event.preventDefault();
    //entrada
    //receber n1
    var numero = parseFloat(document.getElementById('numero').value);
    var resultado = "";
    // % = módulo - em programação significa: RESTO DA DIVISÃO
    
    var restoDivisao = numero % 2;

    if ( restoDivisao == 0 ) {//NÚMERO MÓDULO DE 2 É IGUAL A 0: par
        resultado = "Número é PAR";
    } else {//falso
        resultado = "Número é ÍMPAR";
    }

    //apresentar o resultado
    document.getElementById('resultado').innerHTML = resultado;
}//fim da função