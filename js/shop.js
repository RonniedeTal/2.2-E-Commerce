
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
    
    const foundProduct = products.find( product => product.id == id )
    // 2. Add found product to the cart array
    cart.push( foundProduct )
    // if(cart.includes(undefined)){
    //     cart.shift()
    // }
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
    let reduce=cart.reduce((acc, actual)=>acc+actual.price, 0)
    let total=document.getElementById("total_price");
    total.innerHTML=reduce
}




// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const cartList = document.getElementById('cart_list');
        cartList.innerHTML=""
        const cartProducts=cart.map((eachProduct) => {
          const cartArr=document.createElement('tr');
          cartArr.innerHTML=`
            <td>${eachProduct.name}</td>
            <td>${eachProduct.price}</td>
            
          `;
          return cartArr;
        });
  
        cartList.append(...cartProducts);
      }
  
      
// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
   
    calculateTotal()
    printCart();
}

