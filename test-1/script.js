// gsap.from('.header', {duration: 1, y:-100, ease: 'bounce', }); 
// gsap.from('.link', {duration:2, opacity:0, delay:1, stagger: 1})
// gsap.from('.right', {duration:2, x:'-100vw', delay:1,ease:'power2.in' } )
// gsap.from('.left',{duration:1, x:'-100%', delay:1.5,x: '-100%'})
// gsap.to('.footer', {duration:1, y:0, ease: 'bounce'});
// gsap.fromTo('.button', {opacity:0, scale:0, rotation:720}, {duration:1, delay:3.4, opacity:1, scale:1, rotation:0})


const timeline= gsap.timeline({defaults:{duration:1}});
timeline
.from('.header', { y:-100, ease: 'bounce'})
.from('.link', {opacity:0, stagger: .2})
.from('.right', { x:'-100vw', delay:1,ease:'power2.in' })
.from('.left',{ x:'-100%',x: '-100%'}, '<.5')
.to('.footer', {duration:1, y:0, ease: 'bounce'})
.fromTo('.button', {opacity:0, scale:0, rotation:720}, {opacity:1, scale:1, rotation:0})

//reverse the animation:
const button = document.querySelector('.button');

button.addEventListener('click', ()=>{
    timeline.timeScale(3);
    timeline.reverse(); 
})