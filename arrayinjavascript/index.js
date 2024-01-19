const arr = [1,2,3,4,5];
// resizable array and can be mixed type
// makes shallow copy like reference copy hota hai #non-primitive

const a = new Array(1,2,3,4,5);
console.log(typeof a);
console.log(typeof arr);

a.unshift(9)
console.log(a);

// unshift ne sabhi values ko shift kiya hai 


// slice - just like a substring, splice - isme original array bhi manipulate ho jaege like

const myarr = a.splice(1,3);
// console.log("A",a);
// console.log(myarr);

const a1 = [1,2,3,4];
const a2 = [6,7,8,9];
// a1.push(a2); // add a2 array as a new data in a1 
// console.log(a1);
const n1 = a1.concat(a2); // actually add all element  of a1 in a1
console.log(n1);

const na = [...a1,...a2]; // spread operation
console.log(na);

const temp = [1,2,[3,4,5,[6,7,8]],9];
console.log(temp.flat(Infinity)); // poora array flat ho jata hai isme 

//  make array from any
console.log(Array.from("Hello")); 