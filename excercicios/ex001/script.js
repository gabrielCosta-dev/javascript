function carregar() {
    let msg = document.querySelector('div#msg')
    let img = document.getElementById('imagem')

    let data = new Date()
    let horaAtual = data.getHours()
    //let horaAtual = 19

    msg.innerHTML = `Agora são ${horaAtual} horas.`

    if (horaAtual >= 0 && horaAtual < 12) {
        img.src = 'img/manha.jpg'
        document.body.style.background = '#D4A631'
    } else if(horaAtual >= 12 && horaAtual <= 18){
        img.src = 'img/tarde.jpg'
        document.body.style.background = '#C47F6C'
    } else{
        img.src = 'img/noite.jpg'
        document.body.style.background = '#43314C'
    }
}