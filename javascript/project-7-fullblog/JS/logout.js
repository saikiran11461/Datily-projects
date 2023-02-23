
import navbar from "../Module/nav.js";

document.getElementById("nav").innerHTML = navbar()

let logout = document.getElementById("logout")
console.log(logout)

logout.onclick = function(){
    localStorage.removeItem("user");
    window.location.href="../Html/loginpage.html"
}