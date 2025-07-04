const accountId = 1634
let accountEmail = "mayankdahiya84315@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"



//accountId = 2  // not allowed
accountEmail = "ok@gmail.com"
accountPassword = "12"
accountCity = "panipat"
console.log(accountId)
/*
Prefer not to use var, becuase of issue in block scope and functional scope
*/
let accountState;
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])