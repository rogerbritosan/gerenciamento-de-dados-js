// #1 no console digite window
// #2 no console digite document

// #3 selecionando elemento
// no console digite:
// seleciona todo seletor de css3
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
 * #7 Todos os elementos do formulário
 * problemas encontrados na seleção dos elementos dessa forma
 */

/*var name = document.querySelector("#exampleInputName");
var gender = document.querySelector("#exampleInputGenderM");
var gender = document.querySelector("#exampleInputGenderF");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail1");
var password = document.querySelector("#exampleInputPassword1");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#");
*/
/**
 * #8 selecionar campos gender
 * no console
 * utilizar querySelectorAll p/ selecionar os 2 campos gender
 * utilizar condição p/ selecionar a opção checada
 */
 document.querySelector('#form-user-create [name=gender]');
 document.querySelectorAll('#form-user-create [name=gender]');
 document.querySelectorAll('#form-user-create [name=gender]:checked');

// Corrigindo a lista de campos selecionados
var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll('#form-user-create [name=gender]:checked');
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail");
var password = document.querySelector("#exampleInputPassword");
var photo = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");

// recuperar campos/valores do formulário de forma acadêmica

fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach(function(field, index){

    console.log(field, field.id, field.name, field.value, field.check, index);

});