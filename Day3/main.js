

gsap.from("#page1 #box1", {
    scale: 0,
    delay: 1,
    duration: 1.7,
    rotation: 360,
});





gsap.from("#page2 h1", {
    x: 500,
    duration: 1.2,
    opacity: 0,
    scale: 0.3,
    // Scroll Trigger
    scrollTrigger: {
        trigger: "#page2 h1",
        scroller: "body",
        start: "top 55%",
        markers: true,
    }
});

gsap.from("#page2 h2", {
    x: -500,
    duration: 1.2,
    opacity: 0,
    scale: 0.3,
    // Scroll Trigger
    scrollTrigger: {
        trigger: "#page2 h2",
        scroller: "body",
        start: "top 55%",
        markers: true,
    }
});

gsap.from("#page3 #box3", {
    y: -100,
    duration: 4,
    scale: 0,
    rotation: 360*4,
    scrollTrigger: {
        trigger: "#page3 #box3",
        scroller: "body",
        start: "top 55%",
        markers: true,
        end: "bottom 20%",
        scrub: 5
    }
});



