
interface FuzzBall {
    fuzzy: boolean;
 }
 
 interface Kitten extends FuzzBall {
    name: string;
 }
 
 function printFuzzBall(k: FuzzBall) {
    console.log(k);
 }
 
 let kitten:Kitten = {fuzzy: true, name:"Garfield"};
 printFuzzBall(kitten);


interface SearchFunc {
    (str: string, sub: string): boolean;
 }
 
 let mySearch: SearchFunc = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
 }
 
 console.log(mySearch("Hello", "o"));
 class RoundThing {
    private color: string;
    
    constructor(color: string) {
        this.color = color;
    }
 
    public getColor(): string {
        return this.color;
    }
 
    public getType(): string {
        return "RoundThing";
    }
 
    public static getType(): string {
        return "RoundThing";
    }
 }
 
 let thing: RoundThing = new RoundThing("red");
 console.log(`
    A RoundThing is a RoundThing:
    color: ${thing.getColor()},
    type: ${thing.getType()},
    statictype: ${RoundThing.getType()}
 `)
 class Fruit extends RoundThing {

    constructor(color: string) {
        super(color);
    }
 
    public getType(): string {
        return "Fruit";
    }
 
    public static getType(): string {
        return "Fruit";
    }
 }
 
 let myFruit: Fruit = new Fruit("green")
 console.log(`
    A Fruit is a Fruit:
    color: ${myFruit.getColor()},
    type: ${myFruit.getType()},
    statictype: ${Fruit.getType()}
 `)
 
 
 let otherthing: RoundThing = new Fruit("orange");
 console.log(`
    But this RoundThing is still a Fruit:
    color: ${otherthing.getColor()},
    type: ${otherthing.getType()}
 `)
 