//sharing methods with prototype
//to avoid creating duplicate methods for every instances,it's better to use prototype.

//Example -:
function person (name,age){
    this.name= name,
    this.age= age
}
person.prototype.greet= function(){
  console.log(`hi i'm ${this.name},i'm ${this.age} year old`)
}
const sonali= new person('sonali',25)
const palash = new person('palash',26)
sonali.greet()
palash.greet()