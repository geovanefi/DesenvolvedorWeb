
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
        window.alert(`Digite um nome e Sobrenome`);
    }                   
}


function resposta4() {
    var nome = document.getElementById('nome');
    var sNome = document.getElementById('sNome');
    
    const completeName = nome.value+' ' + sNome.value
    

    if (nome.value.length  != '' && sNome.value.length != '') {
        window.alert(completeName);
    } else {
        window.alert(`Digite um nome e Sobrenome`);
    }               
}

