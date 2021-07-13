var suma = (a, b) => a + b;

var resta = (a, b) => a - b;

var multiplicacion = (a, b) => a * b;

var division = (a, b) => {
    return b === 0 ? undefined : a / b;
}



console.log(suma(10,15));
console.log(resta(29,12));
console.log(multiplicacion(5,3));
console.log(division(15,3));
console.log(division(15,0));