//console.log(1>2)
//console.log(2>=1)
//console.log(2==2)

// Same data type numbers will compare
//console.log("2abc" > 1)
//console.log("2" > 1)


//console.log(null > 0)//false
//console.log(null == 0)//false
//console.log(null>=0) // true its shows true because the equality == & comparison works differsntly
// Comparsion >= changes null into 0

/// === Strict check both data type and values

// Symbols
const Id = Symbol("123")
console.log(Id)

// Arrays , Objects , Functions
let Array = ["vinay" , "Singh" , "dhami"]

let objects = {
    name:"vinay",
    singh:"dhami",
}

let Myfunction = function(){
    console.log("Hello world")
}
