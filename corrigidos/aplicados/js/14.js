/*
12.Faça um programa que receba um número do usuário e informe se
este número é par ou ímpar.
*/

function calcular(){//início da função
    event.preventDefault();
    //entrada
    //receber n1
    var codigo = parseInt(document.getElementById('codigo').value);
    var procedencia = "nenhuma das possibilidades";

    if ( codigo == 1 ) {//NÚMERO MÓDULO DE 2 É IGUAL A 0: par
        procedencia = "Sul";
    } else if (codigo == 2){
        procedencia = "Norte";
    } else if (codigo == 3){
        procedencia = "Leste";
    } else if (codigo == 4){
        procedencia = "Oeste";
    } else if (codigo == 5 || codigo == 6){
        procedencia = "Nordeste";
    } else if (codigo == 7 || codigo == 8 || codigo == 9){
        procedencia = "Sudeste";
    } else if (codigo >=10 && codigo <= 20){
        procedencia = "Centro-Oeste";
    } else {
        procedencia = "Sem definição";
    }

    //apresentar o resultado
    document.getElementById('resultado').innerHTML = procedencia;
}//fim da função