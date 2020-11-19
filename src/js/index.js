window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {

        header.classList.remove("header");
        header.classList.add("sticky");
    } else {
        header.classList.add("header");
        header.classList.remove("sticky");

    }
}
