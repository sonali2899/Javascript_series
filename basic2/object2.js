const user=new Object()
console.log(user)
const myUser={}
console.log(myUser)
myUser.name="sonali"
myUser.email="sonali@google.com"
myUser.isLoggedIn=false
console.log(myUser)
const user1={
    name:{
        userfullname:{
            firstname:"sonali",
            lastname:"parihar"
        }
    }
}
console.log(user1.name.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
 const obj3=Object.assign({},obj1,obj2)
 console.log(obj3);
 const obj4={...obj1,...obj2}
 console.log(obj4);
 console.log(myUser)
 console.log(Object.keys(myUser))
 console.log(Object.values(myUser))
 console.log(Object.entries(myUser))
 console.log(myUser.hasOwnProperty("isLogged"))
 const users=[
    {
    name:"sonali"
    },
    {
     name:"monali"
    },
    {
     name:"donali"
    }
]
console.log(users[1].name)
const course={
    courseName :"JS series",
    price:2000,
    courseInstructor:"sonali"
}
const{courseInstructor:mam}=course
console.log(mam)

 

