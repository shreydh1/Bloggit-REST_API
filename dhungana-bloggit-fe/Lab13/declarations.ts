
var a: number = 1;
let b: number = 1;
const c: number = 1;

console.log (`
   a: ${a}
   b: ${b}
   c: ${c}
`);

for (var j = 0; j < 2; j++) {
    console.log(j);
 }
 console.log(`in scope: ${j}`);
 
 for (let i = 0; i < 2; i++) {
    console.log(i);
 }
 //console.log(`out of scope: ${i}`);

let [first, second, third] = [1, 2, 3];
console.log(`
   first: ${first},
   second: ${second},
   third: ${third}
`);


let [alpha, beta, gamma] = ["alpha", "beta", "gamma"];
[beta, alpha, gamma] =  [alpha, beta, gamma];
console.log(`
   alpha: ${alpha},
   beta: ${beta},
   gamma: ${gamma}
`)
let obj = {
    red: "foo",
    blue: 12,
    green: "bar"
 };
 let { red, green } = obj;
 console.log("red: " + red);
 console.log("green: " + green);