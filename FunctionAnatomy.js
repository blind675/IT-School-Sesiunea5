// Declararea functiei:
function sayHello() {
  console.log("Salut din functie");
}
// Apelarea functiei:
sayHello();


function sum(number1, number2) {
  // Valorile pentru parametri number1 si number2 sun atribuite la apelarea functiei.
  console.log(number1 + number2);
}
// Apelarea functiei:
sum(2, 5)
sum(3, 5)

// Problema: Ce fac daca vreau sa salvez calculul din functie intr-o variabila externa (din afara functiei)?
// Solutie: Returnez valoarea in interiorul functiei.
function sumWithReturn(number1, number2) {
  let result = number1 + number2;
      
  // Cuvantul cheie return returneaza o valoare in urma executiei functiei.
  return result;
}

// let result00 = sumWithReturn(1, sum(1,1))

// Apelare (functia returneaza o valoare, deci o salvam intr-o variabila).
let result = sum(1,1)
console.log("sum simplu: ", result)

let result2 = sumWithReturn(2,2)
console.log("sum with return: ", result2)

// Mai multi => cei in plus vor fi ignorati.
let result3 = sumWithReturn(1,2,3,4,5,6)
console.log("3 - sum with return: ", result3)
// Mai putini => cei in minus vor primi valoarea undefined. 2 + undefined => NaN
let result4 = sumWithReturn(1) 
console.log("4 - sum with return: ", result4)

// let newVar = undefined


function mixedSum(number1, number2) {
  console.log(number1 + number2);
  
  return number1 + number2
}

mixedSum(1,2);

let result5 = mixedSum(4,5);
console.log("5 - sum with return: ", result5)

sum(1, result5)

sum(2, mixedSum(3,4))