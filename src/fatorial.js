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
  if (!Number.isInteger(n) || n < 0) {
    if (typeof n === "string") {
      Number(n);
    } else {
      return "Função deve receber um argumento do tipo inteiro positivo.";
    }
  }

  let resultado = 1;

  for (n; n > 0; n--) {
    resultado *= n;
  }

  if (typeof n === "string") {
    return "Função deve receber um argumento do tipo inteiro positivo.";
  }

  return resultado;
}

// console.log(fatorial("texto"));
