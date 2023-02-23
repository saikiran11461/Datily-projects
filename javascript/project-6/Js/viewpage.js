

let id  = localStorage.getItem('id');
console.log("gettingid", id);

const gettingData = async(id)=>{
    try{
        let res  =await fetch(`http://localhost:8080/posts/${id}`);
        let data =await res.json();
       // console.log("data", data);
        appendData(data);
    }
    catch(err){
        console.log(err)
    }
}

gettingData(id);

function appendData(data){
    console.log("data", data);

    let title = document.getElementById("title");
    let content = document.getElementById("content");
    let author = document.getElementById("author");
    
    title.innerHTML = data.title;
    content.innerHTML = data.content;
    author.innerHTML  = data.author;

}


