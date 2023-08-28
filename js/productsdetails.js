let productsDB = [
    {
    id: 1,
    name: "FACE PRINT TEXTURED SHIRT",
    image: "img/product/f1.jpg",
    qua:1,
    price: 350,
    size : "Large",
    isMe : "N"
    
},
{
    id: 2,
    name: "FACE PRINT TEXTURED SHIRT",
    image: "img/product/f2.jpg",
    price: 74,
    qua : 1,
    size : "Medium",
    isMe : "N"
},
{
    id: 3,
    name: "FACE PRINT TEXTURED SHIRT",
    image: "img/product/f3.jpg",
    price: 111,
    qua : 1,
    size : "Small",
    isMe : "N"
},
{
    id: 4,
    name: "EMBROIDERED SHIRT",
    image: "img/product/f4.jpg",
    price: 350,
    qua : 1,
    size : "XL",
    isMe : "N"
},
{
    id: 5,
    name: "ABSTRACT PRINT SHIRT",
    image: "img/product/f5.jpg",
    price: 150,
    qua : 1,
    size : "XXL",
    isMe : "N"
},
{
    id: 6,
    name: "COTTON - LINEN SHIRT",
    image: "img/product/f6.jpg",
    price: 50,
    qua : 1,
    size : "Large",
      isMe : "N"
},
{
    id: 7,
    name: "Cotton Beige Trousers",
    image: "img/product/f7.jpg",
    price: 150,
    qua : 1,
    size : "Large",
      isMe : "N"
},
{
    id: 8,
    name: "Cotton Women Blouse",
    image: "img/product/f8.jpg",
    price: 135,
    qua : 1,
    size : "Medium",
      isMe : "N"
},
    {
        id: 9,
        name: "FACE PRINT TEXTURED SHIRT",
        image: "img/product/n1.jpg",
        price: 350,
        qua : 1,
        size : "Small",
          isMe : "N"
    },
    {
        id: 10,
        name: "FACE PRINT TEXTURED SHIRT",
        image: "img/product/n2.jpg",
        price: 74,
        qua : 1,
        size : "Large",
          isMe : "N"
    },
    {
        id: 11,
        name: "STRIPED TEXTURED SHIRT",
        image: "img/product/n3.jpg",
        price: 111,
        qua : 1,
        size : "XL",
          isMe : "N"
    },
    {
        id: 12,
        name: "EMBROIDERED SHIRT",
        image: "img/product/n4.jpg",
        price: 350,
        qua : 1,
        size : "XXL",
          isMe : "N"
    },
    {
        id: 13,
        name: "ABSTRACT PRINT SHIRT",
        image: "img/product/n5.jpg",
        price: 150,
        qua : 1,
        size : "Small",
          isMe : "N"
    },
    {
        id: 14,
        name: "COTTON - LINEN SHIRT",
        image: "img/product/n6.jpg",
        price: 50,
        qua : 1,
        size : "Medium",
          isMe : "N"
    },
    {
        id: 15,
        name: "Cotton Bige Blouse",
        image: "img/product/n7 (1).jpg",
        price: 300,
        qua : 1,
        size : "Small",
          isMe : "N"
    },
    {
        id: 16,
        name: "Cotton Women Blouse",
        image: "img/product/n8.jpg",
        price: 135,
        qua : 1,
        size : "Large",
          isMe : "N"
    },
  ]
 





























let productsD = JSON.parse(localStorage.getItem("products"))

 
let productsId = JSON.parse(localStorage.getItem("productsId"))
let row = document.getElementById("row")
let detailsImage  = document.getElementById("details-image")
let singleImageProducts = document.getElementById("single-image-products")
let walida = document.querySelector(".carts-product")
let bagea = document.querySelector(".badge")
let cartsSmalla = document.querySelector(".carts-products");


const updateProductslol = () => {

    let allProductsInProductsCartSmall = document.querySelectorAll(".pro-s");
    let total = 0;
    allProductsInProductsCartSmall.forEach(item => {
        let price =Number(item.getElementsByClassName("price-s")[0].innerText.replace("$" , ""));
        let quantity = Number(item.getElementsByClassName("input-quantity")[0].value);
        total = total + (price * quantity)
        
    });

    totalPrice.innerText = `${total} $`
    console.log(totalPrice);
}

