let menu = document.getElementById("menu_icon");

menu.addEventListener("click", ()=>{
    let change_icon = document.getElementById("menu_icon");
    let nav_links = document.getElementById("nav_links");
    let option = nav_links.classList.contains("active")
   // console.log(option)
    if(option){
        nav_links.classList.remove("active");
    }
    else{
        nav_links.classList.add("active");
        change_icon.classList.add("material-symbols-outlined")
    }
})

{/* <span class="material-symbols-outlined">
close
</span> */}