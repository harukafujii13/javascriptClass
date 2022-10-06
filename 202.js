// debugger;
// var x = 0;
// var y = 'abc'
// function fn(){}

// console.log(x);

// function fn(){}

// fn.property = 'Hello'
// console.log(fn.property);

// function fn2(){
//     console.log('Excusing fn2')
// }

// fn2.func = function(){
//     console.log('Excusing fuunc')
// }

// fn2();
// fn2.func();

// //--------

// function fnCaller(n){
//     fn()
// }

// function log(){
//     console.log("Calling log")
// }

// fnCaller(log){
//     console.log('Calling log')
// }


function multiplayBy2(x){
    return x * 2
}


function callMultiply(fn, val){
    return fn(val)
}
console.log(callMultiply(multiplyBy2,2))