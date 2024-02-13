function addnumber(num1,num2){ // num1 and num2 are funciton parameters
    return (num1+num2);
}

const res = addnumber(2,99); // arguments are passed
console.log(res);

function calPrice(...num1){ // we call it res operator we can also call it spread depends upon use case
    return num1;
}
console.log(calPrice(8,7,5,6));

const user={
    name:"mohit",
    age:18
}

function handleobject(object){
    console.log(`username is ${object.name}`);
}

handleobject(user);