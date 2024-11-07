// console.log(character);
// character = "'World'";
// console.log(character);
// let secondCharacter;
// console.log(secondCharacter);
// //change your secondCharacter assignment from "Test" to your character variable.
// secondCharacter = character;
// console.log(secondCharacter);

// let profession;
// profession = "teacher";
// let age;
// console.log(profession);
// console.log(age);

// console.log(count + 1);

// console.log(rows[0]);
// rows[rows.length - 1] = 10;

// let cities = ["London", "New York", "Mumbai"];
// console.log(cities);
// cities[cities.length - 1] = "Mexico City";
// console.log(cities);

// rows.push("freeCodeCamp");

// let pushed = rows.push("freeCodeCamp", "ceva");
// console.log("pushed items: ", pushed);
// let popped = rows.pop();
// console.log("popped: ", popped);
// console.log("rows: ", rows);
// console.log("    #    ");
// console.log("   ###   ");
// console.log("  #####  ");
// console.log(" ####### ");
// console.log("#########");

// function addTwoNumbers(a, b) {
//   return a + b;
// }
// let sum = addTwoNumbers(5, 10);
// console.log("sum is:" + sum);

// console.log(test);

//   console.log("This works!");

// const test = "Testing";
//   return test;

// const call = padRow();
// console.log(call);

//   console.log(i);

// if ("") {
//     // falsy values: false, 0, "", null, undefined, and NaN.
//     console.log("Condition is true");
//   } else if (5 > 10) {
//     console.log("5 is less than 10");
//   } else {
//     console.log("This is the else block");
//   }

// if (done !== count) {
//     console.log("here");
//     continueLoop = false;
//   }

// let continueLoop = false;

// let done = 0;
// done++;

/*for (let i = count; i > 0; i--) {
      rows.push(padRow(i, count));
    }*/

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

//Change the code to a different loop
/*for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}*/

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);

let result = "";
for (const row of rows) {
  result = result + "\n" + row;
}
console.log(result);
