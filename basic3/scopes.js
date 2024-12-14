// var c=300
let a=300
if(true){
    let a=7
    const b=10
    // var c=30
    console.log('inner ',a);
    
}
// console.log(a);
// console.log(b);
console.log(a);
 
function one(){
  const username="sonali"  
  function two() {
    const website = "youtube"
    console.log(username);
    }
  two()
//console.log(website);
  
}
one()
// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}

