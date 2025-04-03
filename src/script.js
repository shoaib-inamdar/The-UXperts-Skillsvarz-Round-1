import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';


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
  
lenis()


//   var maintl=gsap.timeline();
  const cluttertext = (element) => {
    const htmlTag = document.querySelector(element);
    let clutter = "";
  
    htmlTag.textContent.split("").forEach((e) => {
      clutter += `<span class="inline-block">${e}</span>`;
    });
  
    // Updating the HTML content of the element with the animated spans
    htmlTag.innerHTML = clutter;
  };
  cluttertext(".products-wrapper>h1");
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
    


//   const canvas = document.querySelector("#frame");
//   const context = canvas.getContext("2d");
//   const frames = {
//           currentindex: 0,
//           maxindex: 1345
//       }
//       var images = [];
//       var imageloaded = 0;
//       function preloader() {
//           for (var i = 1;i <= frames.maxindex;i++) {
//               const imageurl = `./images/frame_${i.toString().padStart(4, "0")}.jpeg`
//               const img = new Image();
//               img.src = imageurl
//               img.onload = () => {
//                   imageloaded++;
//                   if (imageloaded === frames.maxindex) {
//                       loadimage(frames.currentindex)
//                       startanimation()
//                   }
//               }
//               images.push(img)
//           }
//       }

//         function loadimage(index) {
//             if (index >= 0 && index <= frames.maxindex) {
//                 const img = images[index];
//                 canvas.width = window.innerWidth;
//                 canvas.height = window.innerHeight;

//                 const scaleX = canvas.width / img.width
//                 const scaleY = canvas.height / img.height
//                 const scale = Math.max(scaleX, scaleY);

//                 const newwidth = img.width * scale;
//                 const newheight = img.height * scale;

//                 const offsetX = (canvas.width - newwidth) / 2;
//                 const offsetY = (canvas.height - newheight) / 2;

//                 context.clearRect(0, 0, canvas.width, canvas.height);
//                 context.imageSmoothingEnabled = true;
//                 context.imageSmoothingQuality = "high";
//                 context.drawImage(img, offsetX, offsetY, newwidth, newheight);
//                 frames.currentindex = index;

//             }
//         }

//         function startanimation() {
//             var tl = gsap.timeline({
//                 scrollTrigger: {
//                     trigger: ".parent",
//                     start: "top top",
//                     scrub: 3,
//                     // markers:true,
//                 }
//             })
//             function updateframe(index){
//                 return{
//                     currentindex:index,
//                     ease:"linear",
//                     onUpdate: function () {
//                         loadimage(Math.floor(frames.currentindex))
//                     }
//                 }
//             }
//             tl
//             .to(frames,updateframe(100),'first')
//             .to(".animate1",{opacity:0,ease:'linear'},'first')
            
//             .to(frames,updateframe(200),"second")
//             .to(".animate2",{opacity:1,ease:'linear'},'second')

//             .to(frames,updateframe(220),"third")
//             .to(".animate2",{opacity:1,ease:'linear'},"third")
//             // .to(".animate2",{opacity:0,ease:'linear'},'third')
//             .to(frames,updateframe(260),"fourth")
//             .to(".animate2",{opacity:0,ease:'linear'},"fourth")

//             .to(frames,updateframe(270),"fifth")
//             .to(".animate3",{opacity:1,ease:'linear'},"fifth")

//             .to(frames,updateframe(330),"sixth")
//             .to(".animate3",{opacity:0,ease:'linear'},"sixth")

//             .to(frames,updateframe(360),"seventh")
//             .to(".animate3",{opacity:0,ease:'linear'},"seventh")

//             .to(frames,updateframe(380),"eight")
//             .to(".panel",{x:'0%',ease:'expo'},"eight")

//             .to(frames,updateframe(400),"ninth")
//             .to(".panel",{x:'100%',ease:'linear'},"ninth")

//             .to(frames,updateframe(430),"tenth")
//             .to(".panel",{x:'100%',ease:'linear'},"tenth")

//             .to(frames,updateframe(460),"eleventh")
//             .to("canvas",{scale:.5,ease:'linear'},"eleventh")
            
//             .to(frames,updateframe(480),"twelveth")
//             .to(".panelism",{opacity:1,ease:'expo'},"twelveth")
            
//             .to(frames,updateframe(500),"twelveth")
//             .to(".panelism span",{width:190,ease:'expo'},"twelveth")
            
//             .to(frames,updateframe(530),"13th")
//             .to("canvas",{scale:1,ease:'linear'},"13th")

//             .to(frames,updateframe(550),"14th")
//             .to(".panelism",{scale:2,ease:'circ'},"14th")

//             .to(frames,updateframe(570),"15th")
//             .to(".panelism",{scale:2,ease:'circ'},"15th")
//         }
//         preloader();
//         window.addEventListener("resize",function(){
//             loadimage(Math.floor(frames.currentindex))
//         })
//         document.querySelectorAll(".headings h3")
//         .forEach(function(elem){
//             gsap.from(elem,{
//                 scrollTrigger:{
//                     trigger:elem,
//                     start:"top 90%",
//                     end:'bottom 20%',
//                     scrub:2
//                 },
//                 opacity:.3
//             })
//         })
        // loadimage()