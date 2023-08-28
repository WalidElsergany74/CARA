// let userinfo = document.querySelector("#user-info")
// let user = document.querySelector("#user")
// let links = document.querySelector("#links")
// let logoutButton = document.querySelector(".logout")

// let prfoImageFromLocal = localStorage.getItem("image")
// let imageHead = document.getElementById("image-head")
// let admin = localStorage.getItem("usernameAdmin")
// let plus = document.getElementById("plus")
// let users = localStorage.getItem("username")
let bage = document.querySelector(".badge")
let sectionDoma = document.querySelector("#cartsa")
let cartsSmall = document.querySelector(".carts-products");
let addButton = document.querySelectorAll(".btn.btn-primary.added")
let walid = document.querySelector(".carts-product")
// let products =  JSON.parse(localStorage.getItem("products")) 
let proS = document.querySelectorAll("#pro-s");



// let icon = document.querySelector("#shop-item")
console.log(addButton);
//  let  addButtonArr =  Array.from(addButton)



// if(admin){
//   myproheader.style.display = "block"

//   plus.style.display = "block"
// }

// if(users){
//   links.remove()
//     userinfo.style.display = "flex";
//     user.innerHTML = users;
//     imageHead.src = prfoImageFromLocal

// if(admin){
 
//   plus.style.display = "block"
// }

// }




// let productsDB = [
//   {
//   id: 1,
//   name: "FACE PRINT TEXTURED SHIRT",
//   image: "img/product/f1.jpg",
//   qua:1,
//   price: 350,
//   size : "Large",
  
// },
// {
//   id: 2,
//   name: "FACE PRINT TEXTURED SHIRT",
//   image: "img/product/f2.jpg",
//   price: 74,
//   qua : 1,
//   size : "Medium",
// },
// {
//   id: 3,
//   name: "FACE PRINT TEXTURED SHIRT",
//   image: "img/product/f3.jpg",
//   price: 111,
//   qua : 1,
//   size : "Small",
// },
// {
//   id: 4,
//   name: "EMBROIDERED SHIRT",
//   image: "img/product/f4.jpg",
//   price: 350,
//   qua : 1,
//   size : "XL",
// },
// {
//   id: 5,
//   name: "ABSTRACT PRINT SHIRT",
//   image: "img/product/f5.jpg",
//   price: 150,
//   qua : 1,
//   size : "XXL",
// },
// {
//   id: 6,
//   name: "COTTON - LINEN SHIRT",
//   image: "img/product/f6.jpg",
//   price: 50,
//   qua : 1,
//   size : "Large",
// },
// {
//   id: 7,
//   name: "Cotton Beige Trousers",
//   image: "img/product/f7.jpg",
//   price: 150,
//   qua : 1,
//   size : "Large",
// },
// {
//   id: 8,
//   name: "Cotton Women Blouse",
//   image: "img/product/f8.jpg",
//   price: 135,
//   qua : 1,
//   size : "Medium",
// },
//   {
//       id: 9,
//       name: "FACE PRINT TEXTURED SHIRT",
//       image: "img/product/n1.jpg",
//       price: 350,
//       qua : 1,
//       size : "Small",
//   },
//   {
//       id: 10,
//       name: "FACE PRINT TEXTURED SHIRT",
//       image: "img/product/n2.jpg",
//       price: 74,
//       qua : 1,
//       size : "Large",
//   },
//   {
//       id: 11,
//       name: "STRIPED TEXTURED SHIRT",
//       image: "img/product/n3.jpg",
//       price: 111,
//       qua : 1,
//       size : "XL",
//   },
//   {
//       id: 12,
//       name: "EMBROIDERED SHIRT",
//       image: "img/product/n4.jpg",
//       price: 350,
//       qua : 1,
//       size : "XXL",
//   },
//   {
//       id: 13,
//       name: "ABSTRACT PRINT SHIRT",
//       image: "img/product/n5.jpg",
//       price: 150,
//       qua : 1,
//       size : "Small",
//   },
//   {
//       id: 14,
//       name: "COTTON - LINEN SHIRT",
//       image: "img/product/n6.jpg",
//       price: 50,
//       qua : 1,
//       size : "Medium",
//   },
//   {
//       id: 15,
//       name: "Cotton Bige Blouse",
//       image: "img/product/n7 (1).jpg",
//       price: 300,
//       qua : 1,
//       size : "Small",
//   },
//   {
//       id: 16,
//       name: "Cotton Women Blouse",
//       image: "img/product/n8.jpg",
//       price: 135,
//       qua : 1,
//       size : "Large",
//   },
// ]
// localStorage.setItem("products" , JSON.stringify(productsDB))
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
let products = productsDB;

