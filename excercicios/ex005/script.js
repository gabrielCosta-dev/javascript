let vetor = []

function calcular() {
    let num = document.querySelector('input#numero').value
    let add = document.querySelector('select#adicionados')
    let resposta = document.querySelector('div#resposta')

    if (num !== '' && num >= 1 && num <= 100) {
        let numero = Number(num)

        if (!(vetor.includes(numero))) {
            //Criação option e edição select
            let option = document.createElement('option')
            add.appendChild(option)
            option.innerHTML = `Vetor ${numero} foi adicionado.`
            
            //Modificações Array
            vetor.push(numero)
            vetor.sort(function(a , b){
                return a - b
            })
            let menor = vetor[0]
            let maior = vetor[vetor.length - 1]

            //Modificações Resposta
            resposta.innerHTML = ''//Para limpar o valor de resposta

            //Menor Valor
            let paragrafoMenor = document.createElement('p')
            paragrafoMenor.innerHTML = `O <strong>menor</strong> valor no vetor é <strong>${menor}!</strong>`
            resposta.appendChild(paragrafoMenor)

            //Maior Valor
            let paragrafoMaior = document.createElement('p')
            paragrafoMaior.innerHTML = `O <strong>maior</strong> valor no vetor é <strong>${maior}!</strong>`
            resposta.appendChild(paragrafoMaior)

            //Quantidade de itens
            let paragrafoLength = document.createElement('p')
            paragrafoLength.innerHTML = `O <strong>número de itens</strong> no seu vetor é <strong>${vetor.length}!</strong>`
            resposta.appendChild(paragrafoLength)
            //console.log(vetor.length)

            //Soma e Média
            let total = 0
            for (var i = 0; i < vetor.length; i++) {
                total += vetor[i];
            }

            let media = total / vetor.length

            //PArágrafos Soma e Média
            let paragrafoSoma = document.createElement('p')
            paragrafoSoma.innerHTML = `A <strong>soma</strong> de todos os valores no vetor é <strong>${total}!</strong>`
            resposta.appendChild(paragrafoSoma)

            let paragrafoMedia = document.createElement('p')
            paragrafoMedia.innerHTML = `A <strong>média</strong> dos valores no vetor é <strong>${media}!</strong>`
            resposta.appendChild(paragrafoMedia)

        } else {
            alert('Este número já está incluso na array. Digite outro número.')
        }
    } else {
        alert('Número inválido!')
    }
    
}

function limpar() {
   document.querySelector('input#numero').value = ''
    document.getElementById('adicionados').innerHTML = ''
    document.getElementById('resposta').innerHTML = ''
    vetor = []
}

