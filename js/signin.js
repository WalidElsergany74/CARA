let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
 
let getUser = localStorage.getItem("username");
let getPassword= localStorage.getItem("password");

let getUserAdmin = localStorage.getItem("username");
let getPasswordAdmin= localStorage.getItem("password");





submit.addEventListener("click" , (eo) => {
    eo.preventDefault()
    if(username.value == "" || password.value === ""){
        alert("Please Your Data")


    } else {


        if(getUser && getUser === username.value && getPassword && getPassword === password.value){
            setTimeout(() => {
                window.location = "index.html"
            }, 1500);
          }




      



    }
      
    
      


    





})



submit.addEventListener("click" , (eo) => {
    eo.preventDefault()
    if(username.value == "" || password.value === ""){
        alert("Please Your Data")
    } else {
        if(getUserAdmin && getUserAdmin === username.value && getPasswordAdmin && getPasswordAdmin === password.value){
            setTimeout(() => {
                window.location = "index.html"
            }, 1500);
          }

    }
      
    
      


    





})