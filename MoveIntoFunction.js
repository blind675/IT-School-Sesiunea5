// 1. Scriem niște cod care inverseaza un numar.
// Ex: 2345 devine 5432

// Algoritm: Extragem ultima cifra din numar si o adaugam la sfarsitul unei noi variabile, pana cand numarul initial ajunge sa fie 0. Variabila in care stocam rezultatul poate fi numar sau un sir de caractere.

let number = 3456;
// Alegem sa stocam numarul rezultat intr-un sir de caractere, initial gol.
let reversedNumber = '';

while (number > 0) {
  // Extragem ultima cifra.
  let lastDigit = number % 10;
  // Adauagam cifra la sirul rezultatului.
  reversedNumber = reversedNumber + lastDigit;
  // Taiem ultima cifra.
  number = parseInt(number / 10);
}
// La sfarsit sirul e convertit in numar.
reversedNumber = Number(reversedNumber);
console.log(reversedNumber);

// 2. Tranformam codul de mai sus intr-o functie!

// Pas 1: Nume // Pas 2: Ce parametri primeste functia
function reverseNumber(number) {
  // Inceput copiere cod de mai sus. 
  let reversedNumber = '';

  while (number > 0) {
    let lastDigit = number % 10;
    reversedNumber = reversedNumber + lastDigit;
    number = parseInt(number / 10);
  }
  reversedNumber = Number(reversedNumber);
  // Final copiere cod de mai sus.
  
  // Pas 3: Ce returneaza functia
  return reversedNumber;
}
// Pas 4 : Apelarea functiei
reversedNumber = reverseNumber(1234);
console.log(reversedNumber);

// Concluzie: cand iei cu copy-paste cod sa il pui intr-o functie, este necesar sa identifici ce variabile devin parametri + ce returneaza functia.

// 3. Facem o functie, numita isPalindrom, care primeste un numar si returneaza true, daca numarul este palindrom, respectiv false, daca numarul nu este palindrom.
// Cand este un numar palindrom? Atunci cand inversul sau este egal cu el insusi. Exemplu de numere palindrom: 424, 1111, 98789.
// isPalindrom(3443) => true
// isPalindrom(3434) => false

function isPalindrom(number) {
  // Este important sa realizam ca primitivele (number, string, boolean etc.) sunt transmise "prin valoare" catre functie. Practic, variabila trimisa catre functie nu este efectat in exteriorul functiei, intrucat se trimite doar valoarea ei catre functie. In cazul nostru, cu toate ca parametru number fi distrus in in interiorul functiei reverseNumber, in exteriorul ei number ramane cu aceeasi valoare.
  let reversedNumber = reverseNumber(number);
  
  if (reversedNumber === number) {
    console.log(" E palindrom ");
    return true;
  } else {
    console.log(" Nu e palindrom ")
    return false;
  }
}

let result = isPalindrom(3443);
console.log(result);
result = isPalindrom(3434);
console.log(result);

// let obj = {
//   name:  "ion",
//   age: 45
// }
// console.log(obj)

// function changeObj(obj) {
//   obj.name = "Nu Ion";
// }

// changeObj(obj)
// console.log(obj)