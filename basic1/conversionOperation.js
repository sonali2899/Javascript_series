// let score = "sonali";
// console.log(typeof score) ;
// console.log(typeof(score));
// let valueInNum = Number(score);
// console.log(typeof valueInNum ) ;

// console.log(valueInNum)
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
//  let isLoggedIn ="sonali";
//  let booleanNum = Boolean(isLoggedIn)
//  console.log(booleanNum);
 // 1 => true; 0 => false
// "" => false
// "hitesh" => true
let someNumber = 33;
let stringNumber = String(someNumber)
// console.log( typeof stringNumber );
// console.log( stringNumber);
// **********************Operations************************ //
let value = 3;
let negValue = -value;
// console.log(negValue)

// let str1 = "hello"
// let str2 = " sonali"
// let str3 = str1+str2
// console.log(str3)
// let str1 = "1"+"2"+"2"
// let str2 = 1+2+"2"
//  console.log(str1)
//  console.log(str2)
// let str4 = +true
// let str5 = +""
// console.log(str5);
// let x = 3
// const y = ++x
// console.log(x);
// console.log(y);

//explaination
// This initializes x with the value 3.
// const y = ++x;

// The ++x is a pre-increment operation. It increments the value of x before it is used in the expression.
// After this line, x is incremented from 3 to 4, and then this new value (4) is assigned to y.
// console.log(x);

// The value of x is now 4 because it was incremented by the ++x operation.
// console.log(y);

// The value of y is also 4 because it was assigned the value of x after the pre-increment.
// Corrected Output:
// console.log(x); will output 4.
// console.log(y); will output 4.
// So, both x and y will be 4. The key point is that with the pre-increment operator (++x), x is incremented before its value is assigned to y.
let x = 3
const y = x++
console.log(x);
console.log(y);


// This initializes x with the value 3.
// const y = x++;

// The x++ is a post-increment operation. This means that the value of x is used first in the expression, and then it is incremented.
// In this line:
// y is assigned the current value of x, which is 3.
// After y is assigned, x is incremented by 1, so x becomes 4.
// console.log(x);

// After the increment, the value of x is now 4.
// console.log(y);

// The value of y is 3 because it was assigned the value of x before the increment took place.
// Output:
// console.log(x); will output 4 because x was incremented after y was assigned.
// console.log(y); will output 3 because y was assigned the original value of x before the increment.
// So, the difference between pre-increment (++x) and post-increment (x++) is crucial. In the pre-increment, the value is incremented first and then used, while in the post-increment, the value is used first and then incremented.







