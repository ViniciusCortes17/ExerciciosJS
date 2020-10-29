/*
1) Desenvolva uma aplicação em JavaScript para ler o nome, as três notas e o número de
faltas de um aluno e escrever qual a sua situação final: Aprovado, Reprovado por Falta
ou Reprovado por Média. A média para aprovação é 70 e o limite de faltas é 25% do
total de aulas. O número de aulas ministradas no semestre foi de 80. A reprovação por
falta sobrepõe a reprovação por Média.
*/

const MEDIA = 70;
const NUMERO_AULAS = 80;
const LIMITE_FALTAS = 25;
let nome = "Vinicius Cortes";
let nota1 = 80;
let nota2 = 90;
let nota3 = 85;
let numeroFaltas = 5;
let porcentagemFaltas = (numeroFaltas/NUMERO_AULAS)*100;
let media = (nota1 + nota2 + nota3) / 3;

if(media >= MEDIA && porcentagemFaltas <= LIMITE_FALTAS){
    console.log("O aluno " + nome + " está aprovado com média " + media.toFixed());
}else if (media >= MEDIA && porcentagemFaltas > LIMITE_FALTAS){
    console.log("O aluno " + nome + " está reprovado por falta");
}else{
    console.log("O aluno " + nome + " está reprovado por média" );
}

/*
2) Um comerciante comprou um produto e quer vendê-lo com um lucro de 45% se o valor
da compra for menor que R$ 50,00; caso contrário, o lucro será de 30%. Desenvolva
uma aplicação em JavaScript que leia o valor do produto e imprima o valor de venda
para o produto.
*/

let valorProduto = 100.00
const LUCRO30 = ((30 / 100)*valorProduto) + valorProduto;
const LUCRO45 = ((45 / 100)*valorProduto) + valorProduto;

if (valorProduto < 50.00){
    console.log("O valor de venda para o produto informado é de: $" + LUCRO45.toFixed(2));
}else {
    console.log("O valor de venda para o produto informado é de: $" + LUCRO30.toFixed(2));
}

/*3) Desenvolva uma aplicação em JavaScript para ler um salário e atualizá-lo de acordo
com a tabela abaixo.

| Faixa salárial       | Aumento |
|----------------------|---------|
| até 1.045,00         |   30%   |
| 1.045,01 a 1.500,00  |   25%   |
| 1.500,01 a 2.600,00  |   20%   |
| 2.600,01 a 3.550,00  |   15%   |
| Acima de 3.550,00    |   10%   |
*/

let salario = 3000.00;
const AUMENTO30 = ((30/100)*salario) + salario;
const AUMENTO25 = ((25/100)*salario) + salario;
const AUMENTO20 = ((20/100)*salario) + salario;
const AUMENTO15 = ((15/100)*salario) + salario;
const AUMENTO10 = ((10/100)*salario) + salario;

if (salario <= 1045.00){
    salario = AUMENTO30;
    console.log("O salário atual passara a ser: $" + salario.toFixed(2));
}else if (salario > 1045.00 && salario <= 1500.00){
    salario = AUMENTO25;
    console.log("O salário atual passara a ser: $" + salario.toFixed(2));
}else if (salario > 1500.00 && salario <= 2600.00){
    salario = AUMENTO20;
    console.log("O salário atual passara a ser: $" + salario.toFixed(2));
}else if (salario > 2600.00 && salario <= 3550.00){
    salario = AUMENTO15;
    console.log("O salário atual passara a ser: $" + salario.toFixed(2));
}else {
    salario = AUMENTO10;
    console.log("O salário atual passara a ser: $" + salario.toFixed(2));
}

/*
4) Para cada conjunto de valores abaixo, escreva o código em JavaScript usando laço(s)
onde na opção a é para ordenar o array de forma crescente e no caso do segundo, a
letra b é de forma decrescente.
a) 10 9 8 7 6 5 4 3 2 1
b) 0 1 4 9 16 25 36 49 64 81 100 
*/
/* a) */

