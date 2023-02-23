import navbar from "../Modules/index.js";

 let isAuth = localStorage.getItem('user')
document.getElementById("navbar").innerHTML=navbar()

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





document.getElementById("logo").onclick = function(){
    window.location.href="../Html/Homepage.html"
}

const fetchData = async()=>{
    let res   = await fetch('http://localhost:8080/products');
    let data = await res.json();
    console.log(data);
    appendData(data)
}

fetchData()


const appendData = (data)=>{
    data.map(function(el){
        let container = document.getElementById("container");
        let div = document.createElement('div');
        div.onclick=function(){
            localStorage.setItem("prodId", el.id);
            window.location.href="../Html/Singlepage.html"
        }
        div.setAttribute("id", "inner-div");
        let img  = document.createElement('img');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h1 = document.createElement('h1');
        img.src = el.product_image        ;
        h2.innerText = el.product_name;
        h3.innerText = el.product_desc;
        h1.innerText = el.product_price;
        
        div.append(img,h2,h3,h1);
        container.append(div)
    })
}