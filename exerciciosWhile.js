
/*
Resumo das aulas até aqui (tudo o que vocês viram).
    
    Até a presente data em sala de aula já estudamos pseudocódigo,testes de mesa, surgimento, sintaxe e tipagem da linguagem JavaScript,como declarar os três tipos de variaveis,
    tipos de dados, operadores de comparação, relacionais e os matemáticos, tabela verdade, if, else if e else, tabela verdade, AND, OR e NOT, switch, arrays, operadores de incremento
    e decremento, for while e do..while.


- Execução dos exercícios abaixo com while e do..while.
a. Calcule a soma dos inteiros de 1 a 10.
*/

let i = 0;
let soma = 0

while (i <= 10 ){
    soma = soma + i;
  i++;
}
console.log(soma);
  
let i = 0;
let soma = 0

do{
    soma = soma + i;
    i++;
}while (i <= 10);
console.log(soma);

/*
b. Exibir os trinta primeiros valores da série de
Fibonacci. A série: 1, 1, 2, 3, 5, 8.
*/

let i = 1;
var fibonacci = [1,1];

   while(i <= 28){
     fibonacci[i+1] = (fibonacci[i] + fibonacci[i-1]);
     i++;      
   }
  console.log(fibonacci);
 

let i = 1;
var fibonacci = [1,1];

   do {
       fibonacci[i+1] = (fibonacci[i] + fibonacci[i-1]);
       i++;   
   }while(i <= 28);
   console.log(fibonacci);

/*
c. Desenvolva um programa, que receba o
número 5, calcule e mostre os resultados da
tabuada desse número.
*/

let i = 0;
numero = 5;
    
    while(i <= 10){
        console.log(numero + " X " +  i + " = " + (numero * i));
        i++;
    }


let i = 0;
numero = 5;
    do {
        console.log(numero + " X " +  i + " = " + (numero * i));
        i++;
    }while(i <= 10);