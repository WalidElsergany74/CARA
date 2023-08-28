let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
let fileSign = document.getElementById("file-sighn")




fileSign.addEventListener("change" , uploadFileImage)
let productImage;
function uploadFileImage(){
    let file = this.files[0]
    console.log(file);
    getIMage64(file)
  
  let types = ["image/jpeg", "image/png"]
  
    if(types.indexOf(file.type) == -1){
        alert("Image Not Supported")
        inputImage.value =""
        return;
    }
    if(file.size > 2 * 1024 * 1024){
        alert("Image Not Supported PUT image 2MG")
        return;
    }
  
  
    productImage = URL.createObjectURL(file)
  }
  
  function getIMage64(file){
    let reader = new FileReader()
  
    reader.readAsDataURL(file)
  
    reader.onload = function (){
      productImage = reader.result
    }
  
    reader.onerror = function () {
        alert("Error !!!!")
    }
  }














submit.addEventListener("click" , (eo) => {
    eo.preventDefault()
    if(username.value == "" || email.value === "" || password.value === ""){
        alert("Please Your Data")
    }else {
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)
        localStorage.setItem("image" , productImage )
        localStorage.setItem("products" , JSON.stringify(productsDB));

    }



    if(username.value == "admin" ||  password.value === "123456"){
        localStorage.setItem("usernameAdmin" , username.value)
        localStorage.setItem("passwordAdmin" , password.value)
         
    }else {
        localStorage.setItem("username" , username.value)
        localStorage.setItem("email" , email.value)
        localStorage.setItem("password" , password.value)
    }
      


setTimeout(() => {
    window.location = "signin.html"
}, 1500);


})



// submit.addEventListener("click" , (eo) => {
//     eo.preventDefault()
//     if(username.value == "" || email.value === "" || password.value === ""){
//         alert("Please Your Data")
//     }   else {
//         localStorage.setItem("username" , username.value)
//         localStorage.setItem("email" , email.value)
//         localStorage.setItem("password" , password.value)


    
 


// setTimeout(() => {
//     window.location = "signin.html"
// }, 1500);
//     }

// }
// )




