/*
Requisitos
    - Dentro da pasta src deve existir um arquivo chamado inverte_lista.js
    - Dentro do arquivo inverte_lista.js deve existir uma função chamada inverte_lista
    - A função deve receber como argumento um valor do tipo Array
    - A função deve retornar um novo array com os mesmo valores do array original porém na ordem inversa
    - A mensagem de erro "Argumento inválido. Função espera receber um array como argumento." deve ser retornada quando
        A função for chamada sem argumentos
        O argumento passado não for do tipo array
*/

function inverter_lista(array){
    if(!Array.isArray(array)){
        return 'Argumento inválido. Função espera receber um array como argumento.'
    }else{
        return array.reverse();
    }

}

// let lista_test = undefined;

// let lista = ['a', 'b', 'c', 'd'];

console.log(inverter_lista());