icon.addEventListener("click" , openCartMenus)
   

function openCartMenus() {  
        cartsSmalla.classList.toggle("active"); 
}





























// let products = JSON.parse(localStorage.getItem("products"))

let productsDetails = productsD.find((item) => item.id === productsId)
console.log(productsDetails);



row.innerHTML = `
<div class="col-lg-6 details-image" id="details-image">
<div class="single-pro-image">
   <img src="${productsDetails.image}" width="100%" alt="" id="MainImage"  width="100%">
   <div class="small-img-group">
    <div class="small-img-col">
        <img src="${productsDetails.image}" alt="" class="small-img" width="100%">
    </div>
    <div class="small-img-col">
        <img src="img/product/f3.jpg" alt="" class="small-img" width="100%">
    </div>
    <div class="small-img-col">
        <img src="img/product/f4.jpg" alt="" class="small-img" width="100%">
    </div>
    <div class="small-img-col">
        <img src="img/product/f5.jpg" alt="" class="small-img" width="100%">
    </div>
   </div>
</div> 
</div>
<div class="col-lg-6 single-image-product" id="single-image-product"> 
 <h4 class="fw-bold name">Name :  ${productsDetails.name}</h4>
<h4 class="fw-bold priceo" > Price : ${productsDetails.price} $</h4>
<select name="" id="select">
<option value="" hidden>Select Size</option>
<option value="">Small</option>
<option value="">Medium</option>
<option value="">Large</option>
<option value="">XL</option>
<option value="">XXL</option>
</select>
<input type="number" name="" id="qua" value="${productsDetails.qua}" min="1">
<button class=""       onclick="addCart(${productsDetails.id})" >Add To Cart</button>
<h4 class="pro-d">Products Details</h4>
<span>
Lorem ipsum dolor sit amet consectetur adipisicing elit. In architecto recusandae minima ea magnam quibusdam,
est quod consequatur pariatur laborum eaque iste mollitia nostrum amet
exercitationem dolore necessitatibus nesciunt beatae.
</span> 
</div>  
</div>




`

// show small image in big image 

let MainImage = document.getElementById("MainImage");
let SmallImage = document.getElementsByClassName("small-img");
console.log(MainImage);
console.log(SmallImage);

SmallImage[0].onclick = function () {
    MainImage.src = SmallImage[0].src
}
SmallImage[1].onclick = function () {
    MainImage.src = SmallImage[1].src
}
SmallImage[2].onclick = function () {
    MainImage.src = SmallImage[2].src
}
SmallImage[3].onclick = function () {
    MainImage.src = SmallImage[3].src
}


let addede = JSON.parse(localStorage.getItem("productsInCart")) ? JSON.parse(localStorage.getItem("productsInCart")) : [] ;



if(addede){
   
    addede.map((item) => {
    
        bagea.innerText = addede.length
      
        walida.innerHTML += `
        <div class="len">
        <div class="pro-s">
        <div class="image-s">
          <img src="${item.image}" alt="">
          <p calss="product-name">${item.name}</p>
          
        </div>
        <div class="quantity-s">
          <input type="number" name="" id="" value="${item.qua}" min="1" class="input-quantity">
          <p>Quantity</p>
        </div>
        <div class="price-s">$${item.price}</div>
        <div class="icon-s">
        <i class="fa-solid fa-trash  " onclick="removeFromCarts(${item.id})" id="deleteo"></i>
        </div>
       </div>
        
        </div>
    `
    const updateProductsc= () => {

        let allProductsInProductsCartSmall = document.querySelectorAll(".pro-s");
        let total = 0;
        allProductsInProductsCartSmall.forEach(ele => {
            let price =Number(ele.getElementsByClassName("price-s")[0].innerText.replace("$" , ""));
            let quantity = Number(ele.getElementsByClassName("input-quantity")[0].value);
            total = total + (price * quantity)
            
        });
    
        totalPrice.innerText = `${total} $`
        console.log(totalPrice);
    }
    updateProductsc()
  
       
    })
    

    }



