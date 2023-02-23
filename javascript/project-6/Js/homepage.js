let tbody = document.querySelector("tbody")

const  getData = async() =>{
    let res = await fetch("http://localhost:8080/posts");
    let data = await res.json();
    console.log(data);
    addData(data);
}

getData()


const addData = (data) =>{
    tbody.innerHTML = ""
  data.map(function(el){
        let td1= document.createElement("td");
        let td2= document.createElement("td");
        let td3= document.createElement("td");
        let td4= document.createElement("td");
        let td5= document.createElement("td");
        let td6= document.createElement("td");
        let td7 = document.createElement("td");
        let tr = document.createElement("tr");
        let view = document.createElement("button");
        view.innerText= "view";
        view.onclick = function(){
            contentView(el.id)
            location.href="../Html/viewpage.html"
        }
        let Edit = document.createElement("button");
        Edit.innerText = "Edit";
        Edit.onclick = function(){
            editPage(el.id)
        }
        let crate  = document.createElement("button");
        crate.innerText="create";
        crate.onclick = function(){
            window.location.href="../Html/createPage.html"
        }
        let dele = document.createElement("button");
        dele.innerText = "delete";
        // deleteItem(el.id)
        dele.onclick =  function(){
            deleteItem(el.id)
            getData()
        }

         td1.textContent = el.title;
         td2.textContent = el.author;
         td3.textContent = el.content;
         td4.append(view)
         td5.append(crate)
         td6.append(dele)
         td7.append(Edit)

         tr.append(td1,td2,td4,td7,td5,td6);
        tbody.append(tr)
  })
}

function deleteItem(id){
    let res = fetch(`http://localhost:8080/posts/${id}`,{
        method:"DELETE",
    })
    
}


const contentView =(id)=>{
    localStorage.setItem("id", JSON.stringify(id))
}


const editPage=(id)=>{
    window.location.href = "../Html/editpage.html";
    localStorage.setItem("editid", id)
}