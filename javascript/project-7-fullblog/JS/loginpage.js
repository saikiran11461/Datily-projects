import navbar from "../Module/nav.js";

document.getElementById("nav").innerHTML = navbar()


let isAuth = localStorage.getItem("user");

if(isAuth){
    window.location.href="../Html/Homepage.html"
}

const getData = async()=>{
    let res = await fetch("http://localhost:8080/users");
    let data = await res.json();
    return data; 
}




document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let inputmail = document.getElementById("email").value;
    let inputpassword  = document.getElementById("password").value;
    getData().then(function(data){
        for(var i=0; i<data.length; i++){
            if(inputmail == data[i].email && inputpassword == data[i].password){
                localStorage.setItem("user", data[i].id);
                window.location.href="../Html/Homepage.html"
                return alert("success")
            }
        }
        if(!inputmail || !inputpassword){
          return  alert("please fill the inputs")
        }
        else{
            return alert("user not exsit")
        }
    })  
})




