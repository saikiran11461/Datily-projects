
document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    let formObj={
        title:document.getElementById("title").value,
        content:document.getElementById("content").value,
        author:document.getElementById("author").value
    }

    adddata(formObj)
    

});

const adddata=(data)=>{
    let res = fetch('http://localhost:8080/posts',{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    })

    window.location.href="../Html/homepage.html"
}