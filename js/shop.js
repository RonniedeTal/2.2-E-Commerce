
// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];




var total = 0;


// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    const cartFinding= cart.find(product => product.id == id)
        if (cartFinding==undefined){
            const foundProduct = products.find( product => product.id == id )
            cart.push( {...foundProduct, quantity:1} )
           
            }else{
                cartFinding.quantity++
            }    
    // 2. Add found product to the cart array
    // if(cart.includes(undefined)){ //al loro con esto me daba undefined--- parche     
  if(cart.length!==0){
        total++
        document.getElementById("count_product").innerHTML=total
    }
    console.log(cart);//no remover hasta finalizar
}


// Exercise 2
function cleanCart() {
    const cartList = document.getElementById('cart_list');
    cartList.innerHTML=""
    cart.splice(0, cart.length)
    calculateTotal()
    total= document.getElementById("count_product").innerHTML=0
}

// Exercise 3

function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
            let reduce=cart.reduce((acc, actual)=>acc+(actual.id==1?applyPromotionsCart():actual.price)*actual.quantity, 0)
            let totalPrice=document.getElementById("total_price");
             totalPrice.innerHTML=reduce.toFixed(2)
             
       
}


// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    let applyPromo=0
    let promo=cart.find(({id})=>id==1)
    if(promo.id==1&&promo.quantity>=3){
        applyPromo=parseFloat(promo.price-(promo.price*0.20))
        // console.log(applyPromo);
    }else{
        applyPromo=parseFloat(promo.price)
        // console.log(applyPromo);   
    }
    return applyPromo 
}


// Exercise 5

function printCart() {
    calculateTotal()
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById('cart_list');
        cartList.innerHTML=""
        const cartProducts=cart.map((eachProduct) => {
          const cartArr=document.createElement('tr');
          cartArr.innerHTML=`
            <td>${eachProduct.name}</td>
            <td>${eachProduct.price}</td>
             <td>${eachProduct.quantity}<button onclick="removeFromCart(${eachProduct.id})">👎 </button></td>
             <td>${eachProduct.id===1?applyPromotionsCart():eachProduct.price}</td>`;
          return cartArr;
        });
        cartList.append(...cartProducts);
      }
  
      
// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
    const removeProduct= cart.findIndex(product=>product.id==id)
    if(removeProduct!==-1){
        const remove=cart[removeProduct]
        if(remove.quantity>1){
            remove.quantity--
            total--
        }else{
            cart.splice(removeProduct, 1)
            total--
        }
        document.getElementById("count_product").innerHTML = total;
    }
    printCart()
}

function open_modal() {
    // applyPromotionsCart()
    printCart();
}

