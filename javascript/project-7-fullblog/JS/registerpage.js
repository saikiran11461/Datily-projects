import navbar from "../Module/nav.js";

document.getElementById("nav").innerHTML = navbar()



document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let registerobj={
        username:document.getElementById("username").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        avatar:document.getElementById("avatar").value
    }

    addusers(registerobj)


})

const addusers=async(data)=>{
    let res = await fetch("http://localhost:8080/users",{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-Type": "application/json"
        }
    })
}