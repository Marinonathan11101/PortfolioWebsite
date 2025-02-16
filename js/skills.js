const navDivs = document.querySelectorAll(".nav-navigation div h2 a"); 
document.querySelectorAll(".technicalSkills div").forEach(div => {
    div.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
    });

    div.addEventListener("mouseout", function (){
        this.style.transform = "scale(1)";
    })
});


document.querySelectorAll(".skill").forEach(skill => {
    skill.addEventListener("mouseover", function () {
        this.style.color = "#8B0000";
        this.style.transform = "scale(1.1)";
    });
    skill.addEventListener("mouseout", function () {
        this.style.color = "white";
        this.style.transform = "scale(1)";
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