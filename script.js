function mainanimation() {
    gsap.from("#div1 img",{
        y: "70",
        x: 5,
        duration: 1,
        opacity: 0,
        rotate: "10deg",
    })
    gsap.from("#div4 img",{
        y: "-100",
        duration: 1,
        opacity: 0,
    })
    gsap.from("#part3 img",{
        y: "-100",
        duration: 3,
        delay:1,
        opacity: 0,
    })
    gsap.from("h1, h3, h5", {
        opacity: 0,
        y: "50",
        stagger:.1,
    })
    // gsap.from(".image1>img, .part4>img",{
    //     y:"-100",
    //     ease:Elastic.easeOut
    // })

    gsap.to("#div1 span",{
        opacity:1,       
        stagger:{
            each:0.1
        }
    })
    gsap.to("#part3 span",{
        opacity:1,       
        stagger:{
            each:0.1
        }
    })
    gsap.from("h6, h2", {
        opacity: 0,
        y: "-100",
        stagger:.1,
    })
}
mainanimation();


barba.init({
    sync: true,
    transitions: [
        {
            enter() {
                mainanimation()
            }
        }
    ]
});