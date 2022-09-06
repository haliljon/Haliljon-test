"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) console.log("I can drive :D");
*/
/*
function logger() {
  console.log("My name is Haliljon");
}

// calling / running / invoking function

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const applesJuice = fruitProcessor(5, 0);

console.log(applesJuice);
*/
/*
// Function Declarations

function calcAge(birthYear) {
  return 2022 - birthYear;
}

console.log(calcAge(1994));


//Function Expressions

const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

console.log(calcAge2(1994));


const calcAge3 = (birthYear) => 2022 - birthYear;
console.log(calcAge3(1994));
*/
/*
const yearsUntilRetirement = (birthYear) => 65 - (2022 - birthYear);
console.log(yearsUntilRetirement(1994));

const yearsUntilRetirement1 = (birthYear, firstName) => {
  const retirement = 65 - (2022 - birthYear);
  return `${firstName} retires in ${retirement} year(s).`;
};
console.log(yearsUntilRetirement1(1994, "Haliljon"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  let applePieces = cutFruitPieces(apples);
  let orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
const calcAge = function (birthYeah) {
  return 2022 - birthYeah;
};

const yearsUntilRetirement1 = function (birthYeah, firstName) {
  const retirement = 65 - calcAge(birthYeah);
  if (retirement > 0) {
    return retirement;
  } else {
    return `${firstName} has already retired.`;
  }
};

console.log(yearsUntilRetirement1(1994, "Haliljon"));
console.log(yearsUntilRetirement1(1935, "John"));
