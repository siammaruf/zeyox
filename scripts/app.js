import { gsap, Power4, Power3 } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin.js";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/* ---- Trigger GSAP To Mouse Pointer ------*/
let _banner = document.getElementById("home-banner");
let _fArea = document.getElementById("home-feature-area");
let _circle  = document.getElementById("js-cursor");
let _follower  = document.getElementById("js-cursor-follower");
let _mTitle = document.getElementById("site-main-title");

let _rollingTextTop = document.getElementById("rolling-text-first");
let _rollingTextBottom = document.getElementById("rolling-text-last");

function cursorMouse(event){
    let circleTimeLine = gsap.timeline({
        defaults: { 
            duration: 0.3, 
            ease: "none" 
        }
    }); 

    circleTimeLine.to(_circle,{
        x: event.clientX,
        y: event.clientY,
    });

    circleTimeLine.to(_follower,{
        x: event.clientX,
        y: event.clientY
    });
}

function cursorMouseOver(event){
    let circleTimeLine = gsap.timeline({
        defaults: { 
            duration: 0.3, 
            ease: "none" 
        }
    });  
    
    circleTimeLine.to(_circle,{
        scale: 1,
        opacity:0,
    });

    circleTimeLine.to(_follower,{
        scale: 2
    });
}

function cursorMouseLeave(event){
    let circleTimeLine = gsap.timeline({
        defaults: { 
            duration: 0.3, 
            ease: "none" 
        }
    });  
    
    circleTimeLine.to(_circle,{
        scale: 1,
        opacity:1,
    });

    circleTimeLine.to(_follower,{
        scale: 1,
    });
}

function cursorMouseOverFBox(event){
    _circle.classList.add('circle-white');
    _follower.classList.add('circle-follow-white');
}

function cursorMouseLeaveFBox(event){
    _circle.classList.remove('circle-white');
    _follower.classList.remove('circle-follow-white');
}

window.addEventListener('mousemove',cursorMouse);

_mTitle.addEventListener('mouseover',cursorMouseOver);
_mTitle.addEventListener('mouseleave',cursorMouseLeave);

_banner.addEventListener('mouseover',cursorMouseOverFBox);
_banner.addEventListener('mouseleave',cursorMouseLeaveFBox);

_fArea.addEventListener('mouseover',cursorMouseOverFBox);
_fArea.addEventListener('mouseleave',cursorMouseLeaveFBox);

_rollingTextTop.addEventListener('mouseover',cursorMouseOver);
_rollingTextTop.addEventListener('mouseleave',cursorMouseLeave);

_rollingTextBottom.addEventListener('mouseover',cursorMouseOver);
_rollingTextBottom.addEventListener('mouseleave',cursorMouseLeave);

/* ---- Trigger Nav Hamburguer ------*/
let _hamburguer = document.getElementById('nav-hamburguer');
_hamburguer.addEventListener('click',openAndCloseNav);

function openAndCloseNav(){
    if(checkHasClass(_hamburguer,'close-hamburguer')){
        _hamburguer.classList.remove('close-hamburguer');
    }else{
        _hamburguer.classList.add('close-hamburguer');
    }
}

function checkHasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

/* ---- Trigger GSAP To Main Banner ------*/
let bannerScroll = gsap.timeline({
    scrollTrigger: {  
        trigger: '.main-banner-area',
        pin: true,
        start: "top top",
        end: '+=2500',
        // end: "bottom bottom",
        scrub: 0.2,
    },
    defaults: {
        duration: 1
    }
}).to(_banner,{
    scale: 1.4,
},0).to(_banner,{
    scale: 1,
},1);


/* ---- Trigger GSAP To Main Feature Area Text ------*/
let _fProgressBar = document.getElementById("feature-progress-bar");
let _progressBarWrap = document.getElementById("progress-bar-area");

gsap.set(_progressBarWrap,{
    width: screen.width
});

gsap.set(_fArea,{
    height: screen.height
});

let fTextScroll = gsap.timeline({
    scrollTrigger: {  
        trigger: _fArea,
        pin: true,
        start: "top top",
        end: '+=1000',
        scrub: 0.6,
    },
    defaults: {
        duration: 1
    }
}).to(_rollingTextTop,{
    xPercent: -100,
    stagger: 0.2,
},0).to(_rollingTextBottom,{
    xPercent: 100,
    stagger: 0.2,
},0).to(_fProgressBar,{
    value: 100,
    ease: 'none',
},0);


// Animation Text On Load
let mTitleTimeLine = gsap.timeline(); 
mTitleTimeLine.from(".site-main-title > span > span", {
  duration: 0.75,
  y: 150,
  autoAlpha: 0,
  ease: Power3.out,
  stagger: 1.5
});

mTitleTimeLine.from(".site-main-description > span > span", {
    duration: 0.75,
    y: 150,
    autoAlpha: 0,
    ease: Power3.out,
    stagger: 1.5
  });