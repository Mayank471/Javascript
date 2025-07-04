let score = "mayank"
console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 false => 0

let isLoggedIn = "mayank"
let booleanNumber = Boolean(isLoggedIn)
console.log(booleanNumber) // true

//"" => false
//"mayank" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber) // "33"
console.log(typeof stringNumber) // string



// **************************** Operations ****************************

let value = 3
let negValue = - value
console.log(negValue) // -3

let str1 = "mayank"
let str2 = " dahiya"
let fullName = str1 + str2
console.log(fullName) // mayank dahiya

console.log("1" + 2) // "12"
console.log(1 + "2") // "12"    
console.log("1" + 2 + 2) // "122"
console.log(1 + 2 + "2") // "32" (addition happens first, then concatenation)

console.log(+"") // 2

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter
console.log(gameCounter) // 101