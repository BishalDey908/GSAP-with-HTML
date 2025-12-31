const tl = gsap.timeline()

tl.to("#box",{
    x:1200,
    duration:2,
    delay:1,
    backgroundColor:"#599685",
    rotate:360,
    borderRadius:"100%",
    scale:1.5,
    
})


tl.to("#box2",{
    x:1200,
    duration:2,
    delay:1,
    backgroundColor:"#461decff",
    rotate:360,
    borderRadius:"100%",
    scale:1.5,
     repeat:1, //repeat property indicatates how many times it will repeat
    yoyo:true  //yoyo property indicatates animation will happen on both diiection --><-- 
})

//for text animation

tl.from("h1",{
    opacity:0,
    duration:3,
    delay:1,
    color:"green",
    y:30,
    stagger:-1, //stagger property indicatates if there are elements with same name then animate oner by one with given time 
})
