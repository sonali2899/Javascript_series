// Additional Notes on forEach:
// Parameters of the Callback Function:

// The forEach method accepts a callback function with up to three parameters:
// item: The current element in the array.
// index (optional): The index of the current element.
// arr (optional): The array being iterated.
// Use Cases:

// Simple iteration or side effects (e.g., logging, modifying elements).
// For transformation, prefer methods like map() or reduce().
// Limitation:

// You cannot break out of a forEach loop. Use for...of or a for loop if you need early termination.
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )