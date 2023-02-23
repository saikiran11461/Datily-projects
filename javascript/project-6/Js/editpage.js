
let id = localStorage.getItem("editid")



const getData = async(id)=>{
    let res  = await fetch(`http://localhost:8080/posts/${id}`)
    let data = await res.json()
    console.log("data", data)
   
    document.getElementById("title").value = data.title;
    document.getElementById("content").value = data.content
    document.getElementById("author").value = data.author

     document.querySelector("form").addEventListener("submit", function(event){
        event.preventDefault();

        let forobj={
          title:  document.getElementById("title").value ,
          content:   document.getElementById("content").value ,
           author: document.getElementById("author").value ,
        }
        console.log("forobj", forobj)

      replaceData(id, forobj)
    })
    
    
}

getData(id)

const  replaceData=async(id,forobj)=>{
   await fetch(`http://localhost:8080/posts/${id}`,{
       method:"PATCH",
       body:JSON.stringify(forobj),
       headers:{
           'Content-Type':'application/json'
        }
    })
    
 location.href="../Html/homepage.html"

}