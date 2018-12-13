/*
7. Faça um programa que receba o nome, cargo e salário de um
funcionário. Calcule o salário acrescido de 10%. Ao final exiba o nome,
o cargo e o novo salário desse funcionário.
*/

function batata(){
    alert('FUNÇÃO BATATA');
}

function calcular(){
    event.preventDefault();
    //entrada
    // <input class="form__input" type="text" id="nome" placeholder="Ex: João">
    var nome    = document.getElementById('nome').value;
    var cargo   = document.getElementById('cargo').value;
    
    var salario = parseFloat(document.getElementById('salario').value);
    var aumento = 0;

    if(salario > 100){  //true
        aumento = 50;
    }
    //processamento
    var novoSalario = salario + aumento;

    //saída
    document.getElementById('resultado').innerHTML = novoSalario;
}