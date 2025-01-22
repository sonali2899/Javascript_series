// classes - Introduced in  Es6,they simplify oop,they are syntactic sugar over the prototypical based inheritance
class Person {
    constructor(name){
        this.name= name
    }
    greet(){
        console.log(`hi,i'm ${this.name}`);
        }
}
const sonali = new Person('sonali') // new instance created 
sonali.greet()