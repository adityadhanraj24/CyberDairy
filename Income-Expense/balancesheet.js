let form = document.getElementById("table");
document.addEventListener("DOMContentLoaded", (e) => {

  let data= JSON.parse(localStorage.getItem("incomeData")) || []
  data.forEach((obj,i) => {
    let li =document.createElement("li")
    li.textContent= "Rs. "+obj.amount
    let list = document.querySelector("#list")
    list.appendChild(li)

    let total =  document.querySelector(".intotal")
 let add= data.reduce((t ,obj) => t + parseInt(obj.amount) , 0)
  total.textContent= "Total Income :" +" Rs." +add
});

  let data2 =JSON.parse(localStorage.getItem("expenseData")) || []
//   console.log(data2)
  data2.forEach((obj ,i ) =>{
  let li = document.createElement("li")
  li.textContent = "Rs. " +obj.amount
  let list = document.querySelector("#list2")
  list.appendChild(li)


  
  let total2 =  document.querySelector(".extotal")
  let add2= data2.reduce((t ,obj) => t + parseInt(obj.amount) , 0)
   total2.textContent= "Total Expense : " +"Rs."+add2
 
  })

//   let total =  document.querySelector(".intotal")
//  let add= data.reduce((t ,obj) => t + parseInt(obj.amount) , 0)
//   total.textContent= "Total Income :" +add

//   let total2 =  document.querySelector(".extotal")
//   let add2= data2.reduce((t ,obj) => t + parseInt(obj.amount) , 0)
//    total2.textContent= "Total Expense : "+add2
 

})