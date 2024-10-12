var path = `M 10 80 Q 500 80 950 80`
var finalpath = `M 10 80 Q 500 80 950 80`
var string = document.querySelector("#string")
string.addEventListener("mousemove", function (dets) {
    path = `M 10 80 Q ${dets.x} ${dets.y} 950 80`
    gsap.to("svg path", {
        attr:{d:path},
        duration: 0.3,
        ease: "power3.inOut"
    })
})
string.addEventListener("mouseleave", function (dets) {
    gsap.to("svg path", {
        attr:{d:finalpath},
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    })
})