// localStorage.setItem("products" , JSON.stringify(productsDB))



















  

// logoutButton.addEventListener("click" , (eo) => {
//     localStorage.clear()
    


//     setTimeout(() => {
//         window.location = "signup.html"
//     }, 1500);
// })




// let productsDB = [
//   {
//   id: 1,
//   name: "FACE PRINT TEXTURED SHIRT",
//   image: "img/product/f1.jpg",
//   qua:1,
//   price: 350,
//   size : "Large",
  
// },
// {
//   id: 2,
//   name: "FACE PRINT TEXTURED SHIRT",
//   image: "img/product/f2.jpg",
//   price: 74,
//   qua : 1,
//   size : "Medium",
// },
// {
//   id: 3,
//   name: "FACE PRINT TEXTURED SHIRT",
//   image: "img/product/f3.jpg",
//   price: 111,
//   qua : 1,
//   size : "Small",
// },
// {
//   id: 4,
//   name: "EMBROIDERED SHIRT",
//   image: "img/product/f4.jpg",
//   price: 350,
//   qua : 1,
//   size : "XL",
// },
// {
//   id: 5,
//   name: "ABSTRACT PRINT SHIRT",
//   image: "img/product/f5.jpg",
//   price: 150,
//   qua : 1,
//   size : "XXL",
// },
// {
//   id: 6,
//   name: "COTTON - LINEN SHIRT",
//   image: "img/product/f6.jpg",
//   price: 50,
//   qua : 1,
//   size : "Large",
// },
// {
//   id: 7,
//   name: "Cotton Beige Trousers",
//   image: "img/product/f7.jpg",
//   price: 150,
//   qua : 1,
//   size : "Large",
// },
// {
//   id: 8,
//   name: "Cotton Women Blouse",
//   image: "img/product/f8.jpg",
//   price: 135,
//   qua : 1,
//   size : "Medium",
// },
//   {
//       id: 9,
//       name: "FACE PRINT TEXTURED SHIRT",
//       image: "img/product/n1.jpg",
//       price: 350,
//       qua : 1,
//       size : "Small",
//   },
//   {
//       id: 10,
//       name: "FACE PRINT TEXTURED SHIRT",
//       image: "img/product/n2.jpg",
//       price: 74,
//       qua : 1,
//       size : "Large",
//   },
//   {
//       id: 11,
//       name: "STRIPED TEXTURED SHIRT",
//       image: "img/product/n3.jpg",
//       price: 111,
//       qua : 1,
//       size : "XL",
//   },
//   {
//       id: 12,
//       name: "EMBROIDERED SHIRT",
//       image: "img/product/n4.jpg",
//       price: 350,
//       qua : 1,
//       size : "XXL",
//   },
//   {
//       id: 13,
//       name: "ABSTRACT PRINT SHIRT",
//       image: "img/product/n5.jpg",
//       price: 150,
//       qua : 1,
//       size : "Small",
//   },
//   {
//       id: 14,
//       name: "COTTON - LINEN SHIRT",
//       image: "img/product/n6.jpg",
//       price: 50,
//       qua : 1,
//       size : "Medium",
//   },
//   {
//       id: 15,
//       name: "Cotton Bige Blouse",
//       image: "img/product/n7 (1).jpg",
//       price: 300,
//       qua : 1,
//       size : "Small",
//   },
//   {
//       id: 16,
//       name: "Cotton Women Blouse",
//       image: "img/product/n8.jpg",
//       price: 135,
//       qua : 1,
//       size : "Large",
//   },
// ]
// localStorage.setItem("products" , JSON.stringify(productsDB))














