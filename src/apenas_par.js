/*
Requisitos:
    1. Dentro da pasta src deve existir um arquivo chamado apenas_par.js
    2. Dentro do arquivo apenas_par.js deve existir uma função chamada apenas_par
    3. A função deve receber como argumento um valor do tipo inteiro que pode ser positivo ou negativo
    4. A função deve retornar uma lista com os números pares entre 0 e o número informado
    5. A mensagem de erro "Função aceita apenas números inteiros." deve ser retornada quando
        O argumento passado não for do tipo inteiro
        Nenhum argumento for passado 
*/

apenas_par = (n) => {
  if (typeof n === "number" && !Number.isInteger(n)) {
    return "Função aceita apenas números inteiros.";
  }

  let nEven = [];
  let metrica =
    n >= 0
      ? Math.min(0, n % 2 === 0 ? n : n - 1)
      : Math.max(0, n % 2 === 0 ? n : n + 1);
  for (let nPar = metrica; nPar <= n; nPar += 2) {
    if (nPar % 2 === 0) {
      nEven.push(nPar);
    }
  }
  return nEven;
};
