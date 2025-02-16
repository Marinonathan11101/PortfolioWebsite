const contactButton = document.querySelector("button");
const h2InNav = document.querySelector(".name h2");
const navDivs = document.querySelectorAll(".nav-navigation div h2 a"); 

console.log(navDivs);

contactButton.addEventListener("click", function () {
    alert("Feel free to contact me at marinonathan11101@gmail.com");
});

contactButton.addEventListener("mouseenter", () => {
    contactButton.style.transform = "translateY(-5px)";
    contactButton.style.transition = "transform 0.2s ease-in-out";
    contactButton.style.border = "2px solid white";
});

contactButton.addEventListener("mouseleave", () => {
    contactButton.style.transform = "translateY(0)";
    contactButton.style.border = "2px solid transparent";
});

h2InNav.addEventListener("mouseenter", () => {
    h2InNav.style.color = "#8B0000";
});

h2InNav.addEventListener("mouseout", () => {
    h2InNav.style.color = "white";
});


navDivs.forEach((h2) => {
    h2.addEventListener("mouseenter", () => {  
        h2.style.color = "#8B0000";
    });

    h2.addEventListener("mouseleave", () => {
        h2.style.color = "white";
    });
});