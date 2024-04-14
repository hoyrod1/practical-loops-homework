console.log("================= Hello Professor =================");
console.log("============ Practical Loop Homework ==============");
console.log("===================================================");
console.log("================ Part 1 Fizz Buzz =================");
console.log("======== Check if number is divisible by 3 ========");
/**********************************************************************/
// The number 100 is the max number count
const numConstrant = 100;
/**********************************************************************/
// Check if number is divisible by 3 //
let numCount = 0;

while (numCount <= numConstrant) {
  if (numCount % 3 === 0) {
    console.log(`Fizz`);
  }
  numCount++;
}
/************************************************************************/
console.log("======== Check if number is divisible by 5 ========");
// Check if number is divisible by 5 //
let numCount5 = 0;

while (numCount5 <= numConstrant) {
  if (numCount5 % 5 === 0) {
    console.log(`Buzz`);
  }
  numCount5++;
}
/*************************************************************************/
console.log("======== Check if number is divisible by 3 and 5 ========");
// Check if number is divisible by 3 and 5 //
let numCountFor3n5 = 0;

while (numCountFor3n5 <= numConstrant) {
  if (numCountFor3n5 % 3 === 0 && numCountFor3n5 % 5 === 0) {
    console.log(`Fizz Buzz`);
  }
  numCountFor3n5++;
}
/***************************************************************************/
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
