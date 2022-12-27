import * as qwerty from"./my_module.js"
import * as c from "./module2.js"
var sum = qwerty.findSum(34,234)
var my_cat =new c.Cat('black','Vasil')
var button = document.getElementById('btn')
button.style.width='200px'
button.style.height='90px'
addEventListener('click',()=>{
  let text = document.getElementById("text")
  text.innerHTML=sum
  setTimeout(()=>{
    text.innerHTML=my_cat.name+'---'+my_cat.color
  },1000)
})