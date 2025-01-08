const randomColor = () => {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

console.log(randomColor());
let intervalid;
const startChangingColor=()=>{
  document.body.style.backgroundColor=randomColor()
}
const startchangebg=()=>{
intervalid =  setInterval(startChangingColor,1000)

}
const stopChangingColor=()=>{
  clearInterval(intervalid)
}
document.querySelector('#start').addEventListener('click',startchangebg)
document.querySelector('#stop').addEventListener('click',stopChangingColor)