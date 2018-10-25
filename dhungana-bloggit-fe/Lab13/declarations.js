var a = 1;
var b = 1;
var c = 1;
console.log("\n   a: " + a + "\n   b: " + b + "\n   c: " + c + "\n");
for (var j = 0; j < 2; j++) {
    console.log(j);
}
console.log("in scope: " + j);
for (var i = 0; i < 2; i++) {
    console.log(i);
}
//console.log(`out of scope: ${i}`);
var _a = [1, 2, 3], first = _a[0], second = _a[1], third = _a[2];
console.log("\n   first: " + first + ",\n   second: " + second + ",\n   third: " + third + "\n");
var _b = ["alpha", "beta", "gamma"], alpha = _b[0], beta = _b[1], gamma = _b[2];
_c = [alpha, beta, gamma], beta = _c[0], alpha = _c[1], gamma = _c[2];
console.log("\n   alpha: " + alpha + ",\n   beta: " + beta + ",\n   gamma: " + gamma + "\n");
var obj = {
    red: "foo",
    blue: 12,
    green: "bar"
};
var red = obj.red, green = obj.green;
console.log("red: " + red);
console.log("green: " + green);
var _c;