// let allItemsa = []
function addCart(id){
    if(localStorage.getItem("username")){
        let product = productsD.find((item)=> item.id === id )
  
        let Isproduct = addede.some((i) => i.id === product.id)
  
        if(Isproduct){
           addede = addede.map((p) =>{
            if(p.id === product.id) p.qua += 1;
            return p;
          })
        //  chosen.qua += 1
        }else{ 
         
          addede.push(product)
        }
  
  
  
  
  
        
  
        walida.innerHTML = ""
     
    
  addede.forEach(ele => {
  walida.innerHTML += `
            <div class="len" id=""pro-s>
            <div class="pro-s" >
            <div class="image-s">
              <img src="${ele.image}" alt="">
              <p calss="product-name">${ele.name}</p>
              
            </div>
            <div class="quantity-s" id="quan">
              <input type="number" name="" id="qua" value="${ele.qua}" min="1" class="input-quantity">
              <p>Quantity</p>
            </div>
            <div class="price-s">$${ele.price}</div>
            <div class="icon-s">
              <i class="fa-solid fa-trash" onclick="removeFromCarts(${ele.id})" id="deleteo"></i>
            </div>
           </div>
  
           </div>
            
            
        
        ` 
  });
       
        
       localStorage.setItem("productsInCart", JSON.stringify(addede))    
  // let uniqueProducts = getquaArr(added , "id")
  // added = [...added, chosen  ]
     
        // walidaa.innerHTML += `
        //     <div class="len">
        //     <div class="pro-s">
        //     <div class="image-s">
        //       <img src="${chosen.image}" alt="">
        //       <p calss="product-name">${chosen.name}</p>
              
        //     </div>
        //     <div class="quantity-s" id="quan">
        //       <input type="number" name="" id="qua" value="${chosen.qua}" min="1" class="input-quantity">
        //       <p>Quantity</p>
        //     </div>
        //     <div class="price-s">$${chosen.price}</div>
        //     <div class="icon-s">
        //       <i class="fa-solid fa-trash" onclick="removeFromCarts(${chosen.id})" id="deleteo"></i>
        //     </div>
        //    </div>
            
        //     </div>
            
        
        // `
  
  
    // bagea.innerHTML = len.length
   
    
  
  // bagea.innerHTML = proS.length
    // bagea.innerText++
    bagea.innerHTML = addede.length
    
        updateProductslol()
      }else {
          window.location = "signin.html"
      }
  
  }


// function getquaArr(arr , filtertype){
//     let unique = arr
//     .map((item) => item[filtertype])
//     .map((item,i,final) => final.indexOf(item) === i && i)
//     .filter((item) => arr[item]).map((item) => arr[item])
//     return unique
//     }











cartsSmalla.addEventListener("change" , (eo) => {
    updateProductsc()
})



icon.addEventListener("click" , openCartMenus)
   

function openCartMenus() {  
   

  
     
        cartsSmalla.classList.toggle("active");
    
        
    
}



const updateProductsc = () => {

    let allProductsInProductsCartSmall = document.querySelectorAll(".pro-s");
    let total = 0;
    allProductsInProductsCartSmall.forEach(item => {
        let price =Number(item.getElementsByClassName("price-s")[0].innerText.replace("$" , ""));
        let quantity = Number(item.getElementsByClassName("input-quantity")[0].value);
        total = total + (price * quantity)
        
    });

    totalPrice.innerText = `${total} $`
    console.log(totalPrice);
}











   function removeFromCarts(id) {
    let productsInCart = localStorage.getItem("productsInCart")
   console.log(productsInCart);
if(productsInCart){
    let item = JSON.parse(productsInCart)
   
let filtereds = item.filter((i) => i.id !== id );
localStorage.setItem("productsInCart", JSON.stringify(filtereds))







}







}









cartsSmalla.addEventListener("click" , (eo) => {
    JSON.parse(localStorage.getItem("productsInCart"))
    // let bagea = document.querySelector(".badge")
    if(eo.target.classList.contains("fa-trash")){
       
     let filo =   eo.target.parentElement.parentElement.parentElement.remove();
        updateProductsc();
        let len = document.querySelectorAll(".len")
        // bagea.innerText--
        // bagea.innerHTML = addede.length

        
     


}

    }
   );



   cartsSmalla.addEventListener("click" , (eo) => {
    if(eo.target.classList.contains("fa-trash")){
       eo.target.parentElement.parentElement.parentElement.remove();
        updateProductslol();
        let len = document.querySelectorAll(".len")
        bagea.innerText--
        // bagea.innerHTML = addede.length


}

    }
   );



