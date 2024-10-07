// Animation using GSAP

// Animation on Box 1
// gsap.to() animates the element from its initial position to a set destination.
gsap.to("#box1", {
    x: 1200, // Moves the element horizontally
    duration: 2, // Animation duration in seconds
    delay: 1, // Delay before animation starts
    rotate: 360, // Rotates the element 360 degrees
    backgroundColor: "blue", // Changes background color to blue
    borderRadius: "50%", // Rounds the corners to form a circle
    scale: 0.5, // Scales down to half its size
    repeat: -1, // Infinite repeat
    repeatDelay: 2, // Delay between each repeat
    yoyo: true, // Makes the animation reverse direction
  });
  
  // Animation on Box 2
  // gsap.from() animates the element from a destination position to its initial position.
  gsap.from("#box2", {
    x: 1200, // Starting position of the element
    duration: 2, // Animation duration in seconds
    delay: 1, // Delay before animation starts
  });
  
  // Animation on h1 tags
  gsap.from("h1", {
    opacity: 0, // Fades in from 0 opacity
    duration: 1, // Animation duration in seconds
    delay: 1, // Delay before animation starts
    y: 20, // Moves the element 20px from the top
    stagger: 1, // Adds a delay between each h1 tag animation
  });
  