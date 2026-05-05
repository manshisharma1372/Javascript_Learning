const id= Symbol('123')

const anotherId=Symbol('123')

console.log(id===anotherId)

//array

const myName=["mannu","mona","monu"]
console.log(myName)

//obj

let myObj= {name:"manshi", age:20, qualif:"Btech", isSingle:true}
console.log(myObj)

//function

const myFun=function(){
    console.log("My name is mannu")
}

console.log(myFun)
myFun()
console.log(typeof(myFun))

/////////////////////////

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


let user={
    email: "abc@ggg",
    upi:"user@okhdfc"

}
let userTwo=user

userTwo.email="xyz@ggg"
console.log(user)
console.log(userTwo)