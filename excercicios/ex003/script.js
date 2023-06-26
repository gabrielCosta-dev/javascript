function calcularPassos(){
    let inicio = Number(document.querySelector('input#inicio').value);
    let fim = Number(document.querySelector('input#fim').value);
    let passo = Number(document.querySelector('input#passo').value);

    if (!isNaN(inicio)) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';

        while (inicio <= fim) {
            let andar = inicio + passo;
        
            if (inicio <= fim - passo) {
              resultado.innerHTML += `Passo ${andar} \u{261E} `;
            } else {
              resultado.innerHTML += `Passo ${andar}.`;
            }
        
            inicio += passo;
          }
    } else {
        alert('Algo deu errado!');
}

}

/* let inicio = 1
let fim = 10
let passo = 1

if (inicio != null && !isNaN(inicio)) {
    while (inicio <= fim) {
        let andar = inicio + passo;
        console.log(`Passo ${andar}`);
        inicio += passo; // Atualiza o valor de inicio a cada iteração
    }
} else {
    console.log('Algo deu errado!');
} */