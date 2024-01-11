/*
Requisitos: 
    1 - Dentro da pasta src deve existir um arquivo chamado hello.js
    2 - Dentro do arquivo hello.js deve existir uma função chamada hello
    3 - A função deve ter um parâmetro com o valor padrão "World"
    4 - A função deve retornar uma frase começando com "Hello," e terminando com o valor argumento que foi passado mais um sinal de exclamação
    5 - Quando o argumento passado não for do tipo de string o valor do parâmetro deve ser trocado por "World"
*/

function hello(nome="World"){
    if(typeof nome!=="string"){
      nome="World";
    }
    return `Hello, ${nome}!`;
};

let minhaVariavel=hello();

console.log(minhaVariavel);