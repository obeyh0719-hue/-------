
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    // gsap code here!

    ScrollTrigger.create({
        trigger: "header",
        start: "top top",
        end:"+=99999",
        toggleClass: "active",
        markers: true
    });


    gsap.fromTo("#main_view .contents",
        { opacity: 0 }, { opacity: 1, duration: 1, delay:0.4});


});
