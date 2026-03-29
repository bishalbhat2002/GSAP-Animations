gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".box").forEach((box) => {
  gsap.from(box, {
    y: 50,
    opacity: 0,
    scale: 0.5,
    transformOrigin: "bottom left",
    duration: 0.7,
    scrollTrigger: {
      trigger: box,
      start: "top 90%",
      // markers: true,
      // end: "top 50%",
      // scrub: true
  }
});
})

