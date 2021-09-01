/*
let compra = ['banana', 'maça', 'leite', 'macarao'];
let dinheiro = ['5rais', '10rais'];
=============================================================================
// Acessar elementos específicos de um array 
console.log(compra[3])
=============================================================================
/* Modificar cada um dos elementos de um array e imprimi-los no console 
  compra[2]= 'cafe'
  console.log(compra) 
=============================================================================
// Adicionar elementos a um array.
  compra.push('alface');
  console.log(compra)  
=============================================================================
// Extrair elementos de um array.
  compra.pop();
  console.log(compra)  Extrair elementos de um array. 
=============================================================================
// Comparar array element com outro

let arr1 = [1, 3, 4, 5, 6]
let arr2 = [1, 3, 4, 5, 6]

function comparar() {
    if (arr1.length == arr2.length) {
        return true
    } else {
        return false
    }
}

console.log(comparar())
=============================================================================

=============================================================================

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length]) //  no cosole deu undifined // e com number.length deu 5
=============================================================================
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])  // spiderman
=============================================================================
let str = 'una string qualque'
let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])  // return str
=============================================================================
// crie a função imprimirInverso que pega um Array como um argumento
function imprimirInverso(Array){
    return Array.reverse()
}
console.log(imprimirInverso([1, 3, 4]))
=============================================================================
// Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
Exemplo:
somarArray([1,2,3])                // 6
somarArray([10, 3, 10, 4])     // 27
somarArray([-5,100])             // 95

function somarArray(sumArray){
    let add = 0;
    for (let a = 0; a < sumArray.length; a++) {
        let sum = sumArray[a];
       add+= sum;
      }
     return add;
    }
    
    console.log(somarArray([1,2,3]), somarArray([10, 3, 10, 4]), somarArray([-5,100])  )
=============================================================================
// Simulação Array.join()

function  join(testo) {
    return testo.join('')
}
console.log(join(['B', 'l', 'z']))
=============================================================================
// armazenar os seguintes filmes e séries:
let filmeSeries = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
=============================================================================
//verifique se tudo funciona corretamente acessando qualquer um dos filmes uma vez que a estrutura correspondente tenha sido criada.

function filmelista(){
    console.log(filmeSeries[0])
    console.log(filmeSeries[1])
    console.log(filmeSeries[2])
    console.log(filmeSeries[3])
    console.log(filmeSeries[4])
  
}
filmelista()
=============================================================================
// Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase().

let filmeSeries = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
function filmeaccesso(array){
    if (array == 0) {
    console.log(filmeSeries[0].toUpperCase())
    } else if(array == 1) {
    console.log(filmeSeries[1].toUpperCase())
    } else if(array == 2) {
    console.log(filmeSeries[2].toUpperCase())
    } else if(array == 3) {
        console.log(filmeSeries[3].toUpperCase())
        } else if (array == 4) {
        console.log(filmeSeries[4].toUpperCase())
        } else {
            console.log('Nao existe')
        }

}
filmeaccesso(0)
=============================================================================

Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar
 os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array 
 com todos os filmes como seus elementos.

let filmeSeries = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
let filmesDeAnimacao = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

filmeSeries.push(...filmesDeAnimacao)
    
console.log(filmeSeries)
=============================================================================

// Durante o processo, percebemos que o último elemento na série de filmes animados é, 
na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos 
remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.

let filmeSeries = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]
let filmesDeAnimacao = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

filmeSeries.push(...filmesDeAnimacao)

console.log(filmeSeries)

let filmeErrado = filmesDeAnimacao.pop()

console.log("o filme era um jogo:" + filmeErrado)
console.log("nova lista de animacao: " + filmesDeAnimacao)
=============================================================================

// Finalmente, recebemos dois arrays com classificações feitas por 
diferentes usuários do mundo nos filmes com o seguinte formato:

    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 4];

    function comparar() {
       
        if (asiaScores.length === euroScores.length) {
            return true;
        } else {
            return false;
        }
    }
    console.log(comparar())
*/