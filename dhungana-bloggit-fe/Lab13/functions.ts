
function sum(x, y) {
    return x + y;
 }
 
 let mySum = function(x, y) { 
    return "The result is: " + (x + y); 
 };
 
 let myOtherSum = function(x, y) {
    return function(z) {
        return "Added together, the sum is: " + (z + y)
    }(x + y);
 }
 
 console.log(sum(1, 1));
 console.log(mySum(3, 3));
 console.log(myOtherSum(9, 9));

 function praiser(x: string) {
    return `Who's awesome? ${x}!`;
 }
 
 console.log(praiser("Betty White"));
 console.log(praiser(3.14)); 


function adder(x: number, y: number): number {
    return x + y;
 }
 
 console.log(adder(1, 2) + 1);
 function concatter(last: string, first?: string) {
    return last + (first ? ", " + first : "");
 }
 console.log(concatter("Walters"));
 console.log(concatter("Walters", "Brian"));

 function friender(last: string, first = "X") {
    return last + (first ? ", " + first : "");
 }
 
 console.log(friender("Walters"));
 console.log(friender("Walters", "Brian"));

 function caller(func: Function) {
    console.log(func());
 }
 
 function called() {
    return "Hello!";
 }
 
 caller(called);

caller(() => {return "Hello Again"});