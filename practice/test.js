console.log("Hello world!");    // prints everything using console.log inline comment

/*
multiline comment
Data types
undefined, number, string, boolean, null, symbol, object
*/

var testName = "Yukendh";  // var it going to be wholw program

let test = "Yukendh"; // let it scope is where it is declared

test = "iu654";

console.log(test);

const pi = 3.14; // const it can never change

var declare;

console.log(declare);

var assign = "some value"

var declare = assign;

var declare = "ertui";

console.log(declare);

var array = ["some", "some", "some", "some"];

console.log(array);

function TestFunc(name, age) {
    this.name = name;
    this.age = age;

    console.log(test)
}

TestFunc.prototype.getAge = function () { return this.age; }  // returns the age of the function
TestFunc.prototype.getName = function () { return this.name; } // returns the name of the function

var peo1 = new TestFunc("yuki", 20); // create a new instance
var peo2 = new TestFunc("yuke", 22);

console.log(peo2);
console.log(peo1);

function TestFunc1(name, age, sex) {
    TestFunc.call(this, name, age);   // inherits from TestFunc
    this.sex = sex;     
}

var peo3 = new TestFunc1("yugi", 21, "male");

console.log(peo3);  // TestFunc1 { name: 'yugi', age: 21, sex: 'male' }

var object = {
    "some": "some",
    "data": "data"
};

var peo4 = Object.create(TestFunc1);
peo4.bla = "some";

console.log(peo4);

console.log(object);
