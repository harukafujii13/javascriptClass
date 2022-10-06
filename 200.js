var profession =  'docter'

/*
if('profession' === 'docter'){
    console.log('You are a docter');
}else if(profession === 'teacher'){
    console.log('You are a teacher');
}else if(profession === 'singer'){
    console.log('You are a singer');
}else{
    console.log('You are something else');
}
*/

switch(profession){
    case 'docter':
        console.log('You are a docter');
        break;
    case 'teacher':
        console.log('You are a teacher');
        break;
    case 'singer':
        console.log('You are a singer');
        break;
    default:
        console.log('You are a NEET');
        
}

const fruits = ["apple", "banana", "orange", "pear", "grape"];


for(let i = 0; i < fruits.length ; i++){
console.log(fruits[i]);
}