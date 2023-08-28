// get data from local storage 

let username = localStorage.getItem("username")
let email = localStorage.getItem("email")
let prfoImageFromLocal = localStorage.getItem("image")
// let products = JSON.parse(localStorage.getItem("products")) ||productsDB;
//   let myProducts = products.filter((i) => i.isMe === "Y")

let profileImage = document.getElementById("imageprof")
// variables 

let user =  document.getElementById("user-Name")
let userc =  document.getElementById("user-Namea")
let emailUser = document.getElementById("user-email")


user.innerHTML = username;
emailUser.innerHTML = email;
// productsLength.innerHTML = myProducts.length 
profileImage.src = prfoImageFromLocal
userc.innerHTML = username










// let productImage;
let inputProf = document.getElementById("file-profile")
console.log(inputProf);

inputProf.addEventListener("change" , uploadFileImage)


inputProf.onchange = function (){
  profileImage.src = productImage
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












