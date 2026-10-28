 // map & filter
 // In filter we do comparsion
const mynumber = [1,2,3,4,5,6,7,8]
// there is 2 ways for return a value if we use {} than we have to write return or id we don't use {} than no need of return it will automatically do it
//const newnums = mynumber.map( () => num + 10) 
//const newnums = mynumber.map( () => {return num+10}) 
// Now use chaining map
const newnums = mynumber
                .map( (num) => num*10)
                .map( (num) => num + 1) // here the values comes after calculation of 1st map
                .filter ( (num) => num >= 10)

console.log(newnums)                

// reduce
// in acc = accumulator the final sum goes after each time loop runs
const array = [1,2,3]

//const mytotal = array.reduce( function (acc, currval) {
//    return acc + currval
//}, 0) // 0  is a value for accumulator

const mytotal = array.reduce( (acc,current) => {
    return acc + current
},0)

console.log(mytotal)