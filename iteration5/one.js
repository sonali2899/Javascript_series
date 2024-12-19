//for loop
for(let i=0; i<=10; i++){
    if (i==5) {
        // console.log('5 is the best number')
    }
    // console.log(i)
}
// console.log(i);
for (let i = 0; i <=20; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <=20; j++) {
    //   console.log(`inner loop ${j},outer loop ${i}`);
      }
}
let myArray=['lilia','humza','mummy']
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }
// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}