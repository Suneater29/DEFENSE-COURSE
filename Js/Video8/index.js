// const user={
//     name:"Arsalan",
//     age:21,
//     id:"amssre.11748@gmail.com",
//     "home state" : "up"
// }

// user.gender="male"
// delete user.age;


// console.log(user["home state"]);

// console.log(user);
// console.log(user.id);

// console.log(Object.keys(user));

// console.log(Object.values(user));
// console.log(Object.entries(user));

// for(let i in user){
//     console.log(i,user[i]);
// }

//destructuring of object 

// const{name,id}=user;
// console.log(name,id);

// const{name:username,age:userage}=user;
// console.log(username,userage);

// for(let keys of Object.keys(user)){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }


// for(let it of Object.entries(user)){
//     console.log(it);
// }


// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }

const user={
    name:"Arsalan",
    age:21,
    id:"amssre.11748@gmail.com",
    "home state" : "up",
    greet:function(){
        console.log("cash rules everything around me");
    },
    address:{
        city:"saharanpur",
        state:"up"
    }
}

// user.gender="male"

// user.greet();
// console.log(Object.values(user));

console.log(user.address.state);