import navbar from "../Modules/index.js";

document.getElementById("navbar").innerHTML=navbar()

document.getElementById("sign-in").onclick = function(){
    window.location.href="../Html/Registerpage.html"
}

document.getElementById("log-in").onclick = function(){
    window.location.href="../Html/Loginpage.html"
}
document.getElementById("logo").onclick = function(){
    window.location.href="../Html/Homepage.html";
}

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    let formObj={
        name,
        email,
        password,
    }

    addData(formObj)
})


const addData =async (data)=>{
    let  res = await fetch('http://localhost:8080/users',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
   
}