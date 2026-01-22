
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
  // gsap code here!

  ScrollTrigger.create({
    trigger:"header",
    start:"top top",
    end:"+=99999",
    toggleClass:"active",
    //markers:true
  });

  gsap.fromTo("#main_view .contents",
    {opacity:0},
    {opacity:1, duration:1, delay:1.6});

  /*s2영역 */    
  const s2 = gsap.timeline({
    scrollTrigger:{
      trigger:"#s2",
      markers:true,
      start:"top 60%",
      toggleActions:"play none none reverse"
    },
    defaults:{
      duration:1  //속도
    }
  });

  s2.to("#s2 .title",{opacity:1, y:0});
  s2.fromTo("#s2 .phone1",{opacity:0, y:50},{opacity:1, y:0});
  s2.fromTo("#s2 .phone2",{opacity:0, y:50},{opacity:1, y:0});
  s2.fromTo("#s2 .text",{opacity:0, y:50},{opacity:1, y:0});


 });//end

