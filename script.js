// Back To Top Button

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =============================
// MOBILE MENU
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });

        const menuLinks = document.querySelectorAll(".navbar a");

        menuLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("active");
            });
        });

    }

});