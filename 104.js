/*
function getSize(width, height, depth){
    var area = width * height;
    var volume = width * height * depth;
    var size = [area, volume];
    return size;
}

var areaOne = getSize(3,2,3)[0];
var volume = getSize(3,2,3)[1];


var a = "stringA"
var b = a

console.log(a, b);
a = "stringB"
console.log(a,b);

function myFirstFunction(){
    console.log("Hello World");
}

myFirstFunction();
*/

function printValue3(val){
    if(val > 10){
        return "The value is greater than 10";

    }else{
        return "The value is less than 10";
    }
}

console.log(printValue3(1));

const person = {
    fistName: "Maor",
    lastName: "Ovadya",
    age: 18,
    hobbies: ["cooding", "reading", "gaming"],
    address:{
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
}
console.log(person.hobbies[0]);

