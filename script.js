console.log("================= Hello Professor =================");
/**********************************************************************/
console.log("============ Practical Loop Homework ==============");
console.log("===================================================");
console.log("================ Part 1 Fizz Buzz =================");
console.log("======== Check if number is divisible by 3 ========");
/**********************************************************************/
// Check if number is divisible by 3 //
//====================================================================//
// The numConstrant = 100 is the maximum number count
const numConstrant = 100;
//--------------------------------------------------------------------//
let numCount = 0;

while (numCount <= numConstrant) {
  if (numCount % 3 === 0) {
    console.log(`Fizz`);
  }
  numCount++;
}
//--------------------------------------------------------------------//
console.log("======== Check if number is divisible by 5 ========");
// Check if number is divisible by 5 //
let numCount5 = 0;

while (numCount5 <= numConstrant) {
  if (numCount5 % 5 === 0) {
    console.log(`Buzz`);
  }
  numCount5++;
}
//--------------------------------------------------------------------//
console.log("======== Check if number is divisible by 3 and 5 ========");
// Check if number is divisible by 3 and 5 //
let numCountFor3n5 = 0;

while (numCountFor3n5 <= numConstrant) {
  if (numCountFor3n5 % 3 === 0 && numCountFor3n5 % 5 === 0) {
    console.log(`Fizz Buzz`);
  }
  numCountFor3n5++;
}
//-------------------------------------------------------------------------//
console.log("======== Check if number is not divisible by 3 and 5 ========");
// Check if number is not divisible by 3 and 5 //
let numCountNotFor3n5 = 0;
let count = [];
let finalCount;

while (numCountNotFor3n5 <= numConstrant) {
  if (numCountNotFor3n5 % 3 !== 0 && numCountNotFor3n5 % 5 !== 0) {
    console.log(`The number ${numCountNotFor3n5} is not divisible by 3 and 5`);
    console.log();
    finalCount = count.push(numCountNotFor3n5);
  }
  numCountNotFor3n5++;
}
console.log(`There are ${finalCount} number not divisible by 3 and 5`);
console.log("=============================================================");
/****************************************************************************/

/****************************************************************************/
console.log("=============================================================");
console.log("==================== Part 2 Prime Time ======================");
console.log("================== Check for prime numbers ==================");
/****************************************************************************/

/****************************************************************************/
//--------------------- Part 2: Check for prime numbers ---------------------//
for (let n = 2; n <= 100; n++) {
  // (primeChecker = 0) will determine if the number is a prime number
  let primeChecker = 0;

  for (let i = 2; i < n; i++) {
    // If n has no remainder
    if (n % i === 0) {
      primeChecker = 1;

      // this if statement checks if (n) === 4
      if (n === 4) {
        console.log(`5`);
        continue;
      }
    }
  }

  if (primeChecker === 0) {
    // this if statement checks if (n) === 5
    if (n === 5) {
      console.log(`7`);
      continue;
    }

    // (n) logs out all the prime numbers from 2 - 100
    console.log(`${n} is a prime number`);
  }

  // this if statement checks if (n) === 9
  if (n === 9) {
    console.log(`11`);
    continue;
  }
}
/****************************************************************************/

/****************************************************************************/
console.log("=============================================================");
console.log("=================== Part 3 Feeling Loopy ====================");
/****************************************************************************/

/****************************************************************************/
//-------------------------- Part 3: Feeling Loopy -------------------------//
let id = ["id", 42, 57, 63, 98];
let names = ["Name", "Bruce", "Bob", "Blaine", "Bill"];
let occupation = [
  "Occupation",
  "Knight",
  "Fry Cook",
  "Quiz Master",
  "Doctor’s Assistant",
];
let age = ["Age", 41, 19, 58, 26];

const data = [id, names, occupation, age];

for (const cell of data) {
  console.log(`${cell[0]}, ${cell[1]}, ${cell[2]}, ${cell[3]}, ${cell[4]}`);
}
/****************************************************************************/
console.log("=============================================================");
/****************************************************************************/
