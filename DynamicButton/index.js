    let colorArray = ["red", "green", "white", "blue", "yellow", "orange" ]
    const container = document.getElementById("button-container")
    let btn = document.querySelector(".btn")
    const body = document.querySelector(".body")

    colorArray.forEach(function(btn) {
        // console.log(btn)
        let newbtn= document.createElement("button")
        // newbtn.classList.add("button-css")
        newbtn.style.backgroundColor = btn ;
        newbtn.textContent= btn;

        newbtn.addEventListener("click",() =>{
            body.style.backgroundColor = btn 
        })
        container.appendChild(newbtn)
    })