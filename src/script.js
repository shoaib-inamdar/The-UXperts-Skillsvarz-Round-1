import { data } from "autoprefixer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import { root } from "postcss";
import { DoubleSide } from "three";
import { FullScreenQuad, RectAreaLightUniformsLib } from "three/examples/jsm/Addons.js";
import { deepCloneAttribute } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { element, gapSize, triplanarTexture } from "three/tsl";
// import Shery from "sheryjs";
import 'remixicon/fonts/remixicon.css'
// import FeatherScroll from "scrollfeather"

import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll({
  lenisOptions:{
    lerp:.05,
    smoothWheel:true
  }
});


gsap.registerPlugin(ScrollTrigger) 
function lenis(){
    const lenis = new Lenis({
        lerp: 0.05,
        smoothWheel:true
    });
  
  lenis.on('scroll');
  
  function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  }
  

  // Shery.imageEffect(".contentimg", {
  //   style: 5,
  //   gooey: true,
  //   // debug:true,
  //   config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241529912187108},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  // });
// lenis()
// const scroll = new FeatherScroll();
var tl2=gsap.timeline();

function loader(){
  var progress=document.querySelector(".progress")
tl2.to(progress,{
    width:"100%",
    // ease:"power2.out",
    ease: "power1.inOut",
    duration:8
})
tl2.to(".loader",{
    opacity:0,
    // ease:"power2.out",
    // duration:5
})
tl2.to(".loader",{
    display:"none"
})
}
loader()
function cursor(){
  window.addEventListener("mousemove",function(e){

      gsap.to(".cursor",{
          x:e.clientX,
          y:e.clientY,
          opacity:1,
          // skew:,
          // ease:"expo.inOut",
          stagger:.005,
          // duration:.2
      })
  })
}
cursor()
var cursors=document.querySelector(".cursor")
var cursorh1=document.querySelector(".cursor h1")
document.querySelectorAll(".cursoreffect").forEach(function(e){
    e.addEventListener("mouseenter",function(elem){
        const data=`${e.getAttribute("data-text")}`
        if(data=="null"){
            cursors.innerHTML=""
        }
        else{
            cursors.innerHTML=data
        }
        // data.value===null?cursors.innerHTML="":cursors.innerHTML=data
        // cursors.innerHTML=data
        // console.log(e.getAttribute("data-text"))
        gsap.to(".cursor",{
            scale:7
        })
    })
})
document.querySelectorAll(".cursoreffect").forEach(function(e){
    e.addEventListener("mouseleave",function(elem){
        cursors.innerHTML=""
        gsap.to(".cursor",{
            scale:1
        })
    })
})

gsap.from(".videodiv",{
  scale:.7,
  scrollTrigger:{
    trigger:".videodiv",
    scroller:"body",
    start:"top 80%",
    end:"bottom bottom",
    scrub:2,
    // markers:true
  }
})

//   var maintl=gsap.timeline();
  const cluttertext = (element) => {
    const Tag = document.querySelector(element);
    let clutter = "";
  
    Tag.textContent.split("").forEach((e) => {
      if(e==="") clutter+=`<span>$nbsp;</span>`
      clutter += `<span class="inline-block">${e}</span>`;
    });
  
    // Updating the HTML content of the element with the animated spans
    Tag.innerHTML = clutter;
  };
  cluttertext(".products-wrapper>h1");
function products(){
  gsap.from(".products-wrapper>h1>span", {
    opacity: 0,
    x: 200,
    stagger: {
      each: 0.1,
      from: "start",
    },
    scrollTrigger: {
      scroller: "body",
      trigger: ".products-wrapper",
      start: "top 20%",
      end: "top 0%",
      scrub: 1,
      // markers: true,
    },
  });
const tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".products",
      start: "top 0",
      end: "top -650%",
      scrub: 1,
      pin: true,
      // markers: true,
    //   stagger:1
    },
  });
  tl.to("#right1",{
      top: "-120%",
      rotate: "-20deg",
      left: "-25%",
    //   stagger: 0.2,
    },'a');
    tl.to("#left1",{
        top: "-120%",
        rotate: "20deg",
        left: "40%",
        delay:.2
        // stagger: 0.2,
    },'a');
  tl.to("#right2",{
      top: "-120%",
      rotate: "-20deg",
      left: "-25%",
      delay:.4
    //   stagger: 0.2,
    },'a');
    tl.to("#left2",{
        top: "-120%",
        rotate: "20deg",
        left: "40%",
        delay:.6
        // stagger: 0.2,
    },'a');
  tl.to("#right3",{
      top: "-120%",
      rotate: "-20deg",
      left: "-25%",
      delay:.8
    //   stagger: 0.2,
    },'a');
    tl.to("#left3",{
        top: "-120%",
        rotate: "20deg",
        left: "40%",
        delay:1
        // stagger: 0.2,
    },'a');
    tl.to(".products-wrapper>h1>span", {
      opacity: 0,
      x: -200,
      stagger: {
        each: 0.1,
        from: "start",
      },
      scrollTrigger: {
        scroller: "body",
        trigger: ".products-wrapper",
        start: "top -670%",
        end: "top 0%",
        scrub: 1,
        // markers: true,
      },
    });
    
