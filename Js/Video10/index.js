var a = 10 ;
var b= 20;

function add2num(num1,num2){
    var sum=num1+num2;
    return sum;
}

var sumresult1=add2num(a,b);
var sumresult2=add2num(2,4);
console.log(sumresult1,sumresult2);

//var - undefined
//let or const - <uninitialised> (Temporal Dead Zone)