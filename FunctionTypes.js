// Sintaxa 1 - clasica
// Declararea functiei:
function sum(number1, number2) {
  return number1 + number2;
}
// Apelarea:
let result = sum(3, 1);
console.log(result);


// Functie anonima => functie fara nume. Cum o apelam? O punem intr-o variabila, deci numele functiei va fi numele functiei.

// Sintaxa 2 - function expression
// Declararea functiei:
let sumFunction = function (number1, number2) {
  return number1 + number2;
};
// Apelarea (la fel ca la sintaxa 1):
let result2 = sumFunction(1,2);
console.log(result2);


// Sintaxa 3 - arrow function
// Declararea functiei: varianta extinsa
let arrowFunction = (number1, number2) => {
  let sum = number1 + number2;
  return sum;
}
// Apelarea (la fel ca la sintaxa 1):
let result3 = arrowFunction(5,6);
console.log(result3);

console.log(arrowFunction(5,6));

// Declararea functiei: varianta prescurtata
let shortArrowFunction = (number1, number2 ) => number1 + number2 ;

// let var1 = 1, var2 = false, var3 = 'text';