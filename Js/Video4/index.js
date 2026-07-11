// //converting string to number 
// let a="100";
// let b=Number(a);
// console.log(typeof b);

// let x=20;
// let y="20";
// console.log(x==y);
//it will give true because the x string will get converted to number and x and y have the equal value , so it is true

// let x=222;
// let y="20";
// console.log(x==y);
//this will give false because even though the string y get converted to number but value of x and y is not equal

// let x=20;
// let y="20";
// console.log(x===y);
//the === operator checks equality between same data type , it do not convert string to number 

// let a="20ab";
// let b=Number(a);
// console.log(b);
//will give NaN (not a number) as output because ab cannot be converted to number
//type of NaN is number . console.log(typeof NaN)=number

// let a=10;
// let b=String(a);
// console.log(a==b);
//number to string conversion 

// console.log(Number(null));
// console.log(Number(undefined));

let a=0.1;
// let x=String(a);
let b=0.2;
// let y=String(b);
console.log(a+b);