


let SOMA = 'somar' + '+';
const SUB = 'subtrair' + '-';
var MULT = 'multiplicar' + '*';
const DIV = 'dividir' + '/';
//a. Crie uma função que seja uma calculadora.//

function calculadora(tipoCalculo, num1, num2) {
  let total=0;
  switch(tipoCalculo) {
    case SOMA:
      total = soma(num1, num2);
      break;
    case SUB:
      total = subtrair(num1, num2);
      break;
    case MULT:
      total = multiplicar(num1, num2);
      break;
    case DIV:
      total = dividir(num1, num2);
      break;
    default:
      return total;
  }
  return total;
}

function soma(num1, num2) {
  return num1 + num2;
}

function subtrair(num1,num2) {
  return num1 - num2;
}

function multiplicar(num1,num2) {
  return num1 * num2;
}

function dividir(num1,num2) {
  if(num1 === 0 || num2 === 0 ){
    return "não há divisão por 0!"
  }
  return num1 / num2;
}

console.log(calculadora(SOMA, 2, 3));
console.log(calculadora(SUB, 5, 3));
console.log(calculadora(MULT, 5, 5));
console.log(calculadora(DIV, 16, 2));

/*b. Crie uma função que receba um número e retorne a
tabuada desse número.*/

function tabuada(numero){
    
    for (let i = 0; i <= 10; i++) {
        console.log(numero + " X " +  i + " = " + (numero * i));        
    }

}

console.log(tabuada(9));
console.log(tabuada(6));

/*c. Crie uma função que seja um chapéu seletor (Harry Potter) e
ao passar um nome, uma qualidade decida em qual casa o
bruxo irá ficar.
(https://harrypotter.fandom.com/pt-br/wiki/Casas_de_Hog
warts)*/
const CORAGEM = "coragem";
const LEALDADE = "lealdade";
const AMBICIOSO = "ambicioso";
const CALCULISTA = "calculista";
const ORGULHOSO = "orgulhoso";
const INTELECTUAL = "intelectual";
const FOCADO = "focado";
const GENTIL = "gentil";
const PACIENTE = "paciente";
const TOLERANTE = "tolerante";

function chapeuSeletor(qualidade){
let casaSelecionada;
  switch(qualidade) {
    case CORAGEM:
      casaSelecionada = griffinoria();
      break;
    case LEALDADE:
      casaSelecionada = griffinoria();
      break;
    case AMBICIOSO:
      casaSelecionada = sonserina();
      break;
    case CALCULISTA:
      casaSelecionada = sonserina();
      break;
      case ORGULHOSO:
        casaSelecionada = sonserina();
        break;
      case INTELECTUAL:
        casaSelecionada = corvinal();
        break;
      case FOCADO:
        casaSelecionada = corvinal();
        break;
      case GENTIL:
        casaSelecionada = lufaLufa();
        break;
      case PACIENTE:
        casaSelecionada = lufaLufa();
        break;
      case TOLERANTE:
        casaSelecionada = lufaLufa();
        break;
      default:
        return console.log("Para que o chapeu seletor escolha uma casa é necessário uma qualidade válida. \nTente novamente!");
  }
    return casaSelecionada;
}

function griffinoria(){
  console.log("Huummm difícil...Muito difícil...Você vai para: \n\n\n---------------!!!GRIFFINÓRIA!!!---------------");
}

function sonserina(){
  console.log("Huummm difícil...Muito difícil...Você vai para: \n\n\n----------------!!!SONSERINA!!!----------------");
}

function corvinal(){
  console.log("Huummm difícil...Muito difícil...Você vai para: \n\n\n-----------------!!!CORVINAL!!!-----------------");
}

function lufaLufa(){
  console.log("Huummm difícil...Muito difícil...Você vai para: \n\n\n-----------------!!!LUFA-LUFA!!!-----------------");
}

console.log(chapeuSeletor(LEALDADE));


/*d. Crie uma função banco que faça saque e depósitos e mostre
o saldo.*/

let saldo = 1000;
const DEPOSITO = "deposito";
const SAQUE = "saque";
const SALDO = "saldo";

function banco(operacao,valor){
  switch (operacao) {
    case DEPOSITO:
        deposito(valor);    
      break;
    case SAQUE:
        saque(valor);
      break;
    case SALDO:
        seuSaldo(saldo);
      break;
    default:
      return console.log("Operação inválida!")
  }
}

function deposito(valor){
  novoSaldo = saldo + valor;
  console.log("Saldo: $" + saldo + "\nDepósito no valor de $"+ valor + " realizado com sucesso! \nSaldo atual: $" + novoSaldo);
  saldo = novoSaldo;
}

function saque(valor){
  if(valor > saldo){
    console.log("Você não pode sacar um valor mais alto que seu saldo!")
  }else{
  novoSaldo = saldo - valor
  console.log("Saldo: $" + saldo + "\nSaque no valor de $"+ valor + " realizado com sucesso! \nSaldo atual: $" + novoSaldo);
  saldo = novoSaldo;
  }
}

function seuSaldo(saldo){
console.log("Seu saldo atual é: $" + saldo);
}


console.log(banco(DEPOSITO,10000));
console.log(banco(SAQUE,3000));
console.log(banco(SALDO));