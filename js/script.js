
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
  // gsap code here!

  ScrollTrigger.create({
    trigger: "header",
    start: "top top",
    end: "+=99999",
    toggleClass: "active",
    //markers:true
  });

  gsap.fromTo("#main_view .contents",
    { opacity: 0 },
    { opacity: 1, duration: 1, delay: 1.6 });

  /*s2영역 */
  const s2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#s2",
      //markers:true,
      start: "top 60%",
      toggleActions: "play none none reverse"
    },
    defaults: {
      duration: 1  //속도
    }
  });

  s2.to("#s2 .title", { opacity: 1, y: 0 });
  s2.fromTo("#s2 .phone1", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
  s2.fromTo("#s2 .phone2", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });
  s2.fromTo("#s2 .text", { opacity: 0, y: 50 }, { opacity: 1, y: 0 });


  /*s3 영역*/
  const s3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#s3",
      //markers:true,
      start: "top 60%",
      toggleActions: "play none none reverse"
    },
    defaults: {
      duration: 1  //속도
    }
  });

  s3.fromTo("#s3 .title", { opacity: 0 }, { opacity: 1 })
    .fromTo("#s3 .text", { opacity: 0, y: 150 }, { opacity: 1, y: 0 })
    .fromTo("#s3 .img", { opacity: 0, y: 150 }, { opacity: 1, y: 0 })


  /*s7*/

  const s7 = gsap.timeline({
    //스크롤에 따른 효과 적용
    scrollTrigger: {
      trigger: "#s7",
      markers: true,
      scrub: 1, //스크롤속도에 맞춰서 애니메이션 효과 진행됨
      start: "top 90%",
      end: "bottom 50%"
    }
  });

  s7.fromTo("#s7 .bg_box",0.8,{ width: "1140px" }, { width: "100%" })
    .fromTo("#s7 .img1",{ opacity: 0 }, { opacity: 1 },">0.5")
    .fromTo("#s7 .text2", { opacity: 0 }, { opacity: 1 },">0.5")
    .fromTo("#s7 .img2", { opacity: 0 }, { opacity: 1 })
    .fromTo("#s7 .img3", { opacity: 0 }, { opacity: 1 },"<0.2")
    .fromTo("#s7 .text3", { opacity: 0 }, { opacity: 1 })
    .fromTo("#s7 .img4", { opacity: 0 }, { opacity: 1 })
    .fromTo("#s7 .text4", { opacity: 0 }, { opacity: 1 })


});//end