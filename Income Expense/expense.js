let form = document.querySelector("#expenseForm");
document.addEventListener("DOMContentLoaded", (e) => {
  LoadInputByLocalStorage();
      let submit = document.getElementById("btn")
    submit.addEventListener("click", (e) =>{
        e.preventDefault();
        const dataExpense = document.getElementById("expensename").value;
        const ieaCat = document.getElementById("expensecategory").value ;
        const enamount = document.getElementById("expenseamount").value ;
        
        
        let expenseData = JSON.parse(localStorage.getItem("expenseData")) || [] ;
        expenseData.push(
        {
          name: dataExpense,
          category: ieaCat,
          amount: enamount
         })
    localStorage.setItem("expenseData" , JSON.stringify(expenseData));
    // console.log(expenseData)

    let li = document.createElement("li")
    li.textContent = dataExpense + " " + ieaCat + " " + enamount + " "
    document.querySelector("#outcome").appendChild(li)
    form.reset();
    
    });
    function LoadInputByLocalStorage() {
        let expensecategory = JSON.parse(localStorage.getItem("expense")) ?? [];
        expensecategory.forEach((element) => {
          let option = document.createElement("option");
          option.value = element;
          option.textContent = element;
          document.querySelector("select").append(option);
        });



        let data = JSON.parse(localStorage.getItem("expenseData")) || [];
        data.forEach((element) => {
      // console.log(element.name)
          let li = document.createElement("li");
          li.textContent =
        element.name + " " + element.category + "  " + element.amount;

      document.querySelector("#outcome").appendChild(li);
    //   console.log(document.querySelector("#outcome"));
    });
  
  }
  const resetForm = () => {};

    });
