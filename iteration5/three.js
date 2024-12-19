// for of

// ["", "", ""]
// [{}, {}, {}]

const arr=[1,2,3,4,5]
 for (const num of arr) {
    console.log(num)
 }

 const greetings="hello lilia"
 for(const greet of greetings){
    console.log(greet)
 }
 const myArray = ['lilia','mumma','humza']
 for (const item of myArray){
    console.log(item);
 }

 const map = new Map();
 map.set('IN','India')
 map.set('USA','United state of america')
 map.set('UK','United kingdom')
 console.log(map)

for(const [key,value] of map){
    console.log(`${key}:${value}`)
}

const services ={
    catering : 70000 ,
    decoration :10000,
    venue : 100000,
    orchestra : 20000
}
for (const [key,value] of Object.entries(services)){
    console.log(key ,':', value);
    
}
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of Object.entries (myObject)) {
    console.log(key, ':-', value);
    
}



