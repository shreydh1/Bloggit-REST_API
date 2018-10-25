
// let sOne: any = "1";
// let iOne: any = 1;
// if (sOne === iOne) {
//    console.log("triple equals - does not print");
// }

// if (sOne == iOne) {
//    console.log("double equals - prints");
// }

// let i = 0;
// while(i < 2) {
//    i++;
//    console.log(i);
// }

// do {
//    i--;
//    console.log(i);
// } while (i > 0);


// let j = 300;
// for (let j = 10; j < 12; j++) {
//    console.log(j);
// }
// console.log("J of outer scope: " + j);


// let simpsons = ["bart", "lisa", "maggie"];
// for (let i in simpsons) {
//   console.log(i);
// }
// for (let i of simpsons) {
//   console.log(i);
// }
let stars = {
    bands: "The Cure",
    points: 5,
    makeMe: function() {return "*****";}
 };
 
 for (let item in stars) {
    console.log(item);
 }