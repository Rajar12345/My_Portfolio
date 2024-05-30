const znLink = document.querySelectorAll('.zn-link');
const znHoverReveal = document.querySelectorAll('.zn-hover-reveal');
const znImages = document.querySelectorAll('.zn-hidden-img');

for(let i = 0; i < znLink.length; i++) {
  znLink[i].addEventListener('mousemove', (e) => {
    znHoverReveal[i].style.opacity = 1;
    znHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(5deg)`;
    znImages[i].style.transform = 'scale(1, 1)';
    znHoverReveal[i].style.left = e.clientX + "px";
  });
  
  znLink[i].addEventListener('mouseleave', (e) => {
    znHoverReveal[i].style.opacity = 0;
    znHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(-5deg)`;
    znImages[i].style.transform = 'scale(0.8, 0.8)';
  });
}


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions:"play none none reverse"
})


gsap.to('.img-container',{
  scale:52,
  ease:"ease",
  scrollTrigger:{
    trigger:'.video-section',
    scrub:1,
    start:"top top",
    end:"bottom",
    pin:true
  }
})


gsap.to('.right' ,{
  autoAlpha:0,
  x:500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})
gsap.to('.left' ,{
  autoAlpha:0,
  x:-500,
  duration:1.5,
  scrollTrigger:{
    start:1
  }
})


gsap.to('.txt-bottom',{
  autoAlpha:0,
  letterSpacing:-10,
  duration:2,
  scrollTrigger:{
    start:2
  }
})


const tl = gsap.timeline();

tl.from('.right-side div',{
  y:150,
  opacity:0,
  stagger:{
    amount:.4
  },
  delay:.5
}).from('.left-side',{opacity:0,duration:2},.5)
.to('.wrapper' ,{x:-window.innerWidth})



ScrollTrigger.create({
  animation:tl,
  trigger:'.wrapper',
  start:"top top",
  end:"+=600",
  scrub:1,
  pin:true,
  ease:"ease"
})



gsap.utils.toArray('.col').forEach(image=>{
  gsap.fromTo(image,{
    opacity:.3,
    x:0
  },{
    opacity:1,
    x:-50,
    scrollTrigger:{
      trigger:image,
      start:"10%",
      stagger:{
        amount:.4
      }
    }
  })
})

const timeline = gsap.timeline();

timeline.from('.title span' ,{
  y:150,
  skewY:7,
  duration:3
}).from('.txt-bottom',{
  letterSpacing:-10,
  opacity:0,
  duration:3
})
