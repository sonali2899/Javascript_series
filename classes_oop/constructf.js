//constructor functions
// A constructor function is a way to create multiple objects with the same structure and methods in javascript.It acts as a blueprint for creating objects.

//Example -:
function person(name,age){
 this.name= name,
 this.age= age,
 this.greet= function(){
    console.log(`hi i'm ${this.name},i'm ${this.age} year old`)
 }
}
const sonali = new person('sonali',25)
const palash = new person('palash',26)
sonali.greet()
palash.greet()
