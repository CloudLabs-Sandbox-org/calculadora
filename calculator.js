function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

// Example usage:
console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(5, 3));
console.log("Multiplication:", multiply(5, 3));
console.log("Division:", divide(5, 3));

// Para ejecutar este archivo en Visual Studio Code:

// 1. Asegúrate de que Node.js esté instalado en tu sistema.
// 2. Abre el archivo `calculator.js` en Visual Studio Code.
// 3. Abre la terminal integrada (`Ctrl + ~`).
// 4. Ejecuta el archivo con el comando: `node calculator.js`.

// Esto mostrará los resultados de las operaciones en la terminal.
