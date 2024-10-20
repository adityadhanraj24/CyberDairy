const colorArray = ["red", "green", "blue", "black", "pink", "yellow", "orange","white","indigo","violet","gold","maroon","brown"]
const container = document.querySelector("#button-container")
let btn = document.querySelector(".btn")
const body = document.querySelector("body")
colorArray.forEach(function (btn) {
    let newbtn = document.createElement("button")
    newbtn.classList.add("button-css");
    newbtn.style.backgroundColor = btn
    newbtn.textContent = btn;

     setInterval( () =>{
        body.style.backgroundColor = btn
     })
    // newbtn.addEventListener("mouseover", () => {
    //     body.style.backgroundColor = btn
    // })
    container.appendChild(newbtn)
})

