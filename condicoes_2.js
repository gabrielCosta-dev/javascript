/* let idade = 81

if (idade < 16) {
    console.log(`Não vota.`)
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.') 
} else if(idade > 18){
    console.log('Voto obigatório.') 
 } */

/* let hora = new Date
let agora = hora.getHours()
console.log(agora)

if (agora <= 12 && agora >= 6){
    console.log('Bom dia')
} else if (agora >12 && agora <= 18){
    console.log('Boa tarde')
} else if(agora >=19 && agora <= 23){
    console.log('Boa noite')
}else {
    console.log('Boa madrugada')
} */


/*+++++++++++++++++++++++++ Switch -----------------------------*/

let agora = new Date
let diaSemana = agora.getDay()

switch (diaSemana) {
    case 0:
        console.log('Bom domingo')
        break;
    case 1:
        console.log('Boa segunda')
        break;
    case 2:
        console.log('Boa terça')  
        break;
    case 3:
        console.log('Boa quarta')
        break;
    case 4:
        console.log('Boa quinta')
        break;
    case 5:
        console.log('Boa sexta')
        break;
    case 6:
        console.log('Bom sábado')              

    default:
        console.log('Erro - Dia da semana inválido')
        break;
}