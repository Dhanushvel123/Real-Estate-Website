let goTopBtn = document.getElementById("goTopBtn");

// Show button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        goTopBtn.style.display = "flex";
    } else {
        goTopBtn.style.display = "none";
    }
};

// Smooth Scroll to Top
goTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
