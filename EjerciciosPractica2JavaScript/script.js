//EJERCICIO 1
var numbers = [];

    function findLargestNumber() {
        var input = document.getElementById('numberInput');
        var number = parseFloat(input.value);

    if (isNaN(number)) {
        alert('Ingresa un número válido.');
        return;
    }

    numbers.push(number);
    input.value = '';
}

    function findMax() {
    if (numbers.length === 0) {
        alert('No has ingresado ningún número.');
        return;
    }

    var max = numbers[0];
    
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

        var result = document.getElementById('result');
        result.innerHTML = 'El número más grande es: ' + max;
    }

    //EJERCICIO 2
    function checkPalindrome() {
        var input = document.getElementById('inputWord');
        var word = input.value.toLowerCase();

        // Elimina los espacios en blanco y caracteres no alfabéticos
        word = word.replace(/\s/g, '').replace(/[^a-zñ]/g, '');

        if (word === '') {
            alert('Ingresa una palabra o frase válida.');
            return;
        }

        var reversedWord = word.split('').reverse().join('');

        if (word === reversedWord) {
            document.getElementById('result2').innerHTML = '"' + input.value + '" es un palíndromo.';
        } else {
            document.getElementById('result2').innerHTML = '"' + input.value + '" no es un palíndromo.';
        }
    }

    //EJERCICIO 3
    function calculateDigitSum() {
        var input = document.getElementById('numbersInput');
        var number = input.value;

        if (number === '') {
            alert('Ingresa una cifra válida.');
            return;
        }

        var digitSum = 0;
        var digits = number.toString().split('');

        for (var i = 0; i < digits.length; i++) {
            digitSum += parseInt(digits[i]);
        }

        document.getElementById('result3').innerHTML = 'La suma de los dígitos es: ' + digitSum;
    }

    //EJERCICIO 4
    function generateRandomNumber() {
        var minInput = document.getElementById('minInput');
        var maxInput = document.getElementById('maxInput');

        var min = parseInt(minInput.value);
        var max = parseInt(maxInput.value);

        if (isNaN(min) || isNaN(max)) {
            alert('Ingresa un rango válido.');
            return;
        }

        if (min >= max) {
            alert('El valor mínimo debe ser menor que el valor máximo.');
            return;
        }

        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        document.getElementById('result4').innerHTML = 'Número aleatorio: ' + randomNumber;
    }

    //EJERCICIO 5
    function generateFibonacciSequence() {
        var input = document.getElementById('numberInputFibo');
        var number = parseInt(input.value);

        if (isNaN(number) || number <= 0) {
            alert('Ingresa un número válido mayor que cero.');
            return;
        }

        var sequence = [0, 1];

        while (sequence[sequence.length - 1] + sequence[sequence.length - 2] <= number) {
            sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        }

        document.getElementById('result5').innerHTML = 'Secuencia de Fibonacci: ' + sequence.join(', ');
    }

