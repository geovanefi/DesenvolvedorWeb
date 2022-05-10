
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
    var nota3 = document.getElementById("nota2").value;
    var media = (nota1 + nota2 + nota3) / 3;
    
    if (media != '') {
        window.alert (`A média das notas é ${media}.`);
    } else {
        window.alert (`Adicione notas para Analisar ${media} .`);
    }
}
