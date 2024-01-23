/*
Requisitos
    1.Dentro da pasta src deve existir um arquivo chamado vogais.js
    2.Dentro do arquivo vogais.js deve existir uma função chamada vogais
    3.A função deve receber um texto como argumento
    4.A função deve retornar a quantidade de vogais encontradas no texto
    5.A mensagem de erro "Função aceita apenas string como argumento." deve ser retornada quando
        - A função receber como argumento qualquer valor diferente de string
*/

function vogais(texto){

    if(typeof texto !== 'string'){
        return 'Função aceita apenas string como argumento.'
    }

    let contantoAsVogais=0

    for (let i = 0; i <= texto.length; i++) {
        const vogal = texto[i];
        if("aeiouAEIOU".includes(vogal)){
            contantoAsVogais++;
        }
    }
    return `Foram encontradas ${contantoAsVogais} vogais neste texto`;    
}

let teste = 'O texto passou com sucesso!'
const result= vogais(teste);

console.log(result);