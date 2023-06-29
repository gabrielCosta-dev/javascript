function calcular() {
    let numero = document.getElementById('numero').value.trim();

    if (numero !== '') {
        numero = Number(numero)

        if (!isNaN(numero)) {
            let multiplicador = 0;
            let resultado = '';

            do {
                let produto = numero * multiplicador;
                resultado += `${numero} x ${multiplicador} = ${produto} \n`;
                multiplicador++;
            } while (multiplicador <= 10);

            document.getElementById('resultado').innerHTML = resultado;
            document.getElementById('resultado').style.textAlign = 'center'
                } else {
                    alert('Digite um número, por favor.');
                }
    } else {
    alert('Digite um número, por favor.');
    }
}
