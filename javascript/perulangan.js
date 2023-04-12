console.log("for");
console.log("Loop start");
for(let i=0; i<3; i++) {
 console.log(i);
}
console.log("Loop end");

console.log("for-each");
let k = [1, 2, 3];
for(let number of k) {
 console.log(number);
}

console.log("while");
let character = 65;
while(String.fromCharCode(character) <= 'E') {
 console.log(String.fromCharCode(character));
 character++;
}

console.log("do-while");
let j = 50;
while (j < 10)
{
 console.log("while " + j);
}
do
{
 console.log("do-while " + j);
} while (j < 10);