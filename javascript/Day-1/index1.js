
let menu_icon = document.getElementById("menu_icon");

menu_icon.addEventListener("click", ()=>{
    let links = document.querySelector(".nav_links");
    let result = links.classList.contains("active");
    console.log(result);
    if(result){
        links.classList.remove("active");
    }
    else{
        links.classList.add("active");
    }
})


{/* <span class="material-symbols-outlined">
do_not_disturb_on
</span> */}