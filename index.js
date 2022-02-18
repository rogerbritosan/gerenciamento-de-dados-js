// #1 no console digite window
// #2 no console digite document

// #3 selecionando elemento
// no console digite:
document.querySelector("#exampleInputName");

// #4
// atribuindo valor a um elemento
// no console digite:
document.querySelector("#exampleInputName").value = "Olá";

/**
 * #5 captar o valor do campo
 * no console:
 */
document.querySelector('#exampleInputName').value;

/**
 * #6 variáveis de memória
 * não pode começar com número 
 * pode conter $ e _ pra começar
 * não pode usar palavras reservadas da programação
 * minúsculo e camelCase
 */
document.querySelector("#exampleInputName");
var el = document.querySelector("#exampleInputName");
el.value;
el.style.color = "blue";
console.log(el);
console.log(el.value);

/**
 * Todos os elementos do formulário
 */

var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#exampleInputGenderM");
var gender = document.querySelector("#exampleInputGenderF");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail1");
var password = document.querySelector("#exampleInputPassword1");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#");