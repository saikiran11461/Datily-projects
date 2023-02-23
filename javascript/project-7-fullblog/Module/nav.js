const navbar = ()=>{

    let isAuth = localStorage.getItem("user");



    return ` <div id="nav">
    <div class="left">
        <img width="40%" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.MZD9nyH84jn1qXNcj0SHZAHaBs%26pid%3DApi&f=1&ipt=b85e8d99df1c5b20a7bdcbe4da4631e374633037915a1345b64cadf6f71dc2b6&ipo=images" alt="">
    </div>
    <div class="right">
         <a href="../Html/Homepage.html"> <button>DashBoard</button> </a>
        ${ !isAuth?'<a href="../Html/loginpage.html"> <button>Login</button> </a>' : `<a><button id="logout" >logout</button> </a>`}
         ${ !isAuth ? '<a href="../Html/registerpage.html"> <button>Register</button> </a>' : ""}
    </div>



</div>`
}



// let logout = function(){
//     localStorage.removeItem("user");
//     window.location.href="../Html/loginpage.html"
// }


export default navbar;