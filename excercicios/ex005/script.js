let vetor = []

function calcular() {
    let num = document.querySelector('input#numero').value
    let add = document.querySelector('select#adicionados')
    let resposta = document.querySelector('div#resposta')
    

    if (num !== '' && num >= 1 && num <= 100) {
        let numero = Number(num)
        let resposta = ''
        if (!(vetor.includes(numero))) {
            let item = document.createElement('option')
            add.appendChild(item)
            item.innerHTML = `Vetor ${numero} foi adicionado.`
            
            vetor.push(numero)
            vetor.sort()
            console.log(vetor)
        } else {
            alert('Este número já está incluso na array. Digite outro número.')
        }
    } else {
        alert('Número inválido!')
    }
    
}