
let file = document.getElementById("file");
let nameProduct = document.getElementById("name-product");
let priceProduct = document.getElementById("price-product");
let selectCreate = document.getElementById("product-size");
let create = document.getElementById("Create");
let inputImage = document.getElementById("upload-image")






// localStorage.getItem("products")











let productImage;
let productSizeValue;
// events
selectCreate.addEventListener("change" , getSizeValue);
create.addEventListener("click" , createProductFun)
inputImage.addEventListener("change" , uploadFileImage)


// functions
function getSizeValue(eo){
productSizeValue = eo.target.value;
console.log(eo.target.value);
}

function createProductFun(eo){
    eo.preventDefault();
let allProducts = JSON.parse(localStorage.getItem("products")) || productsDB;
console.log(allProducts);
nameValue = nameProduct.value;
priceValue = priceProduct.value;

if(nameValue && priceValue){
    let obj ={
        id : allProducts ? allProducts.length + 1 : 1,
        qua : 1 ,
        image : productImage,
        name : nameValue,
        price : priceValue,
        size : productSizeValue,
        isMe : "Y"
    }
    
    let newProduct = allProducts ?   [...allProducts , obj] :    [obj] ;
    console.log(newProduct);
    localStorage.setItem("products", JSON.stringify(newProduct))

}else {
    alert("Enter Data")
}

nameProduct.value = ""
priceProduct.value = ""
selectCreate.value = ""

setTimeout(() => {
    window.location = "shop.html"
}, 500);

}
let preview;
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