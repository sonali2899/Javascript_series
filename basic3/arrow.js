const user= {
    username :"sonali",
    price :999,
    welcomeMessage : function(){
        console.log(`${this.username},welcome to the website`)
        console.log(this)
    }
}
user.welcomeMessage()
console.log(this)
user.username='sonu'
user.welcomeMessage()

// function chai(){
//     let username="sonali"
//     console.log(this.username)
// }
//  chai()
// const chai= function(){
//     let username="sonali"
//     console.log(this.username)
// }
// chai()
const chai=()=>{
    let username="sonali"
   console.log(this)
}
chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))
// const addTwo=(num1,num2)=>num1+num2
// console.log(addTwo(3,7))
// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(3,7))
const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
const myArray=[2,3,5,6]
myArray.forEach()