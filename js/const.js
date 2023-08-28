
// let userinfo = document.querySelector("#user-info")
// let user = document.querySelector("#user")
// let links = document.querySelector("#links")
// let logoutButton = document.querySelector(".logout")
// let bage = document.querySelector(".badge")
// let walid = document.querySelector(".carts-product")

// let users = localStorage.getItem("username")
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



// let added =  localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []

// if(added){
   
//     added.map((item) => {
    
//         bage.innerText = added.length
      
//         walid.innerHTML += `
//         <div class="len" id=""pro-s>
//         <div class="pro-s" >
//         <div class="image-s">
//           <img src="${item.image}" alt="">
//           <p calss="product-name">${item.name}</p>
          
//         </div>
//         <div class="quantity-s">
//           <input type="number" name="" id="qua" value="${item.qua}" min="1" class="input-quantity">
//           <p>Quantity</p>
//         </div>
//         <div class="price-s">$${item.price}</div>
//         <div class="icon-s">
//           <i class="fa-solid fa-trash"  onclick="removeFromCarts(${item.id})" id="deleteo"></i>
//         </div>
//        </div>

//        </div>
        
        
//     `
//     const updateProductsb = () => {

//         let allProductsInProductsCartSmall = document.querySelectorAll(".pro-s");
//         let total = 0;
//         allProductsInProductsCartSmall.forEach(ele => {
//             let price =Number(ele.getElementsByClassName("price-s")[0].innerText.replace("$" , ""));
//             let quantity = Number(ele.getElementsByClassName("input-quantity")[0].value);
//             total = total + (price * quantity)
            
//         });
    
//         totalPrice.innerText = `${total} $`
//         console.log(totalPrice);
//     }
//     updateProductsb()
  
       
//     })
 
// }

// let admin = localStorage.getItem("usernameAdmin")
// let plus = document.getElementById("plus")
// let proheader = document.getElementById("myproheader")
// console.log(proheader);

// if(admin){
  
//   proheader.style.display = "block"

// plus.style.display = "block"

// }