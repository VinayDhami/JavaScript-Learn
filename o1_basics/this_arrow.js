const user = {
    username: "vinay",
    price: 999,
    welcomeuser:function(){
        console.log(`${this.username} this is me`)
        //console.log(this)
    }
}
//user.welcomeuser()
user.username = "dhami"
//user.welcomeuser()
//console.log(this)// its shows empty object

function thistest(){
    let username = "vinay"
    console.log(this.username)
}
//thistest()

 const chai = () => {
    let username = "vinnu"
    console.log(this)
 }

 //const addtwo = (num,num1) => {
 //   return num + num1
 //}
//const addtwo = (num,num1) => num + num1 // it will automatically return valuse its also called implict return
//const addtwo = (num,num1) => (num + num1) // if we use () its also return value but if we use{} we have to write return
const addtwo = (num1,num2) => ({username:"vinay"}) // now we are returning a object 
console.log(addtwo(4,5))
