console.log("2">1) // true
console.log("02">1) // true

console.log(null>0) // false
console.log(null>=0) // true null is treated as 0 in comparison
console.log(null==0) // false

console.log(undefined>0) // false
console.log(undefined>=0) // false
console.log(undefined==0) // false

console.log(null==undefined) // true
console.log(null===undefined) // false // null and undefined are equal in value but not in type
