var offerbar = document.querySelector(".offerbar")

var closebar = document.querySelector(".closebar")
closebar.addEventListener("click", function () {
    offerbar.style.display = "none"

})
var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})
document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})