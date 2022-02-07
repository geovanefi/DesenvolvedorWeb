

function open(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    


    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/matine.png'
        document.body.style.background = '#c8d4dd'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'img/porsol.png'
        document.body.style.background = '#caa324'
    } else {
        img.src = 'img/nigth.png'
        document.body.style.background = '#1111111'
               
    }
}