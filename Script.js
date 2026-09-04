function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {

    // Professional skills
    document.querySelector(".first").style.width = "84%";
    document.querySelector(".second").style.width = "67%";
    document.querySelector(".third").style.width = "56%";
    document.querySelector(".fourth").style.width = "71%";
    document.querySelector(".fifth").style.width = "53%";
    document.querySelector(".sixth").style.width = "60%";
    document.querySelector(".seventh").style.width = "73%";
    document.querySelector(".eighth").style.width = "59%";

    // Other skills
    document.querySelector(".html").style.width = "100%";
    document.querySelector(".css").style.width = "87%";
    document.querySelector(".js").style.width = "39%";
    document.querySelector(".python").style.width = "35%";
    document.querySelector(".figma").style.width = "40%";
    document.querySelector(".illustrator").style.width = "88%";
    document.querySelector(".photoshop").style.width = "82%";
    document.querySelector(".canva").style.width = "69%";
    document.querySelector(".user").style.width = "41%";
    document.querySelector(".wr").style.width = "22%";

    // Experience boxes
    const click = document.querySelectorAll(".click");

    click.forEach(box => {
        box.addEventListener("click", function () {

            click.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });

});