let drawProductsUI;
  drawProductsUI =   function drawProductsUI(products = []) {
    let ProductsUIa = products.map( (item) => {
        return `
        <div class="cards col-sm-6 col-md-4 col-lg-3" style="border: ${item.isMe === `Y` ? `2px solid green` : ""}"  >
        <img src="${item.image}" class="card-img" alt="">
        <div class="card-body">
          <span>Adidas</span>
          <h5 class="card-title text-decoration-underline "    onclick = "savedData(${item.id})" >${item.name}</h5 >
          <div class="stars">
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star" ></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <p class="mt-2 text-start fw-bold fs-6"> Size : ${item.size}</p>
          ${item.isMe === "Y" ?` <button class="btn btn-secondary  fw-bold" id="edit-product" onclick ="editProduct(${item.id})">Edit Product</button>` : ""}
          <div class="price ">
          <p class="p-price">$ ${item.price} </p>
          <button href="#" class="btn btn-primary added" onclick="addCart(${item.id})"  id="addcart" >Buy</button>
          </div>
          
        </div>
      </div>
        `
        
       
    } )
    sectionDoma.innerHTML = ProductsUIa
    
  }

drawProductsUI(JSON.parse(localStorage.getItem("products")) || products)
 
// let cards = document.querySelectorAll("#cards");

// cards.forEach(ele => {
//     ele.addEventListener("click" , (eo) => {
//         window.location = "productsdetails.html"
//     })  
// });

function savedData(id) {
    localStorage.setItem("productsId" , id);
    window.location = "productsdetails.html"
}





let added =  localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []

