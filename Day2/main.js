// The following animations use gsap.to() to move elements across the page.
// Each animation is triggered with a manually set delay, resulting in a step-by-step animation sequence.

// Animating box1 by moving it 1000px to the right with a 2-second duration and a 1-second delay.
// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1
// });

// Animating box2 by moving it 1000px to the right and changing its background color to pink. 
// This animation triggers after a 3-second delay.
// gsap.to("#box2", {
//     x: 1000,
//     duration: 2,
//     backgroundColor: "pink",
//     delay: 3
// });

// Animating box3 by moving it 1000px to the right, reducing its scale to 50%, and making it circular with a 5-second delay.
// gsap.to("#box3", {
//     x: 1000,
//     scale: 0.5,
//     duration: 2,
//     borderRadius: "50%",
//     delay: 5
// });

// The above animations are executed manually using delays. However, GSAP Timelines allow us to sequence these animations more efficiently.
// The timeline ensures animations play in order without needing individual delays.

// Creating a GSAP timeline instance
const tl = gsap.timeline();

// Animating the navigation bar elements in sequence using the timeline.
// Animation for the <h2> element: moving it 20px from the left, with opacity fading in, over 0.7 seconds.
tl.from("h2", {
    x: -20,
    opacity: 0,
    duration: 0.7,
    delay: 0.5 // Start animation after a 0.5-second delay.
});

// Animation for the <h4> element: moving it 20px from the top, with opacity fading in, over 0.7 seconds.
// Stagger ensures a small delay between each <h4> if there are multiple instances.
tl.from("h4", {
    y: -20,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
});

// Animation for the <h1> element: moving it 30px from the top, scaling down to 50%, with opacity fading in, over 0.5 seconds.
tl.from("h1", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    scale: 0.5
});

// Now moving on to the center heading animations (if applicable).

// Example for animating boxes 4, 5, and 6 in sequence. 
// These are placeholder animations demonstrating the timeline approach for sequential animations.

// Animating box4 by moving it 1000px to the right, starting after a slight delay.
// tl.to("#box4", {
//     x: 1000,
//     duration: 2,
//     delay: 0.2
// });

// Animating box5 by moving it 1000px to the right and changing the background color to pink.
// tl.to("#box5", {
//     x: 1000,
//     duration: 2,
//     backgroundColor: "pink"
// });

// Animating box6 by moving it 1000px to the right, reducing its scale to 50%, and making it circular.
// tl.to("#box6", {
//     x: 1000,
//     scale: 0.5,
//     duration: 2,
//     borderRadius: "50%"
// });
