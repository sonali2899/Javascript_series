const promiseOne = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log('async task is complete') 
       resolve()
    },1000)
})
promiseOne.then(()=>{
    console.log('promise consumed ')

})
 //Do an async task
// DB calls, cryptography, network

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
     console.log('async task 3 ')
     resolve({username:"sonali",password:"123"})
    },1000)
})

promiseThree.then((user)=>{
 console.log(user)
})

const promiseFour = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    let error = true
    if(!error){
     resolve({username:"sonali",password:"123"})
    }
    else{
    reject('something went wrong')
    }

},1000)
})
promiseFour.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error);
    
})
.finally(()=>{
    console.log('the promise is either resolve or rejected');
    
})
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if(!error){
         resolve({username:"palash",password:"123"})
        }
        else{
        reject('something went wrong')
        }
    
    },1000)
})
const consumePromiseFive=async()=>{
    try {
       const response = await promiseFive 
       console.log(response)
    } catch (error) {
       console.log(error) 
    }
}
consumePromiseFive();
 
// const getAllUsers= async()=>{
//     try {
//        const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//        const data=  await response.json()
//        console.log(data)
//     } catch (error) {
//         console.log(error);
        
//     }
//  }
//  getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users') 
.then((response)=>{
   return response.json()
})
.then((data)=>{
    console.log(data)
})