if(added){
   
    added.map((item) => {
    
        bage.innerText = added.length
      
        walid.innerHTML += `
        <div class="len" id=""pro-s>
        <div class="pro-s" >
        <div class="image-s">
          <img src="${item.image}" alt="">
          <p calss="product-name">${item.name}</p>
          
        </div>
        <div class="quantity-s">
          <input type="number" name="" id="qua" value="${item.qua}" min="1" class="input-quantity">
          <p>Quantity</p>
        </div>
        <div class="price-s">$${item.price}</div>
        <div class="icon-s">
          <i class="fa-solid fa-trash"  onclick="removeFromCarts(${item.id})" id="deleteo"></i>
        </div>
       </div>

       </div>
        
        
    `
    const updateProductsb = () => {

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
    updateProductsb()
  
       
    })
 
}
  console.log(added);
function addCart(id){
  if(localStorage.getItem("username")){
     let products = JSON.parse(localStorage.getItem("products")) || productsDB;
      let product = products.find((item)=> item.id === id )

      let Isproduct = added.some((i) => i.id === product.id)

      if(Isproduct){
         added = added.map((p) =>{
          if(p.id === product.id) p.qua += 1;
          return p;
        })
      //  chosen.qua += 1
      }else{ 
       
        added.push(product)
      }





      

      walid.innerHTML = ""
   
  
added.forEach(ele => {
walid.innerHTML += `
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
    //  added = [...added, product  ]
      
     localStorage.setItem("productsInCart", JSON.stringify(added))    
// let uniqueProducts = getquaArr(added , "id")

   
      // walid.innerHTML += `
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


  // bage.innerHTML = len.length
 
  

// bage.innerHTML = proS.length
  // bage.innerText++
  bage.innerText = added.length
      updateProducts()
    }else {
        window.location = "signin.html"
    }

}










// let allItems = []
// function addCart(id){
//     if(localStorage.getItem("username")){
//         let chosen = products.find((item)=> item.id === id )

//         let items = added.find((i) => i.id === chosen.id)

//         if(items){
//          chosen.qua += 1
//         }else{ 
         
//           added.push(chosen)
//         }

//  walid.innerHTML =""



        

      
     
    
// added.forEach(ele => {
//   walid.innerHTML += `
//             <div class="len" id=""pro-s>
//             <div class="pro-s" >
//             <div class="image-s">
//               <img src="${ele.image}" alt="">
//               <p calss="product-name">${ele.name}</p>
              
//             </div>
//             <div class="quantity-s" id="quan">
//               <input type="number" name="" id="qua" value="${ele.qua}" min="1" class="input-quantity">
//               <p>Quantity</p>
//             </div>
//             <div class="price-s">$${ele.price}</div>
//             <div class="icon-s">
//               <i class="fa-solid fa-trash" onclick="removeFromCarts(${ele.id})" id="deleteo"></i>
//             </div>
//            </div>

//            </div>
            
            
        
//         ` 
// });
       
        
        
// let uniqueProducts = getquaArr(added , "id")
// added = [...added, chosen  ]
//         localStorage.setItem("productsInCart", JSON.stringify(uniqueProducts))
//         // walid.innerHTML += `
//         //     <div class="len">
//         //     <div class="pro-s">
//         //     <div class="image-s">
//         //       <img src="${chosen.image}" alt="">
//         //       <p calss="product-name">${chosen.name}</p>
              
//         //     </div>
//         //     <div class="quantity-s" id="quan">
//         //       <input type="number" name="" id="qua" value="${chosen.qua}" min="1" class="input-quantity">
//         //       <p>Quantity</p>
//         //     </div>
//         //     <div class="price-s">$${chosen.price}</div>
//         //     <div class="icon-s">
//         //       <i class="fa-solid fa-trash" onclick="removeFromCarts(${chosen.id})" id="deleteo"></i>
//         //     </div>
//         //    </div>
            
//         //     </div>
            
        
//         // `


//     // bage.innerHTML = len.length
   
    

//   // bage.innerHTML = proS.length
//     bage.innerText++
    
//         updateProducts()
//       }else {
//           window.location = "signin.html"
//       }

// }



// function getquaArr(arr , filtertype){
// let unique = arr
// .map((item) => item[filtertype])
// .map((item,i,final) => final.indexOf(item) === i && i)
// .filter((item) => arr[item]).map((item) => arr[item])
// return unique
// }

cartsSmall.addEventListener("change" , (eo) => {
    updateProducts()
})

const updateProducts = () => {

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

let addcart = document.querySelectorAll("#addcart")

// addcart.forEach(item => {
//     item.addEventListener("click" , (eo) => {
//         item.classList.add("disabled");
//  item.classList.add("btn-success")
//  item.innerHTML = "&#x2714; Done"
//     })
// });
      

        

    
cartsSmall.addEventListener("click" , (eo) => {
    if(eo.target.classList.contains("fa-trash")){
       eo.target.parentElement.parentElement.parentElement.remove();
        updateProducts();
        let len = document.querySelectorAll(".len")
        bage.innerText--
        // bage.innerHTML = ""
        // bage.innerText = added.length
     


}

    }
   );

  
icon.addEventListener("click" , openCartMenus)
   

function openCartMenus() {  
   

  
     
        cartsSmall.classList.toggle("active");
    
        
    
}



      
        

    

function removeFromCarts(id) {
    let productsInCart = localStorage.getItem("productsInCart")
// (productsInCart)
if(productsInCart){
  let items = JSON.parse(productsInCart)
  let filtered = items.filter((i) => i.id !== id );
  localStorage.setItem("productsInCart", JSON.stringify(filtered))

  
  
  
  
  }

//     let items = JSON.parse(productsInCart)
// let filtered = items.filter((i) => i.id !== id );
// localStorage.setItem("productsInCart", JSON.stringify(filtered))

// drawProductsUI(filtered)

// bage.innerText--




}


// search function

let input = document.getElementById("search")
input.addEventListener("keyup" , (eo) => {
  
      search(eo.target.value , JSON.parse(localStorage.getItem("products")))

      if(eo.target.value.trim() === ""){
        drawProductsUI(JSON.parse(localStorage.getItem("products")))
      } 
  
})

function search(name , myArray) {
  let arr = myArray.filter((item) => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
  console.log(arr);
  drawProductsUI(arr)
}


// filter by size 

let select = document.getElementById("size-filter")
console.log(select);


select.addEventListener("change" , getFilter)

function getFilter(e){
let val = e.target.value;
console.log(val);

let products = JSON.parse(localStorage.getItem("products")) || productsDB;

if(val === "All"){
 
  drawProductsUI(products)
}else {
  
 let fill = products.filter((i) => i.size === val)
  console.log(products.filter((i) => i.size === val));
  drawProductsUI(fill)
}

}


function editProduct(id) {
  localStorage.setItem("editProduct", id)
  window.location = "editproduct.html"
}
    
            




















