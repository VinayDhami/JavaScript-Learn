// IIFE immediately invoked Function Expression
// its use because if we want to execute any function immedatiely
// or if we have to remove pollution from global scope

(function chai(){
    console.log("DB Connected")
})();

// using arrow function
( (name) =>{
    console.log("Db connected in")
})('vinay');