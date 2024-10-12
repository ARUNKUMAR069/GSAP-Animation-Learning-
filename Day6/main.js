var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")
main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "back.out(1.7)"
    })
})



image.addEventListener("mouseenter", function (dets) {
    cursor.innerHTML = "View More"
    gsap.to(cursor, {
        scale: 2,
        
    })
})
image.addEventListener("mouseleave", function (dets) {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
    })
})
