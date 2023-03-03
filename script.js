function init(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();




gsap.from("#firstimg",{
    opacity:0,
    y:60,
    duration:2,
    stagger:0.4,
    ease:Expo.easeInOut
})
gsap.from("#secondimg",{
    opacity:0,
    x:60,
    duration:2,
    stagger:0.4,
    ease:Expo.easeInOut
})
gsap.from("#thirdimg",{
    opacity:0,
    y:-60,
    duration:2,
    stagger:0.4,
    ease:Expo.easeInOut
})
gsap.from("#centre>h1",{
    opacity:0,
    duration:2,
    stagger:0.4,
    ease:Expo.easeInOut
})
gsap.from("#greenline",{
    opacity:0,
    duration:2,
    ease:Expo.easeInOut
})
gsap.from("#p1container",{
    opacity:0,
    duration:2,
    stagger:0.4,
    y:20,
    ease:Expo.easeInOut
})


gsap.from("#p2heading",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p2heading",
        start:"top 70%",
        // markers:true
    },
    opacity:0,
    y:10,
    duration:1,
    stagger:0.4,
    ease:Expo.easeInOut
})
gsap.from(".p2para",{
    scrollTrigger:{
        scroller:"#main",
        trigger:".p2para",
        start:"top 72%",
        // markers:true
    },
    opacity:0,
    y:10,
    duration:1,
    ease:Expo.easeInOut
})

gsap.from("#p2about",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p2about",
        start:"top 75%",
        // markers:true
    },
    opacity:0,
    y:10,
    duration:1,
    delay:0,
    stagger:0.2,
    ease:Expo.easeInOut
})
gsap.from("#p3images",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p3images",
        start:"top 75%",
        // markers:true
    },
    opacity:0,
    y:60,
    duration:2,
    stagger:0.2,
    ease:Expo.easeInOut
})
gsap.from(".p3parahead",{
    scrollTrigger:{
        scroller:"#main",
        trigger:".p3parahead",
        start:"top 75%",
        // markers:true
    },
    opacity:0,
    y:10,
    duration:1,
    ease:Expo.easeInOut
})
gsap.from("#p3container",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p3container",
        start:"top 77%",
        // markers:true
    },
    opacity:0,
    y:10,
    duration:1,
    stagger:0.2,
    ease:Expo.easeInOut
})
gsap.from("#p4heading",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p4heading",
        start:"top 80%",
        // markers:true
    },
    opacity:0,
    y:20,
    duration:2,
    stagger:0.4,
    ease:Expo.easeInOut
})
gsap.from("#p4container",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p4container",
        start:"top 80%",
        // markers:true
    },
    opacity:0,
    y:5,
    duration:2,
    // stagger:0.4,
    ease:Expo.easeInOut
})


// swiper js from here


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  gsap.from(".p5box",{
    scrollTrigger:{
        scroller:"#main",
        trigger:".p5box",
        start:"top 60%",
    },
    opacity:0,
    y:30,
    duration:1,
    // stagger:0.4,
    ease:Expo.easeInOut
})
  gsap.from("#p5content",{
    scrollTrigger:{
        scroller:"#main",
        trigger:"#p5content",
        start:"top 90%",
    },
    opacity:0,
    y:20,
    duration:1,
    // stagger:0.4,
    ease:Expo.easeInOut
})
  gsap.from(".vertical",{
    scrollTrigger:{
        scroller:"#main",
        trigger:".vertical",
        start:"top 60%",
    },
    opacity:0,
    y:20,
    duration:1,
    stagger:0.2,
    ease:Expo.easeInOut
})