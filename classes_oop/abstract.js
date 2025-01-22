//1st pillar of oop Absraction
//focus on essential details,hiding complexity

//Example-:
class Car {
    startEngine(){
        this.#fuelSystemCheck();// private method
        console.log('engine started')
    }
    #fuelSystemCheck(){
        console.log('checking fuel system');
    } 
}
const car = new Car()
car.startEngine();