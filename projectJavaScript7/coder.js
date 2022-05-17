var nome = document.getElementById('nome');
var sNome = document.getElementById('sNome');

let res = document.querySelector('div#res4')

function resposta1() {
    if (nome.value.length != '') {
        window.alert(`Variável é ${nome.value}`);
    } else {
        window.alert(`Digite um nome`);
    }   
}
function resposta2() {
    if (nome.value.length != ''){
        window.alert(`${nome.value}`['toUpperCase']());
    }
    else {
        window.alert(`Digite um nome na pergunta 1 que seja válido`);
    }
}
function resposta3() {                 
    if ( sNome.value.length != '') {
        window.alert(`A resposta da questão 3 é ${nome.value} ${sNome.value}`['toUpperCase']());
    } else {
        window.alert(`Digite um Nome e Sobrenome`);
    }                   
}

function resposta4(){
    let completo = `${nome.value} ${sNome.value}`
    completo = completo.toLowerCase().replace(/(?:^|\s)\S/g, function(a) {
        return a.toUpperCase();
    }); // primeira letra em maiusculo
    
    if (nome.value.length != '' && sNome.value.length != '') {
        window.alert(`questão 4 é ${completo}`);
    } else {
        window.alert(`Digite um Nome e Sobrenome`);
    }
} 

function resposta5() {
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;
    var nota3 = document.getElementById("nota3").value;
    var medias = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
    var calc = medias / 3;
    
    if (nota1 != '' && nota2 != '' && nota3 != '') {
        window.alert (`A média das notas é ${calc}.`);
    } else {
        window.alert (`Adicione notas para analisar.`);
    }
}
function resposta6() {
    var hora = document.getElementById("hora").value;
    var min = parseInt(hora) * 60 
    
    if (hora != '') {
        window.alert (`A conversão de ${hora}horas em minutos é = ${min} minutos.`);
    } else {
        window.alert (`Adicione as horas para analisar.`);
    }
}

function calcular(oper) {
    var valor1 = document.calcform.valor1.value;
    var valor2 = document.calcform.valor2.value;
 
    if (oper == "somar") {
       var res = parseInt(valor1) + parseInt(valor2);
    } else {
       if (oper == "subtrair") {
          var res = valor1-valor2;
       } else {
          if (oper == "multiplicar") {
             var res = valor1*valor2;
          } else {
             var res = valor1/valor2;
          }
       }
    }
 
    document.calcform.res.value = res;
}


let meusNumeros = [1,2,3,4,5,6,7] // 1-meu array a ser pecorrido no for
let pares = [] // 2-variavel vazia a ser preenchida posteriormente
for (let index = 0 ; index < meusNumeros.length; index++) { // 3-no for, crio uma variavel index com valor 0; e enquanto ela for menor (<) que meu array no item 1, vou pecorrecorrer os itens e adicionar 1 ao index (index++).
    let meuValor = meusNumeros[index]; //4-crio outra variavel qua vai receber os valeres do item 3 (let index)
    let resto = ((meuValor % 2)); // 5-crio outra variavel que recebe os valores pares(%2)
    if (resto === 0){ 
        pares.push(meuValor); //6-incluo os valores na variavel vazia do item 2
    }
}
function resposta8() {   
    
    window.alert (pares);
    
    
}

// Exercicio 02

// 1 - Declare uma variável do tipo objeto que possua os atributos: nome, telefone, endereço e idade.

let dados = {
    nome: '',
    telefone: '',
    endereco: '',
    idade: ''
}

//2 - Referente ao objeto criado atribua as informações: João, 55-(011) 9928-9918, Rua B, 18 no objeto criado.

dados.nome = 'João';
dados.telefone = '55-(011) 9928-9918';
dados.endereco = 'Rua B';
dados.idade = '18';

console.log(dados)


// 3 - Imprima no console somente o nome
console.log(dados.nome)

// 4 - Imprima no console somente a idade
console.log(dados.idade)

// 5 - Imprima no console o texto buscando as informações do objeto
console.log(`“O número do telefone do ${dados.nome} é ${dados.telefone}, ele mora na ${dados.endereco} e ele tem ${dados.idade} anos”`)

// 6 - Crie uma variável do tipo array que contenha vários objetos com informações diferentes.

let cadastro = [
    {
        nome: 'João', 
        telefone: '55-(011) 9928-9918', 
        endececo: 'Rua B', 
        idade: 18,
    },
    {
        nome: 'Carlos', 
        telefone: '55-(051) 9908-6666', 
        endececo: 'Rua C', 
        idade: 13,
    },
    {
        nome: 'Gustavo', 
        telefone: '55-(051) 9908-9968', 
        endececo: 'Rua C', 
        idade: 13,
    },
    {
        nome: 'Bruno', 
        telefone: '55-(051) 9908-1568', 
        endereco: 'Rua C', 
        idade: 50,
    },
];
console.log(cadastro)

//7 - Crie uma função que retorne um novo array somente com os maiores de idade. 
//Exemplo 1: maioresDeIdade() retorna um array com o João, Carlos e Bruno

var maior = cadastro.filter(function(cadastro){
    return cadastro.idade >= 18;
});
console.log(maior)


function maiorIdade(objeto){
    var maior = objeto.filter(function(nome){
        return nome.idade >= 18 ;
    });
    return maior;
};

// 8 - Crie uma função que retorne a soma de todas as idades.

function resp8() {
    var somar = 0; 

    for(var i =0;i<cadastro.length;i++){ 
      somar+=cadastro[i].idade; 
    } 
    
    console.log(somar);
    const questao8 = document.querySelector('div.res8')
    questao8.innerText = `a soma de todas as idades é ${somar}` 
}



//  9 - Crie um botão com o texto “Alterar” e uma tag h1 com o título “Minha página”. Adicione no html um evento onclick chamando uma função que deve alterar o texto da tag h1 para “Outra página” 
function resp9(){
    const questao9 = document.querySelector('h1.res9')
    questao9.innerText = " Outra página."
}


//10 - Altere o texto do h1 adicionando um html interno com “Minha <small>página</small>” 
function resp10(){
    let form = document.getElementById('form-extra');
    form.innerHTML = " A Resposta da questão 10 com : Minha <small>página</small."
}
/* extra - Crie uma página html com um formulário com os seguintes requisitos:
    <ul>
        <li>O formulário deve possuir os inputs nome, telefone, sexo, endereço e idade com um botão “Salvar”</li>
        <li>Caso o usuário não preencha um dos campos é necessário informar os campos que não foram preenchidos</li>
        <li>O campo idade deve ser um número, caso não seja informado um número no input informe o usuário </li>
        <li>Caso o formulário seja válido adicione essas informações formatadas com html abaixo do formulário</li>
        <li>O formulário deve ser validado e exibir as mensagens ao clicar no botão salvar</li>

    </ul>

*/

// Function to check that the input field is not empty while submitting
function requireValue(input) {
    return !(input.value.trim() === '');
}
// Event listener to perform the validation when user clicks on submit button
form.addEventListener('submit', (event) => {
    requiredFields.forEach((input) => {
        valid = valid|requireValue(input.input);
    });
    if (!valid) {
        event.preventDefault();
    }
});
