let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")

let getUserAdmin = localStorage.getItem("username");
let getPasswordAdmin= localStorage.getItem("password");

// submit.addEventListener("click" , (eo) => {
//     eo.preventDefault()
//     if(username.value == "" || email.value === "" || password.value === ""){
//         alert("Please Your Data")
//     }else {
//         localStorage.setItem("username" , username.value)
//         localStorage.setItem("email" , email.value)
//         localStorage.setItem("password" , password.value)


//     }


// setTimeout(() => {
//     window.location = "signin.html"
// }, 1500);


// })
submit.addEventListener("click" , (eo) => {
    eo.preventDefault()
    if(username.value == "admin" ||  password.value === "123456"){
        localStorage.setItem("usernameAdmin" , username.value)
        localStorage.setItem("passwordAdmin" , password.value)
    }
      


    setTimeout(() => {
        window.location = "signin.html"
    }, 1500);


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

