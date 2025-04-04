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


  const canvas = document.querySelector("#frame");
  const context = canvas.getContext("2d");
  const frames = {
          currentindex: 0,
          maxindex: 1200
      }
      var images = [];
      var imageloaded = 0;
      function preloader() {
          for (var i = 1;i <= frames.maxindex;i++) {
              const imageurl = `./images/frame_${i.toString().padStart(4, "0")}.jpeg`
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

                const scaleX = canvas.width / img.width
                const scaleY = canvas.height / img.height
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
                    trigger: ".intro",
                    start: "top top",
                    end: "200% top",
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
            tl
            
            .to(frames,updateframe(1201),"16th")
        }
        preloader();
        window.addEventListener("resize",function(){
            loadimage(Math.floor(frames.currentindex))
        })

        loadimage()