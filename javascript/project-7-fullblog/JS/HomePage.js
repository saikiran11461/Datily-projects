import navbar from "../Module/nav.js";

document.getElementById("nav").innerHTML = navbar()

let isAuth = localStorage.getItem("user");

if(!isAuth){
    window.location.href="../Html/loginpage.html"
}



const getData =async()=>{
    let res = await fetch("http://localhost:8080/users");
    let data =await res.json();
    console.log(data);
    appendData(data);
}
getData()


const fetchposts =async()=>{
    let res = await fetch("http://localhost:8080/posts");
    let data =await res.json();
    data = data.filter(post=>{
        return post.userid == isAuth;
    })
    console.log("posts data", data);
    let postContainer = document.getElementById("posts");
    data.length == 0 ? postContainer.innerHTML = "<h1>no post found</h1>" :
    data.map(function(el){
        let h1 = document.createElement("h1");
       let string =  el.title.split("")
       string = string.filter((str)=> str == "a"? "@" : str)
       console.log('string: ', string);
       
    })

    
}
fetchposts()





const appendData = (data)=>{
  let [filteruser] =   data.filter(function(el){
       return el.id == isAuth
    })

    console.log(filteruser)

    
        
        let container = document.getElementById("container");
        let div = document.createElement("div");
        div.setAttribute("id", "innerdiv")
        let leftdiv = document.createElement("div");
        let rightdiv = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", filteruser.avatar);
        let h1 = document.createElement("h1");
        h1.innerHTML = filteruser.username

        leftdiv.append(img)
        rightdiv.append(h1)
        div.append(leftdiv,rightdiv)
        container.append(div)
}