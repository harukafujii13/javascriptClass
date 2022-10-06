// var a = 10;
// console.log(a === window.a);

// function myFunk(){
//     var a = 10;
// }

// myFunk();
// console.log(a);

// function myFunc(){
//     a = 10;
// }

// myFunc();
// console.log(a);

// console.log(a);
// b();
// var a = 10;
// function b() {
//     console.log('Hello');
// }

// if (true) {
//     var a = 10;
// } else {
//     var b = 20;
// }
// console.log(a);
// console.log(b);

// var obj = {
//     name: 'Bob',
//     age: 30,
//     address: {
//         city: 'New York',
//         street:'Wall Str.',
//         defineThis: function(){
//             console.log(this === obj);
//         }
//     }
// }



// var obj = {
//     name: 'Bob',
//     age: 30,
//     defineThis: function () {
//         function a() {
//             console.log(this === obj)
//         }
//         a()
//     },
// }
// obj.defineThis()

function logUpTo(n){
    for(var i = 1; i <= n; i++
){
    console.log(i);
}

}
