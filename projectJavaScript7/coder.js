
function resposta1() {
    var nome = document.getElementById('nome');
    
                
    if (nome.value.length != '') {
        window.alert(`Variável é ${nome.value}`);
    } else {
        window.alert(`Digite um nome`);
    }

                   
}
function resposta2() {
    var nome = document.getElementById('nome');
    if (nome.value.length != ''){
        window.alert(`${nome.value}`['toUpperCase']());
    }
    else {
        window.alert(`Digite um nome na pergunta 1 que seja válido`);
    }
}
function resposta3() {
    var sNome = document.getElementById('sNome');
    
                
    if ( sNome.value.length != '') {
        window.alert(`A resposta da questão 3 é ${nome.value} ${sNome.value}`['toUpperCase']());
    } else {
        window.alert(`Digite um Nome e Sobrenome`);
    }                   
}


function resposta4() {
    var nome = document.getElementById('nome');
    var sNome = document.getElementById('sNome');
    
    const completeName = nome.value+' ' + sNome.value
    

    if (nome.value.length  != '' && sNome.value.length != '') {
        window.alert(completeName);
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