const user = new Object();
user.name = "mohit"
user.id = "123jsdfa";
user.isLoggedin = false;

console.log(user);

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

// const obj4 = Object.assign(obj1,obj2,obj3);// obj1 modify ho rha hai 
// const obj5 = Object.assign({},obj1,obj2,obj3); // ek empty object me saare values save ho rhe hai 
// const obj6 = {...obj1, ...obj2} // another method by using spread operator
// console.log(obj5);
// console.log(obj6);


const course = {
    name:"java",
    price:"999",
    tutor:"mohit"
}

const {name:nm,price:cost}=course;
console.log(cost);
