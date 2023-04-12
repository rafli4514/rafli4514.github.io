/** @format */

console.log("Kondisi");
console.log("if-else");
let score = 70;
if (score <= 50) {
  console.log("Bad");
} else if (score > 50 && score <= 80) {
  console.log("Good");
} else {
  console.log("Perfect");
}

console.log("Shorthand If-Else");
// let score = 70;
// let scoreCategory = score <= 50 ? "Bad" : "Good";
// console.log(scoreCategory);

let day = 2;
console.log("switch case");
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Unknown day");
}
