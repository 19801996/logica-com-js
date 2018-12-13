/*
Faça um programa que receba 4 notas de um aluno, calcule e imprima
a média aritmética das notas e a mensagem de APROVADO para média
superior ou igual a 7,0 ou a mensagem de REPROVADO
*/

function calcular(){
    event.preventDefault();
    //entrada
    //receber n1
    var n1 = parseFloat(document.getElementById('n1').value);
    //receber n2
    var n2 = parseFloat(document.getElementById('n2').value);
    //receber n3
    var n3 = parseFloat(document.getElementById('n3').value);
    //receber n4
    var n4 = parseFloat(document.getElementById('n4').value);
    var resultado = "";

    //calcular a média
    var media = (n1 + n2 + n3 + n4) / 4;

    //verificar se a média é maior ou igual 7 (media >= 7)
    if(media >= 7){// se verdadeiro
        resultado = "Aprovado";//entra aqui
    } else {//se falso
        resultado = "Reprovado";//entra aqui
    }

    resultado = resultado + ": " + media;
    //apresentar o resultado
    document.getElementById('resultado').innerHTML = resultado;
    
}