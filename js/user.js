let userinfoa = document.querySelector("#user-info")
let usera = document.querySelector("#user")
let linksa = document.querySelector("#links")
let logoutButtona = document.querySelector(".logout")
let admin = localStorage.getItem("usernameAdmin")
let prfoImageFromLocala = localStorage.getItem("image")
let imageHead = document.getElementById("image-head")
let  myproheader = document.getElementById("myproheader")
      let passAdmin = localStorage.getItem("passwordAdmin")
     
    
let usersa = localStorage.getItem("username")
if(usersa){
  linksa.remove()
    userinfoa.style.display = "flex";
    usera.innerHTML = usersa;
    imageHead.src = prfoImageFromLocala
    

if(admin){
    
  plus.style.display = "block"
  myproheader.style.display = "block"

}else {
    myproheader.style.display = "none"
}

}
logoutButtona.addEventListener("click" , (eo) => {
    localStorage.clear()
    


    setTimeout(() => {
        window.location = "signup.html"
    }, 1500);
})




