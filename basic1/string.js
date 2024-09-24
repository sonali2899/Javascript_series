const name = "sonali"
const repoCount = 5
const str = `my name is ${name} and my repo count is ${repoCount}`
console.log(str)
 const Str1 = new String('sonali')
 console.log(Str1.indexOf('i'))
 console.log(Str1.split(''))
 console.log(Str1.charCodeAt('2'))//it provide code of the character
 console.log(Str1.charAt('2'))// it returns character which is present at that position
 console.log(Str1.at('2'))//it returns character which is present at that position
 console.log(Str1[2])// it returns character which is present at that position
  const str2 =Str1.slice(2,4)
  console.log(str2);
  const str3 ="sonali,palash,shubhi,shilpi"
  console.log(str3.slice(7,13))
  console.log(str3.substring(7,13))
const text1= " hello "
const text2="world"
const text3 = "5"
console.log(text1.concat(" ",text2 ))
console.log(text1.includes("l",4))
console.log(text1.trim())
console.log(text1)
console.log(text1.trimEnd())
console.log(text3.padStart(10, '0'));
const para ="my name is sonali"
console.log(para.replace("sonali","palash"));
console.log(para.repeat(2))
