// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the header
var header = document.getElementById("encabezado");

// Get the offset position of the navbar
var sticky = document.getElementById("encabezado").offsetTop;
console.log(sticky)
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY >= 0) {
        document.getElementById("encabezado").style.position = "fixed"
    } else {
        document.getElementById("encabezado").style.position = "sticky"
    }
}
