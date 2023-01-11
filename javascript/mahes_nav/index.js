let menu = document.querySelector(".menuIcon");

menu.addEventListener("click", () => {
    let links = document.querySelector(".navLinks");
    let result = links.classList.contains("active")
    console.log(result);
    if (result) {
         links.classList.remove("active");
} else {
         links.classList.add("active");
    }
});


