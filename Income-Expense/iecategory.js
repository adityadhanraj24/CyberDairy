let btn = document.getElementById("submit");
btn.addEventListener("click", e=>{
    e.preventDefault();
    let iename=document.getElementById("iename").value;
    let iecategory =document.getElementById("iecategory").value;
    

    let categories= JSON.parse(localStorage.getItem(iecategory)) || []
    categories.push(iename)
    localStorage.setItem(iecategory , JSON.stringify(categories))

    ShowCategory();
    resetForm();
})

const ShowCategory = (() =>{
    let incomeCategory= document.getElementById("incomeCategory");
    let expenseCategory= document.getElementById("expenseCategory");
    console.log(incomeCategory)


   incomeCategory.textContent=""
   expenseCategory.textContent=""

   let iiCat = JSON.parse(localStorage.getItem("income"))
   iiCat.map((c) =>{
    let listItem = document.createElement("li")
    let span = document.createElement("span")

    span.classList.add("badge", "text-bg-primary","rounded-pill" )
    span.textContent="Delete"
    span.addEventListener("click",() => {deleteItem("income" , iiCat ,c)})

    listItem.textContent = c
    listItem.appendChild(span)


    listItem.classList.add("list-group-item")
    incomeCategory.appendChild(listItem)

})

let ieCat = JSON.parse(localStorage.getItem("expense"))


ieCat.map((d) =>{
let listItem=document.createElement("li")
let span= document.createElement("span")
span.classList.add("badge","text-bg-primary", "rounded-pill")
span.textContent="Delete"



span.addEventListener("click", () => {deleteItem("expense", ieCat,d )})
listItem.textContent= d
listItem.appendChild(span)


listItem.classList.add("list-group-item")
expenseCategory.appendChild(listItem)
})
})

const resetForm = ()=>{
    iename.value ="";
    iecategory.value ="";
    }



ShowCategory();

   function deleteItem(type , arr ,val){
    let temp= arr.filter( a=> a!=val)
        localStorage.setItem(type , JSON.stringify(temp))
        ShowCategory();
    }