/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.
let nome = "Micael";
console.log("1:", nome);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.
let pessoa = {
  nome: "Ana",
  idade: 30,
  cidade: "São Paulo"
};
console.log("2:", pessoa.idade);

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.
let frutas = ["paulo", "pedro", "ana", "bia", "tiago"];
console.log("3:", nome[2]); // índice 2 é o terceiro

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.
let carro = {
  marca: "Toyota",
  modelo: "Corolla"
};
carro.ano = 2020;
console.log("4:", carro);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.
let chave = "cidade";
console.log("5:", pessoa[chave]);

// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).
function exibirObjeto(obj) {
  console.log("6:");
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
exibirObjeto(pessoa);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.
let usuario = {
  nome: "Carlos",
  endereco: {
    rua: "Rua das Flores",
    numero: 123,
    cidade: "Rio de Janeiro"
  }
};
console.log("7:", usuario.endereco.cidade);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.
let cores = ["vermelho", "verde", "azul"];
console.log("8:");
for (let i in cores) {
  console.log(`Índice ${i}: ${cores[i]}`);
}

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.
let globalVar = "Sou global";
function mostrarEscopos() {
  let localVar = "Sou local";
  console.log("9:", globalVar); // acessível aqui
  console.log("9:", localVar);
}
mostrarEscopos();
// console.log(localVar); // Isso daria erro, pois localVar não está no escopo global

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.
let livro = {
  titulo: "Dom Quixote",
  autor: "Miguel de Cervantes"
};
console.log("10 - antes:", livro.titulo);
livro.titulo = "Dom Quixote de la Mancha";
console.log("10 - depois:", livro.titulo);

