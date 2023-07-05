/* let a = function parimp(n1) {
    if (n1%2 == 0) {
       return console.log('Par')
    } else {
        return console.log('Ímpar')
    }
}
a(478) */

/* function soma(n1=0, n2=0) {
    return n1 + n2
}

let res = soma(19, 79)
console.log(res) */

/* let v = function (x) {
    return x**2
}

console.log(v(4)) */

/* function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat = fat*c
    }

    return fat
} */

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(15))
