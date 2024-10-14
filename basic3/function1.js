function sayMyName(){
    console.log("hello sonali")
}
sayMyName()
function add(num1,num2){
   console.log (num1+num2)
}
add(1,2)
function sub(num1,num2){
   let result=(num1-num2) 
   return result
 }
const result=sub(10,3)
console.log(result);

function loggedInUser(username='sam'){
   if(!username){
      console.log("please enter username");
      return
   }
   return `${username} just logged in`;
  }
//  const message= loggedInUser('sonali')
//  console.log(message)
 console.log(loggedInUser('sonali'))
 console.log(loggedInUser());
  
 function calculateCartPrice(...num1){
   return num1
 }
console.log( calculateCartPrice(100,200,500,600));

const user={
   username:"sonali",
   price :700
}
function handleObject(anyObject){
console.log(`username is ${anyObject.username},price is ${anyObject.price}`);

}
// handleObject(user)
handleObject({
   username:"sonali",
   price :700
})
const newArray=[200,400,500,100]
function returnSecondValue(getArray){
  return getArray[1]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([200,400,500,100]))




