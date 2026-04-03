function verificarNumeroPrimo(n) {
    // Casos base: números menores que 2 não são primos
    if (n <= 1) {
        return false;
    }

    // O número 2 é o único primo par
    if (n === 2) {
        return true;
    }

    // Elimina números pares maiores que 2
    if (n % 2 === 0) {
        return false;
    }

    // Verifica divisores ímpares do 3 até a raiz quadrada de n
    let limite = Math.sqrt(n);
    for (let i = 3; i <= limite; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Casos de teste
console.log(`0: ${verificarNumeroPrimo(0)}`);          // false
console.log(`1: ${verificarNumeroPrimo(1)}`);          // false
console.log(`2: ${verificarNumeroPrimo(2)}`);          // true
console.log(`3: ${verificarNumeroPrimo(3)}`);          // true
console.log(`7: ${verificarNumeroPrimo(7)}`);          // true
console.log(`83: ${verificarNumeroPrimo(83)}`);        // true
console.log(`100: ${verificarNumeroPrimo(100)}`);      // false
console.log(`991: ${verificarNumeroPrimo(991)}`);      // true
console.log(`104729: ${verificarNumeroPrimo(104729)}`); // true
console.log(`14348907: ${verificarNumeroPrimo(14348907)}`); // false
