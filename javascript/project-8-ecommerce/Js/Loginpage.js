import navbar from "../Modules/index.js";

document.getElementById("navbar").innerHTML=navbar()

document.getElementById("sign-in").onclick = function(){
    window.location.href="../Html/Registerpage.html"
}

document.getElementById("log-in").onclick = function(){
    window.location.href="../Html/Loginpage.html"
}
document.getElementById("logo").onclick = function(){
    window.location.href="../Html/Homepage.html"
}

let loginbtn = document.getElementById("log-in")

let isAuth = localStorage.getItem("users");



const getusers = async()=>{
    let res = await fetch("http://localhost:8080/users")
    let data = res.json()
    return data
}


document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let inputemail = document.getElementById("email").value
    let inputpassword = document.getElementById("password").value

    getusers().then(function(users){
        console.log(users)
        for(let i=0;i<users.length;i++){
            if(inputemail==users[i].email && inputpassword==users[i].password)  {
                window.location.href ="../Html/Homepage.html";
                localStorage.setItem("user",JSON.stringify(users[i].id));
                return  alert("success")
            }
        }
        return alert("faliure")
    })
    
})








