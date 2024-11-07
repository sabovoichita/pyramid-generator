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

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {}

for (let i = 0; i < count; i = i + 1) {
  //   console.log(i);
  rows.push(character.repeat(i + 1));
}
let result = "";
for (const row of rows) {
  result = result + "\n" + row;
}
console.log(result);
