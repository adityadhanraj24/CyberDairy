let form = document.querySelector("#incomeForm");
document.addEventListener("DOMContentLoaded", (e) => {
  LoadInputByLocalStorage();

  let submit = document.getElementById("btn");
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    let iename = document.getElementById("incomename").value;
    let iecategory = document.getElementById("incomecategory").value;
    let ieamount = document.getElementById("incomeamount").value;
    // console.table([iename , ieamount , iecategory])
    let incomeData = JSON.parse(localStorage.getItem("incomeData")) || [];
    incomeData.push({
      name: iename,
      category: iecategory,
      amount: ieamount,
    });
    localStorage.setItem("incomeData", JSON.stringify(incomeData));
    //
    // form.reset();
    let li = document.createElement("li");
    li.textContent = iename + " " + iecategory + "  " + ieamount;
    document.querySelector("#outcome").appendChild(li);
    form.reset();

  });


  function LoadInputByLocalStorage() {
    let incomeCategory = JSON.parse(localStorage.getItem("income")) ?? [];
    incomeCategory.forEach((element) => {
      let option = document.createElement("option");
      option.value = element;
      option.textContent = element;
      document.querySelector("select").append(option);
    });


    let data = JSON.parse(localStorage.getItem("incomeData")) || [];
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
