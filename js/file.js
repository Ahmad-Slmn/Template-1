const mytexarea = document.getElementById("textarea");

const myspan = document.getElementById("span");

const max_length = mytexarea.getAttribute("maxlength")


mytexarea.oninput = function () {

    myspan.innerHTML = max_length - this.value.length;

    if (myspan.innerHTML == 0) {

        myspan.style.color = "red";

    } else if (myspan.innerHTML <= 150) {
        myspan.style.color = "yellow"
    } else {
        myspan.style.color = ""
    }
}

$(function () {
    // Show Or Hide Menue
    $(".fa-bars").click(function () {

        $(".nav_bar").toggleClass("hidemenu")
    })


    // Click To See What Our Clients Say About Us
    $(".testmo ul li:first-of-type").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".testmo .col1").fadeIn("slow").addClass("slected").siblings().fadeOut("slow").removeClass("slected")
    })


    $(".testmo ul li:nth-of-type(2)").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".testmo .col2").fadeIn("slow").addClass("slected").siblings().fadeOut("slow").removeClass("slected")
    })

    $(".testmo ul li:nth-of-type(3)").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".testmo .col3").fadeIn("slow").addClass("slected").siblings().fadeOut("slow").removeClass("slected")
    })

    $(".testmo ul li:nth-of-type(4)").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".testmo .col4").fadeIn("slow").addClass("slected").siblings().fadeOut("slow").removeClass("slected")
    })

    // Show The Arrow-up If Window scrollY Is >= 2000
    $(window).scroll(function () {

        if (this.scrollY >= 2000) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })
})
