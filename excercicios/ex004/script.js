/* function calcular() {
    let numero = Number(document.getElementById('numero').value);
  
    if (!isNaN(numero) && numero !== '') {
        let multiplicador = numero - 1

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
    
        do {
            let valor = numero * multiplicador
            resultado.innerHTML = `${numero} x ${multiplicador} = ${valor}`
            incremento++
        } while (incremento <= 10);

        
    } else {
      alert('Digite um número, por favor.');
    }
  }
 */
  /* for (let i = numero; i <= 10; i++) {
            let valor = i * i;
            resultado.innerHTML += i +' x ' +i+ ' = '+ valor +'</br>';
        } */
  
function calcular() {
    let numero = Number(document.getElementById('numero').value);

    if (numero !== '') {
        numero = Number(numero)

        if (!isNaN(numero)) {
            let multiplicador = 0;
            let resultado = '';

            do {
                let produto = numero * multiplicador;
                resultado += `${numero} x ${multiplicador} = ${produto}<br>`;
                multiplicador++;
            } while (multiplicador <= 10);

            document.getElementById('resultado').innerHTML = resultado;
                } else {
                    alert('Digite um número, por favor.');
                }
    } else {
    alert('Digite um número, por favor.');
    }
}
