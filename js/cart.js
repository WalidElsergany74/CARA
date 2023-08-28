
let userinfo = document.querySelector("#user-info")
let user = document.querySelector("#user")
let links = document.querySelector("#links")
let logoutButton = document.querySelector(".logout")
let sectionDoma = document.querySelector("#cartsa")
let carts = document.getElementById("carts")
  let NoPro = document.getElementById("nopro")
  let table =document.getElementById("table")
let cash = document.getElementById("cash")
let users = localStorage.getItem("username")
let tbody = document.getElementById("tbody")
let mer = document.getElementById("mer")

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



























function drawProductsUI() {
  let products = JSON.parse(localStorage.getItem("productsInCart"))
  if(JSON.parse(localStorage.getItem("productsInCart")).length === 0){
    NoPro.innerHTML = `NO PRODUCTS BUYED !!!`
    table.style.display ="none"
    cash.style.display = "none"
  }
  let ProductsUI = products.map( (item) => {
      return `
      <tbody id="tbody"> 
     <tr class="tbodyi" id="tbodyi">
       <td><img src="${item.image}" alt=""></td>
       <td>${item.name}</td>
       <td><input type="number" name="" id="" value="${item.qua}" min="1" class="input-quantityi"></td>
       <td class="price-a">${item.price} $</td>
       <td><i class="fa-solid fa-trash"  onclick="removeFromCart(${item.id})" id="deleteo"></i></td>
     </tr>
     </tbody>
      `
      
      } )
  table.innerHTML += ProductsUI
 
}
drawProductsUI()












let addedeo = JSON.parse(localStorage.getItem("productsInCart")) ? JSON.parse(localStorage.getItem("productsInCart")) : [] ;



if(addedeo){
   
    addedeo.map((i) => {
    
      
      
        tbodyi.innerHTML = `
        <tbody id="tbody">
        <tr class="tbodyi" id="tbodyi">
          <td><img src="${i.image}" alt=""></td>
          <td>${i.name}}</td>
          <td><input type="number" name="" id="" value="${i.qua}" min="1" class="input-quantityi"></td>
          <td class="price-a">${i.price} $</td>
          <td><i class="fa-solid fa-trash"  onclick="removeFromCart(${i.id})" id="deleteo"></i></td>
        </tr>
        </tbody>
    `
    const updateProducts= () => {

        let allProductsInProductsCartSmall = document.querySelectorAll(".tbodyi");
        let total = 0;
        allProductsInProductsCartSmall.forEach(ele => {
            let price =Number(ele.getElementsByClassName("price-a")[0].innerText.replace("$" , ""));
            let quantity = Number(ele.getElementsByClassName("input-quantityi")[0].value);
            total = total + (price * quantity)
            
        });
    
        totalPricea.innerText = `${total} $`
        console.log(totalPricea);
    }
    updateProducts()
  
       
    })
    

    }
































 
function removeFromCart(id) {
    let productsInCart = localStorage.getItem("productsInCart")
   
if(productsInCart){
let items = JSON.parse(productsInCart)
let filtered = items.filter((i) => i.id !== id );
localStorage.setItem("productsInCart", JSON.stringify(filtered))




}
if(JSON.parse(localStorage.getItem("productsInCart")).length === 0){
  NoPro.innerHTML = `NO PRODUCTS BUYED`
}

} 






const updateProductsw= () => {

  let allProductsInProductsCartSmall = document.querySelectorAll(".tbodyi");
  let total = 0;
  allProductsInProductsCartSmall.forEach(ele => {
      let price =Number(ele.getElementsByClassName("price-a")[0].innerText.replace("$" , ""));
      let quantity = Number(ele.getElementsByClassName("input-quantityi")[0].value);
      total = total + (price * quantity)
      
  });

  totalPricea.innerText = `${total} $`
  console.log(totalPricea);
}
updateProductsw()

table.addEventListener("click" , (eo) => {
  if(eo.target.classList.contains("fa-solid")){
    eo.target.parentElement.parentElement.parentElement.remove()
    updateProductsw()
  }

    })


table.addEventListener("click" , (eo) => {
 
   
    updateProductsw()
  

    })



table.addEventListener("change" , (eo) => {

    updateProductsw()
  

    })

    




  
  












