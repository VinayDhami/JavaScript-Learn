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


// const tinderuser = new Object() its a singleton
const tinderuser = {}
tinderuser.id = "123"
tinderuser.name = "Dhami"
tinderuser.isloggedin = false

console.log(tinderuser)

// Object inside object
const insideobject = {
    email: "vinay@",
    fullname : {
        username: {
            firstname:"vinau",
            last:"dhami"
        }
    }
}
console.log(insideobject.fullname?.username.firstname) // ? is used because if we fetch any data from api ? insicates if the value is there than print. it allows more protection.

// Merging Objects
const obj1 = {1:"a"}
const obj2 = {2:"e"}
//const obj3 = Object.assign({}, obj1 , obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3)

