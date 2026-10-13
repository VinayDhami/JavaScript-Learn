// singleton
//Object.create
// for using symbol in objects we do
const mysym = Symbol("key")
// Object literals
const jsuser = {
    name: "Vinay",
    [mysym]:"key", // Symbol declaration
    age: 18,
    location: "Uttarakhand",
    email: "dhamivinay936@gmail,com",
    lastlogindays: ["monday","sunday"]
}
// Two ways for excess object 
console.log(jsuser.email)
console.log(jsuser["email"]) // we use "" because in object the key interperter take as string
console.log(jsuser[mysym])

// we can change values of objects by
jsuser.email = "vinaydhami@"
// also we can do freeze any value from which it cannot changes
//Object.freeze(jsuser)
jsuser.greeting = function(){
    console.log("helo vinay")
}

jsuser.greetingtwo = function(){
    console.log(`Hii this is ${this.name}`)
}

console.log(jsuser.greeting())
console.log(jsuser.greetingtwo())