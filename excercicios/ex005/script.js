let vetor = []

function calcular() {
    let num = document.querySelector('input#numero').value
    let add = document.querySelector('select#adicionados')
    let resposta = document.querySelector('div#resposta')

    if (num !== '' && num >= 1 && num <= 100) {
        let numero = Number(num)
        //resposta.innerHTML = ''
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
            let maior = vetor.pop()
            console.log(maior)

            //Modificações Resposta
            let paragrafo = document.createElement('p')
            paragrafo.innerHTML = `O menor valor no vetor é <strong>${menor}!</strong>`
            resposta.appendChild(paragrafo)

            /* console.log(`Este é ${numero}`)
            console.log(menor)
            console.log(vetor) */
        } else {
            alert('Este número já está incluso na array. Digite outro número.')
        }
    } else {
        alert('Número inválido!')
    }
    
}

/* function limpar() {
    vetor = []
    console.log(vetor)
} */
