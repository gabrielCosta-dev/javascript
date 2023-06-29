function calcularPassos() {
    let inicio = Number(document.querySelector('input#inicio').value);
    let fim = Number(document.querySelector('input#fim').value);
    let passo = Number(document.querySelector('input#passo').value);
  
    if (inicio !== '' && fim !== '' && passo !== '' && passo !== 0 && passo > 0) {
      inicio = Number(inicio);
      fim = Number(fim);
      passo = Number(passo);
  
      if (!isNaN(inicio)) {
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
  
        if (fim > inicio) {
          while (inicio < fim) {
            let andar = inicio + passo;
  
            if (andar <= fim) {
              resultado.innerHTML += `Passo ${andar} \u{1f449} `;
            } else {
              resultado.innerHTML += `Passo ${andar} \u{1f4c1}.`;
            }
  
            inicio += passo;
          }
        } else {
          while (inicio >= fim) {
            let andar = inicio - passo;
  
            if (andar >= fim) {
              resultado.innerHTML += `Passo ${andar} \u{1f449} `;
            } else {
              resultado.innerHTML += `Passo ${andar} \u{1f4c1}.`;
            }
  
            inicio -= passo;
          }
        }
      } else {
        alert('Algo deu errado! Certifique-se de preencher os campos corretamente.');
      }
    } else {
      alert('Algo deu errado! Certifique-se de preencher os campos corretamente.');
    }
  }
  