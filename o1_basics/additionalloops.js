// for of 

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num) 
}

// Maps its a object holds key-value pairs and remembers tha original insertion order of the keys.
// It stores unique values not duplicate
// map is not itterable

const map = new Map()
map.set('IN' , 'India')
map.set('USA' , 'United state of america')
console.log(map)

// print using loop
for (const [key, value] of map) {
    console.log(key,value)
}
// for in print key
const myobj = {
    'name': 'vinay',
    'last': 'dhami'
}
for (const key in myobj) {    
    console.log(key , myobj[key])    
}
// for each
 const coading = [1,3,4,5,7,8]
 coading.forEach( function (item){
    console.log(item)
 } )

 
