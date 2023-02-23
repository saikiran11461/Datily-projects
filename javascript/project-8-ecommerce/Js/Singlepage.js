import navbar from "../Modules/index.js";

 let isAuth = localStorage.getItem('user')
document.getElementById("navbar").innerHTML=navbar()

document.getElementById("logo").onclick = function(){
    window.location.href="../Html/Homepage.html"
}

if(!isAuth){
    document.getElementById("sign-in").onclick = function(){
        window.location.href="../Html/Registerpage.html"
    }

document.getElementById("log-in").onclick = function(){
    window.location.href="../Html/Loginpage.html"
}
window.location.href="../Html/Loginpage.html"
}
else{
document.getElementById("logout").addEventListener("click", function(){
    localStorage.clear()
    window.location.href="../html/Loginpage.html"
})

}

let id = localStorage.getItem("prodId");

let cartproducts = JSON.parse(localStorage.getItem("prod-data")) || [];
console.log(id)
const singlefetch=async(id)=>{
    let res =await fetch(`http://localhost:8080/products/${id}`);
    let data = await res.json();
   // console.log(data);
    singlData(data)
}
singlefetch(id)

const singlData = (data) =>{
  //  console.log( "before",data);
    let container = document.getElementById("container");
   let div = document.createElement('div');
   div.setAttribute("id", "inner-div")
   let left_div = document.createElement('div');
   let right_div = document.createElement('div');
   let btn1 = document.createElement('button');
   btn1.innerText = 'add to cart';
   btn1.onclick = function(){
       addtocart(data)
   }
   let btn2 = document.createElement('button');
   btn2.innerText = 'Go to cart';
   btn2.onclick = function(){
    window.location.href = "../Html/CartPage.html"
   }
   let img = document.createElement('img');
    let p1 = document.createElement('p');
    p1.innerHTML = data.product_name
    let p2 = document.createElement('p');
    p2.innerHTML = data.product_price
    let p3 = document.createElement('p');
    p3.innerHTML = data.product_desc;
    img.src = data.product_image
    left_div.append(img);

    right_div.append(p1,p2,p3,btn1, btn2)

    div.append(left_div,right_div);
    container.append(div);
    
}


const addtocart = (data) => {
    console.log("addeddata", data);
    console.log("clicked the data")
    fetch('http://localhost:8080/cart',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    })

    alert("product added to cart successfully")
}
