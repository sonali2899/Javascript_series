//singleton
// Object.create

//object literals
const sym=Symbol("key1")
const user={
    name:"sonali",
    email:"sonalipariharsrist@gmail.com",
    password:123,
    [sym]:"mykey1",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
    }
    console.log(user.email);
    console.log(user["email"]);
    console.log(user[sym]);
    user.email="monali@google.com"
    // Object.freeze(user)
    user.email="monali@microsoft.com"
    console.log(user)
    user.greeting= function () {
        console.log("hello sonali")
    }
    console.log(user.greeting())
    console.log(user.greeting)
    user.greetingTwo= function () {
        console.log(`hello user ${this.name}`)
    }
    console.log(user.greetingTwo())

    
    