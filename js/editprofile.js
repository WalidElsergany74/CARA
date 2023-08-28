// get data from local storage 

let username = localStorage.getItem("username")
let email = localStorage.getItem("email")
// let products = JSON.parse(localStorage.getItem("products")) || productsDB;
//   let myProducts = products.filter((i) => i.isMe === "Y")
  let inputImageProf = document.getElementById("upload-image-profile")






 



// variables 

let user =  document.getElementById("name-profile")
let emailUser = document.getElementById("email-profile")
let submit = document.getElementById("Update")
 let productImage;
 

user.value = username;
emailUser.value = email;


let profileImage = document.getElementById("imageprof")
// events

submit.addEventListener("click" , editProfilea)
inputImageProf.addEventListener("change" , uploadFileImage)
// function 

 function editProfilea(e) {
e.preventDefault()

localStorage.setItem("username", user.value)
localStorage.setItem("usernameAdmin", user.value)
localStorage.setItem("email", emailUser.value)
localStorage.setItem("image" , productImage)


setTimeout(() => {
    window.location = "profile.html"
}, 500);
}















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