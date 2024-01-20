/*
Requisitos
    - Dentro da pasta src deve existir um arquivo chamado soma_impar.js
    - Dentro do arquivo soma_impar.js deve existir uma função chamada soma_impar
    - A função deve receber um número inteiro positivo
    - A função deve retornar a soma de todos os números ímpares de 1 até o número passado como argumento
    - A mensagem de erro "Função aceita apenas números inteiros positivos." deve ser retornada quando
        O argumento não for do tipo inteiro
*/
function soma_impar(numero){
    if(typeof numero !== "number" || numero % 1 !== 0 || numero<0){
        return 'Função aceita apenas números inteiros positivos.'
    }

    let soma=0;

    for (let i = 1; i <= numero; i+=2) {
        soma+=i;
    }
    return soma;
}

console.log(soma_impar(0));