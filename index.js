
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
var sliderleftbtn = document.getElementById("sliderleftbtn")
var slidernextbtn = document.querySelector(".slidernextbtn")
var sliderimage_img = document.querySelector("sliderimage_img")
var imageslider = document.querySelector(".imageslider")
var slidermargin = 0

var click = 0
sliderleftbtn.addEventListener("click", function () {



    if (slidermargin == 0) {
        imageslider.style.transition = "3s";
        slidermargin = 100
        imageslider.style.marginLeft = "-" + slidermargin + "vw";
    }
    else {
        click++
        if (click < 2) {
            imageslider.style.transition = "3s";
            slidermargin = slidermargin - 100
            imageslider.style.marginLeft = "-" + slidermargin + "vw";
        }
        else {
            click = 0
        }
    }



})
slidernextbtn.addEventListener("click", function () {


    slidermargin = slidermargin + 100

    if (slidermargin > 200) {
        imageslider.style.transition = "3s";
        slidermargin = 0
        imageslider.style.marginLeft = 0;
    }
    else {
        click++

        if (click < 2) {
            imageslider.style.marginLeft = "-" + slidermargin + "vw";
            imageslider.style.transition = "3s";
        }
        else {
            click = 0
        }
    }
})

var like = document.querySelectorAll(".like")

like.forEach((btn) => {
    btn.addEventListener("click", function (e) {


        if (e.target.src.indexOf("blackheart") > 0) {
            console.log("jkjk");
           
            e.target.src = "image/icon/icon-5.png"
        }
        else {
            e.target.src = "image/like.png"
            e.target.addEventListener("click",function(
                
            ){
                 e.target.src = "image/icon/icon-5.png"
            })
         
        }
    })

})
