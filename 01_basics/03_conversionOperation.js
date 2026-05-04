let score = 33

console.log(typeof score)
console.log(typeof(score))

let scoreInString= String(score)
console.log(typeof scoreInString)

let newScore="222rrr"
let valueInNum=Number(newScore)
console.log(valueInNum)
console.log(typeof(valueInNum))

let anotherScore=null
let valueofThis=Number(anotherScore)
console.log(valueofThis)
console.log(typeof(valueofThis))


let checkScore=undefined
let valueOfCheckScore=Number(checkScore)
console.log(valueOfCheckScore)

let flag=true
let convertFlag=Number(flag)
console.log(convertFlag)

let isLoggedIn=1
let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let num='123'
let snum=String(num)
console.log(snum)
console.log(typeof(snum))


//---operations---

let val=3
let negVal=-val
console.log(negVal)

let str1="hello"
let str2="mannu"
let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+2+"2")

let gameCounter=100
gameCounter++
console.log(gameCounter)