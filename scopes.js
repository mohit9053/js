let a = 10;
const b = 20;
var c = 30;

// {}// this is called scope

function one(){
    const name = "mohit";
    function two(){
        const last = "prajapat";
        console.log(name);
    }
    // console.log(last);
    two();
}
one();


// arrow function
// this only works in ojects not in funcitons


// Immediately invoked function expression 
// used to save function from poluted from global variables

(
    function chai(){
        console.log(`db connected`);
    }
)(); //iife me semi-colan lgana chaiye kyoki kha end ho rha hai wo default nhi hai 