var array1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let posicaoAtual;
    for(let i = 1; i < array1.length; i++) {
        let j = i - 1;
        posicaoAtual = array1[i];
        while(j >= 0 && posicaoAtual < array1[j]) {
            array1[j+1] = array1[j];
            j--;
        }
        array1[j+1] = posicaoAtual;
    }
  console.log(array1);

/* b) */

  var array2 = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

  for(let i = 1; i < array2.length; i++) {
    let j = i - 1;
    posicaoAtual = array2[i];
    while(j >= 0 && posicaoAtual > array2[j]) {
        array2[j+1] = array2[j];
        j--;
    }
    array2[j+1] = posicaoAtual;
}
console.log(array2);

/*
5) Uma faculdade oferece um curso que prepara os candidatados a obter licença estadual
para corretor de imóveis. No ano passado, dez alunos que concluíram esse curso
prestaram o exame. A universidade quer saber como foi o desempenho dos seus alunos
que concluíram esse curso prestaram o exame. Você foi contratado para escrever de
programa que resuma os resultados. Para tanto, você recebeu uma lista desses 10
alunos. Ao lado de cada nome é escrito 1 se o aluno, passou no exame ou 2 se o aluno
foi reprovado.
Desenvolva uma aplicação em JavaScript que:
a) Insira a cada resultado do exame (isto é, um 1 ou um 2). Exiba a mensagem
“Inserir resultado” na tela toda vez que o programa solicitar o resultado do outro
exame.
b) Conte o número de cada tipo de resultado.
c) Exiba um resumo dos resultados do exame indicando o número de alunos
aprovados e reprovados.
d) Se mais de oito estudantes forem aprovados no exame, imprima a mensagem
“Bonus to Instructor!” 
*/

let numeroAprovados = 0;
let numeroReprovados = 0;
var num;
 for(let i = 0;i < 10; i++){
    num = prompt("Inserir resultado: ");
    if(num == 1){
        numeroAprovados++;
    }else if(num == 2){
        numeroReprovados++;
    }
 }
  if(numeroAprovados > 8){
    alert("Alunos Aprovados: " + numeroAprovados + "\nAlunos Reprovados: " + numeroReprovados + "\nBonus to Instructor!");
  }else {
    alert("Alunos Aprovados: " + numeroAprovados + "\nAlunos Reprovados: " + numeroReprovados);
  }
  
/* 
6) Desenvolva uma aplicação em JavaScript para simular o lançamento de dois dados em
uma jogada de 10. A soma dos dois valores deve então ser calculada. Cada dado pode
mostrar um valor de 1 a 6, portanto a soma dos valores irá variar de 2 a 12. Imprima
quando o resultado da soma for par e quando for impar e também a quantidade total de
pares em impares ao final.
*/

let valorDado1;
let valorDado2;
let totalPares = 0;
let totalImpares = 0;

    for(let i = 1; i <= 10;i++){
       valorDado1 = Math.floor( 1 + 6*Math.random() );
       valorDado2 = Math.floor( 1 + 6*Math.random() );
       if((valorDado1 + valorDado2) % 2 == 0){
        console.log("Lançamento de dois dados jogada " + i + " de 10:        dado 1: " + valorDado1 + "        dado 2: " + valorDado2 + "        soma dos valores = " + (valorDado1 + valorDado2) + "(par)");
        totalPares++;
       } else {
        console.log("Lançamento de dois dados jogada " + i + " de 10:        dado 1: " + valorDado1 + "        dado 2: " + valorDado2 + "        soma dos valores = " + (valorDado1 + valorDado2) + "(impar)");
        totalImpares++;
       }
      
    }
console.log("Quantidade total de números pares: " + totalPares);
console.log("Quantidade total de números impares: " + totalImpares);

/* teste*/ 