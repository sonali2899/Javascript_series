// hoistedVariable=3;
// console.log(hoistedVariable)
// var hoistedVariable;
//output 3 even when the variable is declared after it is initialized	

// hoistedFunction();  
// function hoistedFunction(){ 
//   console.log(" Hello world! ");
// } 
// Outputs " Hello world! " even when the function is declared after calling

//  function hoistedFunction(){
//     x=3;
//     console.log(x);
//     var x;
//  }
//  hoistedFunction();
 //output 3 even when the variable is declared after it is initialized	in the function
 
//  var x;
// console.log(x); 
// x = 23;
// Outputs "undefined" since the initialization of "x" is not hoisted

//Note - To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:

"use strict";
x = 23; 
var x;

