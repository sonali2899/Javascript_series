class Animal {
    makeSound(){
        console.log('generic sound');
    }
}
class Dog extends Animal{
    makeSound(){
        console.log('woof!');
    }
}
const dog = new Dog()
dog.makeSound()