// var productimg=document.querySelectorAll(".products-imgs")
// var productimgh1=document.querySelectorAll(".products-img>h1")
cluttertext(".product1");
cluttertext(".product2");
cluttertext(".product3");
cluttertext(".product4");
cluttertext(".product5");
cluttertext(".product6");


const allImgs = document.querySelectorAll(".product-imgs");
allImgs.forEach((img, index) => {
  img.addEventListener("mouseenter", () => {
    if (index === 0) {
      gsap.to("#overlay1", {
        opacity: 1,
      });
      gsap.to(".product1>span", {
        opacity: 1,
        // x:200,
        scale: 1,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    } else if (index === 1) {
      gsap.to("#overlay2", {
        opacity: 1,
      });
      gsap.to(".product2>span", {
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    } else if (index === 2) {
      gsap.to("#overlay3", {
        opacity: 1,
      });
      gsap.to(".product3>span", {
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    } else if (index === 3) {
      gsap.to("#overlay4", {
        opacity: 1,
      });
      gsap.to(".product4>span", {
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    } 
    else if(index===4){
      gsap.to("#overlay5", {
        opacity: 1,
      });
      gsap.to(".product5>span", {
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    }
    else{
      gsap.to("#overlay6", {
        opacity: 1,
      });
      gsap.to(".product6>span", {
        opacity: 1,
        scale: 1,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    }
  });
  img.addEventListener("mouseleave", () => {
    if (index === 0) {
      gsap.to("#overlay1", {
        opacity: 0,
        delay: 0.5,
      });
      gsap.to(".product1>span", {
        opacity: 0,
        scale: 0,
        // x:-200,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    } else if (index === 1) {
      gsap.to("#overlay2", {
        opacity: 0,
        delay: 0.5,
      });
      gsap.to(".product2>span", {
        opacity: 0,
        scale: 0,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    } else if (index === 2) {
      gsap.to("#overlay3", {
        opacity: 0,
        delay: 0.5,
      });
      gsap.to(".product3>span", {
        opacity: 0,
        scale: 0,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    } else if (index === 3) {
      gsap.to("#overlay4", {
        opacity: 0,
        delay: 0.5,
      });
      gsap.to(".product4>span", {
        opacity: 0,
        scale: 0,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    } 
    else if(index===4) {
      gsap.to("#overlay5", {
        opacity: 0,
        delay: 0.5,
      });
      gsap.to(".product5>span", {
        opacity: 0,
        scale: 0,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    }
    else {
      gsap.to("#overlay6", {
        opacity: 0,
        delay: 0.5,
      });
      gsap.to(".product6>span", {
        opacity: 0,
        scale: 0,
        stagger: {
          amount: 0.3,
          from: "start",
        },
      });
    }
  });
});
}
products()

//  `/public/images/${i.toString().padStart(4, "0")}.webp`
function frames(){
  const canvas = document.querySelector("#frame");
  const context = canvas.getContext("2d");
  const frames = {
          currentindex: 0,
          maxindex: 468
      }
      var images = [];
      var imageloaded = 0;
      function preloader() {
          for (var i = 1;i <= frames.maxindex;i++) {
              const imageurl =`/images/${i}.webp`
              const img = new Image();
              img.src = imageurl
              img.onload = () => {
                  imageloaded++;
                  if (imageloaded === frames.maxindex) {
                      loadimage(frames.currentindex)
                      startanimation()
                  }
              }
              images.push(img)
          }
      }

        function loadimage(index) {
            if (index >= 0 && index <= frames.maxindex) {
                const img = images[index];
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                const scaleX = canvas.width / img.width;
                const scaleY = canvas.height / img.height;
                const scale = Math.max(scaleX, scaleY);

                const newwidth = img.width * scale;
                const newheight = img.height * scale;

                const offsetX = (canvas.width - newwidth) / 2;
                const offsetY = (canvas.height - newheight) / 2;

                context.clearRect(0, 0, canvas.width, canvas.height);
                context.imageSmoothingEnabled = true;
                context.imageSmoothingQuality = "high";
                context.drawImage(img, offsetX, offsetY, newwidth, newheight);
                frames.currentindex = index;

            }
        }

        function startanimation() {
            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".features",
                    start: "top top",
                    end: "700% top",
                    scrub: 2,
                    pin:true,
                    // markers:true,
                }
            })
            function updateframe(index){
                return{
                    currentindex:index,
                    ease:"linear",
                    onUpdate: function () {
                        loadimage(Math.floor(frames.currentindex))
                    }
                }
            }
            tl.to(frames,updateframe(467))
        }
        preloader();
        window.addEventListener("resize",function(){
            loadimage(Math.floor(frames.currentindex))
        })

        loadimage()
}
frames()

function para_effect(){
  var clutter="";
document.querySelector(".para-effect")
.textContent.split("")
.forEach(function(e){
  if(e==="") clutter+=`<span>$nbsp;</span>`
  clutter+=`<span>${e}</span>`;
})
document.querySelector(".para-effect").innerHTML=clutter;
var tl3=gsap.timeline({
  scrollTrigger:{
      trigger:".about",
      scrub:2,
      start:"50% bottom",
      end:"bottom 80%",
      // pin:true,
      // markers:true
  }
});
gsap.set(".para-effect span",{
  opacity:.01
})
tl3.to(".para-effect span",{
  opacity:1, 
  stagger:.03,
  ease:"power4",
},'para')
// tl3.to("#leftimg",{
//   x:1000
// },'para')

}
para_effect()

function ewaste(){
  gsap.to(".ewaste-wrapper",{
    x:"-200vw",
    scrollTrigger:{
      trigger:".ewaste",
      scroller:"body",
      scrub:2,
      start:"0% 0%",
      end:"bottom top",
      pin:true,
      markers:true
    }
  })
}
// ewaste()

const textEffect = () => {
  // Splitting the text content into individual letters and wrapping each in a span with a class
  document.querySelectorAll(".text-effect").forEach(function (e) {
    [...e.children].forEach(function (h) {
      var clutter = "";
      h.textContent.split("").forEach(function (l) {
        clutter += `<span>${l}</span>`;
      });
      h.innerHTML = clutter;
    });
  });
  //animation for mousemove
  document.querySelectorAll(".text-effect").forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      gsap.to(e.children[0].querySelectorAll("span"), {
        y: "-106%",
        stagger: {
          amount: 0.2,
        },
        duration: 0.4,
      });
      gsap.to(e.children[1].querySelectorAll("span"), {
        y: "-100%",
        stagger: {
          amount: 0.2,
        },
        duration: 0.4,
      });
    });
  });
  //animation for mouseleave
  document.querySelectorAll(".text-effect").forEach(function (e) {
    e.addEventListener("mouseleave", function () {
      gsap.to(e.children[0].querySelectorAll("span"), {
        y: "0%",
        stagger: {
          amount: 0.2,
        },
      });
      gsap.to(e.children[1].querySelectorAll("span"), {
        y: "0%",
        stagger: {
          amount: 0.2,
        },
      });
    });
  });
};
textEffect();

document.querySelector(".right").addEventListener("click",function(){
  var navtl=gsap.timeline()
  gsap.to(".sidenav",{
      right:0,
      duration:1,
      ease:"power4",
  })
  navtl.from(".sidenav h1",{
      x:100,
      opacity:0,
      duration:1,
      ease:"power4",
      stagger:.3,
  })
  gsap.to("#phone,.right",{
    opacity:0
  })
})

document.querySelector(".cross").addEventListener("click",function(){
  gsap.to(".sidenav",{
    right:"-40%",
    duration:1,
    ease:"power4",  
  })
  gsap.to("#phone,.right",{
    opacity:1
  })
})