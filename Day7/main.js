var menu = document.querySelector("nav i");
var close = document.querySelector("#full i");
    const tl = gsap.timeline({paused:true});
gsap.from("#logo",{
    opacity: 0,
    scale: 0.5,
    y: -20,
    duration: 1,
    ease: "bounce.out"
}       )


    tl.to(".layer",{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        duration: 0.3,
        ease: "power2.inOut"
     })
    tl.to("#full",{
        right:0,
        duration: 0.4,
        ease: "power2.inOut"     
    })
    tl.from("#full h4",{
       stagger: 0.3,
       opacity: 0,
       duration: 0.6,
       ease: "power2.inOut"
    })
    tl.from("#full i",{
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut"
    })
    

    menu.addEventListener("click",function(){
        tl.play();
    })
    close.addEventListener("click",function(){
        tl.reverse();
    })







