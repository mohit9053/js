const mysym = Symbol("key1");

const user = {
    name : "mohit",
    last: "prajapat",
    age: 21,
    [mysym]:"mykey1" // symbol ko as a symbol use krne ka treka 

}
// 2 ways to access a value but bracket wala jysda acha hai 
console.log(user.name); 
console.log(user[mysym]);

user.name = "rohit";

console.log(user);
// Object.freeze(user);// stop any furthur change iun user object


user.greeting = function(){
    console.log("hello js user");
}

user.greeting2 = function(){
    console.log(`hello js user ${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());