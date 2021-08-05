let controller= new ScrollMagic.Controller(); 
let timeline = new TimelineMax();

timeline
.to('.rock', 3, {y:-600})
.to('.girl',3,{y:-400},'<')
.fromTo('.bg1', {y:-50},{y:0, duration:3} , '<')
.to('.content',3,{top:'0%'},'<')
.fromTo('.content-images', {opacity:0}, {opacity:1, duration:3},'<' )

let scene= new ScrollMagic.Scene({
    //which element if hit, animation will be triggered
    triggerElement: "section",
    duration:"100%",
    //after how many px when element is hit, animation will be triggered
    //element beginning: 0
    //element middle: .5
    //element end: 1
    triggerHook:0, 

})
.setTween(timeline)
.setPin("section")
.addTo(controller); 