// const getNewLocation = (city = Roma, country = "Italy", continent) =>
//     console.log(city, country, countinent)

//Before Es6

// var name = "Yuno"

// var greeting = `Hello, my name is " + ${name} and I'm ${Math.floor(math)*20} years old`
// console.log(greeting);


// var a = 1;
// var b = 10
// console.log(`1 * 10 is` + (a * b));
// console.log(`1 * 10 is ${a * b}`);

// const person = {
//     name: "Atena"
//     food: "Tamagoyaki"
// }

// var fist = person.name
// var last = person.food
// console.log(person)

// const person2 = [`Vivian`, `Chocolate`]
// const [] = person2
// console.log(firstName + ` lokes ` + favfood)

// let hungry = full
// full = hungry

// console.log(hungry, full);

// const fruits = ['apple', 'orange', 'strawberry']
// fav(var i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// for(let fruit of fruits){
//     console.log(fruits);
// }

// function isSortedAsc(arr){
//     for(){
        
//     }
// }

// isSortedAsc([])
// isSortedAsc([1,2,3,4,5])
// isSortedAsc([1,2,3,4,5])

// function greeting(name){
//     console.log("Hello," + name);
// }

// const greeting = name => {
//     console.log('Hello,' + name)
// }

// const sayHello = () => {
//     console.log("Hello")
// }


//Before ES6
// function getLocation(city, country, continent){
//     if(typeof country === 'undefined'){
//         country = 'Italy'
//     }
//     if(typeof continent === 'undefined'){
//         continent = 'Europe'
//     }
//     console.log(city, country, continent)
// }

// getLocation('Milan')
// getLocation('Paris', 'France')

// //ES6

// const getNewLocation = (city="Rome", country="Italy", continent="Europe") => {
//     console.log(city, country, continent)
// }

// getNewLocation('Milan')
// getNewLocation()

//Before ES6

var name = "Haruka"
var greeting = "Hello, my name is " + name
console.log(greeting);

//ES6

greeting = `Hello my name is ${name} and I'm ${Math.floor(Math.random() * 20)} years old` //back ticks
console.log(greeting);

Math.random()

//Expression interpolation
var a = 1;
var b = 10
console.log('1 * 10 is ' + (a * b));
console.log('1 * 10 is ${a * b}');

//includes
const alpha = 'ABCDEF'
console.log(alpha.includes("ABB"));
console.log(alpha.includes("abc"));

//repeat
let hello = "Hi"
console.log(hello.repeat(10));

const person = {
    name: "Haruka",
    food: "Tamagoyaki"
}

var first = person.name
var last = person.food
console.log(first, last);

//ES6

// const { name, food } = person
// console.log(name, food);

//destruction array

const person2 = ["Fujii", "Osushi"]
const [firstName, favfood] = person2
console.log(firstName + ' likes ' + favfood)

//swapping
let hungry = "yes"
let full = "no"

// console.log(hungry, full);

// tempt = hungry
// hungry = full
// full = temp

// console.log(hungry, full);

// [hungry, full] = [full, hungry]
// console.log(hungry, full);


// function greet(firstName, lastName){
//     console.log('Hello, ${firstName} ${lastname}')
// }

// greet("Haruka", "Fujii")

//destructuring params

const person3 = {
    first: "Haruka",
    last: "Fujii"
}

function greet(person){
    const { first, last } = person
    console.log(`Hello, ${first} ${last}`)
}

greet(person3)

//for of

// const fruits = ['apple', 'orange', 'strawberry']
// for(var i = 0; i<fruits.length; i++){
//     conso
//     le.log(fruits[i]);
// }

//ES6

// for(let fruit of fruits){
//     console.log(fruit);
// }

//分からん
const cat = {
    breed: 'siamese',
    age: 94,
    color: "purple",
    tails: 3,
    legs: 6
}

//for(const prop of Object.)

// console.log(Object.keys(cat));
// console.log(Object.values(cat));
// console.log(Object.entries(cat));

console.log("-------------");
for(const prop of Object.keys(cat)){
    const value = cat[prop]
    console.log(prop, value);
}

console.log("-------------");
for(const prop in cat){
    console.log(prop);
}

//combined arrays

const veggies = ["tomato", "cucumber", "eggplant" ]
const meat = ["pork", "beef", "lamb"]

const combi1 = veggies.concat(meat)
console.log(combi1);

const menu = ["carrot", ...veggies, "chicken", ...meat]
menu.push("apple")
menu.push("banana")
console.log(menu);


const person = ["Haruka", "Fujii"]

function greet(first,last){
    console.log(`Hello ${first} ${last}`);
}
greet(...person)
