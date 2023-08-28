let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find((i) => i.id === productId)
console.log(getProduct);
let file = document.getElementById("file");
let nameProduct = document.getElementById("name-product");
let priceProduct = document.getElementById("price-product");
let selectCreate = document.getElementById("product-size");
let create = document.getElementById("Update");
let inputImage = document.getElementById("upload-image")
// let userinfo = document.querySelector("#user-info")
// let user = document.querySelector("#user")
// let links = document.querySelector("#links")
// let logoutButton = document.querySelector(".logout")
// let bage = document.querySelector(".badge")
let productImage;
console.log(productImage);
let productSizeValue;

nameProduct.value = getProduct.name;
priceProduct.value = getProduct.price;
selectCreate.value = getProduct.size;
productImage = getProduct.image;











// let users = localStorage.getItem("usernameAdmin")
// if(users){
//   links.remove()
//     userinfo.style.display = "flex";
//     user.innerHTML = users;
// }

// logoutButton.addEventListener("click" , (eo) => {
//     localStorage.clear()
    


//     setTimeout(() => {
//         window.location = "signup.html"
//     }, 1500);
// })






// events
selectCreate.addEventListener("change" , getSizeValue);
create.addEventListener("click" , updateProductFun)
inputImage.addEventListener("change" , uploadFileImage)


// // functions
function getSizeValue(eo){
productSizeValue = eo.target.value;
console.log(eo.target.value);
}

function updateProductFun(eo){
    eo.preventDefault();
let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;


getProduct.name = nameProduct.value;
getProduct.price = priceProduct.value;
getProduct.size = productSizeValue;
getProduct.image = productImage


localStorage.setItem("products", JSON.stringify(products))

setTimeout(() => {
    window.location = "shop.html"
}, 500);

}
// let preview;




