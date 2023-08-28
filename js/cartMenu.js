let walid = document.querySelector(".carts-product")

let bage = document.querySelector(".badge")


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

icon.addEventListener("click" , openCartMenus)
   

function openCartMenus() {  
   

  
     
        cartsSmall.classList.toggle("active");
    
        
    
}


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