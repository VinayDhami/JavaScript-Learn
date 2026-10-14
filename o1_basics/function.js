//function myname(){
  //  console.log("vinay")
//}
//myname() // reference

//function addtwonumber(num1,num2){
//    console.log(num1+num2)
//}
//addtwonumber(4,7)

function addtwonumbers(num1,num2){
    return num1+num2
}
const result = addtwonumbers(3,5)

function calculatecartprice(...num1){// ... rest operator & spread operator it take infinity amount of arguments and it add values into array
          return num1
}
console.log(calculatecartprice(200,300,400))

const user = {
  name:"vinay",
  lastname:"dhami"
}

function handleObject(anyobject){
  console.log(`Hii this is vinay ${anyobject.name} and my last name is ${anyobject.lastname}`)
}

handleObject(user)// object will pass here

const myarray = [100 , 200 , 300]

function handlearray(getarray){
  return getarray[1]
}
console.log(handlearray(myarray))