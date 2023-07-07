let vetor = []

function adicionar() {
    let num = document.querySelector('input#numero')
    let add = document.querySelector('select#adicionados')
    let resposta = document.querySelector('div#resposta');

    if (num !== '') {
        let numero = Number(num.value)

        if (numero >= 1 && numero <= 100) {
            if (!vetor.includes(numero)) {
                //Criação option e edição select
                let option = document.createElement('option')
                option.innerHTML = `Vetor ${numero} foi adicionado.`
                add.appendChild(option)
                vetor.push(numero)
                vetor.sort()

                num.value = ''
                num.focus()
                resposta.innerHTML = ''
            } else {
                alert('Este número já está incluso na array! Digite outro número.')
            }
        } else {
            alert('Número inválido! Verifique se o valor está entre 1 e 100.')
        }
    } else {
        alert('Número inválido!')
    }
}

function finalizar() {
    let resposta = document.querySelector('div#resposta');

    // Modificações Array
    vetor.sort(function(a, b) {
        return a - b;
    });
    let menor = vetor[0];
    let maior = vetor[vetor.length - 1];

    // Modificações Resposta
    resposta.innerHTML = ''; // Para limpar o valor de resposta

    // Menor Valor
    let paragrafoMenor = document.createElement('p');
    paragrafoMenor.innerHTML = `O <strong>menor</strong> valor no vetor é <strong>${menor}!</strong>`;
    resposta.appendChild(paragrafoMenor);

    // Maior Valor
    let paragrafoMaior = document.createElement('p');
    paragrafoMaior.innerHTML = `O <strong>maior</strong> valor no vetor é <strong>${maior}!</strong>`;
    resposta.appendChild(paragrafoMaior);

    // Quantidade de itens
    let paragrafoLength = document.createElement('p');
    paragrafoLength.innerHTML = `O <strong>número de itens</strong> no seu vetor é <strong>${vetor.length}!</strong>`;
    resposta.appendChild(paragrafoLength);

    // Soma e Média
    let total = 0;
    for (var i = 0; i < vetor.length; i++) {
        total += vetor[i];
    }

    let media = total / vetor.length;

    // Parágrafos Soma e Média
    let paragrafoSoma = document.createElement('p');
    paragrafoSoma.innerHTML = `A <strong>soma</strong> de todos os valores no vetor é <strong>${total}!</strong>`;
    resposta.appendChild(paragrafoSoma);

    let paragrafoMedia = document.createElement('p');
    paragrafoMedia.innerHTML = `A <strong>média</strong> dos valores no vetor é <strong>${media}!</strong>`;
    resposta.appendChild(paragrafoMedia);
}


function limpar() {
    document.querySelector('input#numero').value = 1
    document.getElementById('adicionados').innerHTML = ''
    document.getElementById('resposta').innerHTML = ''
    vetor = []
    console.log(vetor)
}

