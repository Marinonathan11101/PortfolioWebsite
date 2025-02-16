
const nathanImage = document.querySelector(".AboutImage img");
const navDivs = document.querySelectorAll(".nav-navigation div h2 a"); 
nathanImage.addEventListener("mouseover", function () {
    this.style.border = "2px solid white"; 
});

nathanImage.addEventListener("mouseout", function () {
    this.style.border = "2px solid transparent"; 
});


navDivs.forEach((h2) => {
    h2.addEventListener("mouseenter", () => {  
        h2.style.color = "#8B0000";
    });

    h2.addEventListener("mouseleave", () => {
        h2.style.color = "white";
    });
});