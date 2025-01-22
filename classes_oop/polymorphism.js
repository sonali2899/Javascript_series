//method overriding / run time polymorphism
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
class Cat extends Animal{
    makeSound(){
        console.log('meow!');
    }
}
const dog = new Dog()
const cat = new Cat()
dog.makeSound()
cat.makeSound()