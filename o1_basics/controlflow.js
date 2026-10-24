// IF
if(true){

} else if(false){

} else{

}
// Compersion operator
// <,><=,>=,==,!=,===,!==,&&,||

// ***** SWITCH
switch (key){
    case value:

    break;

    default: 
    break;
}

const month = 3
switch (month){
    case 1:
        console.log("Hii");
        break;
    case 2:
        console.log("Hii");
        break;    
    case 3:
        console.log("Hii");
        break;
    default:
        console.log("Hii");
}

// ******** Truthy & falsy
// falsy values
//false, 0, -0, BigInt 0n, "", null, undefined, NAN
// truthy values
//true, "0", "false", " ", [], {}, function(){}

// How to check an array or object is empty or not
const array = []
if (array.length === 0){
    console.log("Array is empty")
}

const obj = {}
if (Object.keys(obj).length === 0){
    console.log("Objects is empty")
}

// Nullish Coalescing Operator (??): null undefined
//let val1 = 2 ?? 10 it will return always first always if there was a null or undefined value than it will give second value
//let val1 = Null ?? 10 // output 10
let val1 = null ?? 10 ?? 20 // it will return first value 10


console.log(val1)

// Terniary Operator ? True
//condition ? true : false

const iceteaprice = 100
iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80")