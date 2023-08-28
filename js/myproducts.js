let products = JSON.parse(localStorage.getItem("products")) || productsDB;
// let userinfo = document.querySelector("#user-info")
// let user = document.querySelector("#user")
// let links = document.querySelector("#links")
// let logoutButton = document.querySelector(".logout")
let sectionDoma = document.querySelector("#cartsa")
// let users = localStorage.getItem("username")
// if(users){
//   links.remove()
//     userinfo.style.display = "flex";
//     user.innerHTML = users;
    

//     }

//     logoutButton.addEventListener("click" , (eo) => {
//         localStorage.clear()
        
    
    
//         setTimeout(() => {
//             window.location = "signup.html"
//         }, 1500);
//     })


   


    let drawProductsUIi;
  drawProductsUIi =   function drawProductsUIi(products = []) {
    let myProducts = products.filter((item) => item.isMe === "Y")
    if(myProducts){

    

    
    let ProductsUIai = myProducts.map( (item) => {
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
          
          ${item.isMe === "Y" ?` <button class="btn btn-secondary  fw-bold" id="delete-product" onclick ="deleteProduct(${item.id})">Delete Product</button>` : ""}

          </div>

         
        </div>
      </div>
        `
        
       
    } )
    sectionDoma.innerHTML = ProductsUIai;

    }
    
  }
  drawProductsUIi(JSON.parse(localStorage.getItem("products")) || productsDB) 


  function editProduct(id) {
    localStorage.setItem("editProduct", id)
    window.location = "editproduct.html"
  }


  function deleteProduct(id){
    let products  = JSON.parse(localStorage.getItem("products")) || productsDB;
    let myProducts = products.filter((item) => item.isMe ===  "Y");
    let filter = myProducts.filter((item) => item.id !== id);
    let clicked = products.find((item) => item.id === id);
    products = products.filter((item) => item.id !== clicked.id)
    drawProductsUIi(filter);
    localStorage.setItem("products" , JSON.stringify(products))
    }