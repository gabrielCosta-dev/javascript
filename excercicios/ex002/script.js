function verificar() {
    let ano = new Date()
    let anoAtual = ano.getFullYear()
    let anoNasc = document.getElementById('txtano')
    let res = document.getElementById('resultado')

    if(anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = anoAtual - Number(anoNasc.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'img/bebe-homem.jpg')
                document.body.style.background = '#E67657'
            }else if(idade >= 12 && idade < 18){
                //jovem
                img.setAttribute('src', 'img/homem-jovem.jpg')
                document.body.style.background = '#E13F12'
            }else if(idade >= 18 && idade < 65){
                //adulto
                img.setAttribute('src', 'img/homem-adulto.jpg')
                document.body.style.background = '#AD300E'
            }else{
                //idoso
                img.setAttribute('src', 'img/homem-idoso.jpg')
                document.body.style.background = '#611B08'
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'img/bebe-mulher.jpg')
                document.body.style.background = '#FA61DB'
            }else if(idade >=12 && idade < 18){
                //jovem
                img.setAttribute('src', 'img/mulher-jovem.jpg')
                document.body.style.background = '#E014B8'
            }else if(idade >= 18 && idade < 65){
                //adulto
                img.setAttribute('src', 'img/mulher-adulta.jpg')
                document.body.style.background = '#AD0F8D'
            }else{
                //idoso
                img.setAttribute('src', 'img/mulher-idosa.jpg')
                document.body.style.background = '#61094F'
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos que seu gênero é ${genero} com idade ${idade}.`
        res.appendChild(img)
    }

}