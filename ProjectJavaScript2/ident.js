

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert ('[Erro] Verifique os dado e tente novamente!')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 7) {
                //Crianca
                img.setAttribute('src', 'img/babym.jpg')
            } else if (idade <15 ) { 
                //adolecente
                img.setAttribute('src', 'img/boy.jpg')
            } else if (idade < 23) {
                // jovem
                img.setAttribute('src', 'img/teenm.jpg')
            } else if ( idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adultm.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'img/bigm.jpg')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 7) {
                //Crianca
                img.setAttribute('src', 'img/babyf.jpg')
            } else if (idade <15 ) { 
                //adolecente
                img.setAttribute('src', 'img/girlf.jpg')
            } else if (idade < 23) {
                // jovem
                img.setAttribute('src', 'img/teenf.jpg')
            } else if ( idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/adultf.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'img/bigf.jpg')
            }
        }
        
        res.innerHTML = `Detectamos que é ${genero} com ${idade} anos.`
        
        res.appendChild(img)
    }


}
