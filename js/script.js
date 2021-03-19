$(".nav-item").on("click", function (e) {
    let href = $(this).attr("href");
    let hrefElement = $(href);

    $("html, body").animate(
        {
            scrollTop: hrefElement.offset().top - 80,
        },
        1250,
        "easeInOutExpo"
    );

    e.preventDefault();
});

$(".goTop").on("click", function (e) {
    let href = $(this).attr("href");
    let hrefElement = $(href);

    $("html, body").animate(
        {
            scrollTop: hrefElement.offset().top - 80,
        },
        1250,
        "easeInOutExpo"
    );

    e.preventDefault();
});

let navbar = document.querySelector(".navbarOnScroll");
let goTop = document.querySelector(".goTop");
let navbarClass =
    "navbarOnScroll navbar navbar-expand-lg navbar-light fixed-top";

window.onscroll = windowScroll;

function windowScroll(e) {
    let offset = window.pageYOffset;

    if (offset > 70) {
        navbar.className = navbarClass;
        goTop.className = "goTop btn btn-dark fixed-bottom ml-3 mb-3 rounded-circle shadow";
    } else {
        navbar.className = navbarClass + " d-none";
        goTop.className = "goTop btn btn-dark fixed-bottom ml-3 mb-3 rounded-circle shadow d-none";
    }

    console.log(navbar.className);
}