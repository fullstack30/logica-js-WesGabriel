/*
Requisitos: 
  1 - Dentro da pasta src deve existir um arquivo chamado fatorial.js
  2 - Dentro do arquivo fatorial.js deve existir uma função chamada fatorial
  3 - A função deve aceitar como argumento um número inteiro positivo
  4 - A função deve retornar o resultado do cálculo fatorial
  5 - A mensagem de erro "Função deve receber um argumento do tipo inteiro positivo." deve ser retornada quando
    - A função receber um valor numérico não inteiro
    - A função receber um valor numérico menor que 0
    - A função receber um valor não numérico
*/
function fatorial(n) {
  if (typeof n !== "number" || n <= 0 || Number.isInteger(n) == false) {
    return "Função deve receber um argumento do tipo inteiro positivo.";
  }

  let numero = 1;
  for (let number = 2; number <= n; number++) {
    numero *= number;
  }
  return numero;
}

console.log(fatorial());
