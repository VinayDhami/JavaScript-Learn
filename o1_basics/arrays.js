const myarr = [0,1,2,3,4,5,"vinay"]
console.log(myarr[1])
myarr.push(6)
console.log(myarr)
myarr.push(8)
myarr.pop() // it will automatically delete last value
console.log(myarr)

myarr.unshift(9) // it add value starting of array
console.log(myarr)
myarr.shift() // it will remove first value
console.log(myarr)

console.log(myarr.includes(9)) // answer in boolean value

const newArr = myarr.join() // Changes into string make its type from array to string
console.log(myarr)
console.log(newArr)

console.log(Array.from("Vinay")) // Divide vinay into hitesh
console.log(Array.from({name: "vinay"})) // it cannot directly convert it into array

