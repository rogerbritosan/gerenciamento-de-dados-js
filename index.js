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

// recuperar campos/valores do formulário de forma dinâmica

fields = document.querySelectorAll('#form-user-create [name]');

fields.forEach(function(field, index){

    // verifica se é gender
    if (field.name == "gender"){

        if (field.checked){
            console.log('sim', field);
        }

        
    } else {
        console.log('não', field);
    }

    // console.log(field, field.id, field.name, field.value, field.check, index);

});

/**
 * #9 objetos
 */

// var fields = document.querySelectorAll('#form-user-create [name]');
// var user = {};

// fields.forEach(function(field, index){

//     if (field.name == "gender"){

//         if (field.checked){
//             user[field.name] = field.value;
//         }

//     } else {
//         user[field.name] = field.value;
//     }

// });

// console.log(user);

// document.querySelectorAll('button').forEach(function(btn){

//     // esse this se referencia a cada botão durante o loop
//     btn.addEventListener('click', function(){
//         console.log(btn.textContent);
//     });

// });
    
var fields = document.querySelectorAll('#form-user-create [name]');
var user = {};

function addLine(dataUser){

    //console.log('addline', dataUser);

    var tr = document.createElement('tr');

    tr.innerHTML = `
        <tr>
            <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
            <td>${dataUser.name}</td>
            <td>${dataUser.email}</td>
            <td>${dataUser.admin}</td>
            <td>${dataUser.birth}</td>
            <td>
                <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
            </td>
        </tr>
        `;

    document.getElementById('table-users').appendChild(tr);

}

document.getElementById('form-user-create').addEventListener('submit', function(event){
    event.preventDefault();

    fields.forEach(function(field, index){

        if (field.name == "gender"){

            if (field.checked){
                user[field.name] = field.value;
            }

        } else {
            user[field.name] = field.value;
        }

    });

    addLine(user);

});