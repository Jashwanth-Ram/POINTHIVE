const text = document.querySelector("#text");
const form = document.querySelector("#form");
const summarize = document.querySelector("#submit");
const ul = document.querySelector(".unordered");
var count = 0;
form.addEventListener("submit",(e)=>
{
    e.preventDefault();
    ul.innerHTML = "";
    fun1();
})
function fun1()
{ 
   const arr1 = text.value.split(".");
   for(let i = 0;i<arr1.length;i=i+2)
   {
        if(arr1[i+1])
        {
        const li = document.createElement("li");
        li.innerHTML  = arr1[i] + "."+arr1[i+1] + ".";
        ul.appendChild(li);
        }
  
   }
}




