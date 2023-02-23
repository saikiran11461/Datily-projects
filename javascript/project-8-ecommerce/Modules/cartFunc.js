const getcartlength =async()=>{
    let res = await  fetch("http://localhost:8080/cart");
    let data =await res.json();
    let cart = document.getElementById("cart-value");
    cart.innerHTML = data.length
  }


 getcartlength()
  