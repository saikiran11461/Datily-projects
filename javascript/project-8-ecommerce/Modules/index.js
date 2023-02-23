
let isAuth = localStorage.getItem('user');

const navbar = ()=>{
    return `
    <div id="navbar">
        <div class="left">
            <h1 id="logo">SAI KIRAN</h1>
        </div>
        <div class="middle">
            <input type="text" name="" id="">
            <ul>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
            </ul>
        </div>
        <div class="right">
         ${!isAuth? ' <button id="sign-in">Sign up</button><button id="log-in">Log in</button>':"<button id='logout'>log out</button>" }
           <p id="cart-value"></p>
        </div>
    </div>
    `
}

const getcartlength =async()=>{
    let res = await  fetch("http://localhost:8080/cart");
    let data =await res.json();
    var cart = document.getElementById("cart-value");
    cart.onclick=function(){
        window.location.href="../Html/CartPage.html"
    }
   isAuth?  cart.innerHTML = data.length : cart.innerHTML = "0"
  }
getcartlength()

 







export default navbar;


