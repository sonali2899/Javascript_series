//2nd pillar of encapsulation 
//Bundling data(properties) and behaviour(method) together and restricting direct access.

//Example -:

class BankAccount{
    #balance = 0; //private field 
    deposit(amount){
        if (amount>0){
            this.#balance= this.#balance + amount;
        } 
    }
    getBalance(){
        return this.#balance 
    }
}
const account = new BankAccount();
account.deposit(100)
console.log(account.getBalance());

 