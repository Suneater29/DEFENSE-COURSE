// function greeting(){
//     console.log("haa vai kiski , vadiya sb");
//     return 0;
// }

// console.log(greeting());

// function sum(num1,num2){
//     const num3=num1+num2;
//     console.log(num3);
// }
// sum(6,8);

// function sum(num1,num2,num3=0,num4=0){
//     const summation=num1+num2+num3+num4;
//     console.log(summation);
// }
// sum(6,8);
// sum(7,8,9);
// sum(7,8,9,99);



// //for n number of inputs we will use rest operator
// function sum(...num){
//     let sum=0;
//     for(let i of num){
//         sum+=i;
//     }
//     console.log(sum);
// }
// //rest operator will catch the values and store them as array
// sum(8,9,7,5,3);



//function as expression
 
// const sum=function(num1,num2){
//     return num1+num2;
// }
// console.log(sum(6,8));




//arrow function

//()=>{

// }

// const addnum=()=>{
//     console.log("add krde nums ko");
// }
// addnum();

// const addnum=(num1,num2)=>{
//     return num1+num2;
// }

//can also be written as : 
// const addnum=(num1,num2)=>num1+num2;
// const sqrnum=num1=>num1*num1; //when u have only single parameter
// console.log(sqrnum(8));
// console.log(addnum(8,8));


// //returning object in function
// const greet=()=>({name:"arsal",age:21});
// console.log(greet());


//IIFE - Immediately Invoke Function , funtion will immediately invoked after it's creation
// (function greet(){
//     console.log("hello veere , kya haal h");
// })();

//using arrow function in IIFE
// (()=>{
//     console.log("fuck modi");
// })();

//CALLBACK 
//we can use any word beside callback 
function greet(){
    console.log("helow bhaiji");
}

function meet(callback){
    console.log("namaste");
    callback();
}

meet(greet);