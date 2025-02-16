const projectDivs = document.querySelectorAll(".projects > div");
const navDivs = document.querySelectorAll(".nav-navigation div h2 a"); 
console.log(projectDivs);

projectDivs.forEach((div, index) => {
 
    div.addEventListener("mouseenter", () => {
        div.style.transform = "scale(1.05)";
        div.style.transition = "transform 0.2s ease-in-out";
    });

    div.addEventListener("mouseleave", () => {
        div.style.transform = "scale(1)";
    });

});


navDivs.forEach((h2) => {
    h2.addEventListener("mouseenter", () => {  
        h2.style.color = "#8B0000";
    });

    h2.addEventListener("mouseleave", () => {
        h2.style.color = "white";
    });
});