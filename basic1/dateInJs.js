let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate)
// let myCreatedDate = new Date(2024,0,11,5,3,12)
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("2024-01-23")
// console.log(myCreatedDate.toLocaleString());
// let myTimeStamp= Date.now()
// console.log(Date.now());
// console.log(myCreatedDate.getTime())
// console.log(myCreatedDate.getDay())
console.log(Math.floor(Date.now()/1000))

const newDate= new Date()
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));

