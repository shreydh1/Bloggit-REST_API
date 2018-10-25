var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printFuzzBall(k) {
    console.log(k);
}
var kitten = { fuzzy: true, name: "Garfield" };
printFuzzBall(kitten);
var mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch("Hello", "o"));
var RoundThing = /** @class */ (function () {
    function RoundThing(color) {
        this.color = color;
    }
    RoundThing.prototype.getColor = function () {
        return this.color;
    };
    RoundThing.prototype.getType = function () {
        return "RoundThing";
    };
    RoundThing.getType = function () {
        return "RoundThing";
    };
    return RoundThing;
}());
var thing = new RoundThing("red");
console.log("\n    A RoundThing is a RoundThing:\n    color: " + thing.getColor() + ",\n    type: " + thing.getType() + ",\n    statictype: " + RoundThing.getType() + "\n ");
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit(color) {
        return _super.call(this, color) || this;
    }
    Fruit.prototype.getType = function () {
        return "Fruit";
    };
    Fruit.getType = function () {
        return "Fruit";
    };
    return Fruit;
}(RoundThing));
var myFruit = new Fruit("green");
console.log("\n    A Fruit is a Fruit:\n    color: " + myFruit.getColor() + ",\n    type: " + myFruit.getType() + ",\n    statictype: " + Fruit.getType() + "\n ");
var otherthing = new Fruit("orange");
console.log("\n    But this RoundThing is still a Fruit:\n    color: " + otherthing.getColor() + ",\n    type: " + otherthing.getType() + "\n ");
