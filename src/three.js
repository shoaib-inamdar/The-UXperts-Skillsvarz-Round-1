import * as THREE from 'three';
import { GLTFLoader, OrbitControls, RGBELoader } from 'three/examples/jsm/Addons.js';
import { gsap } from 'gsap';
// import { mod } from 'three/tsl';

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,100);
camera.position.z=17;
// camera.position.y=-6;
// camera.position.x=-3

// camera.rotation.x=THREE.MathUtils.degToRad(90);
// camera.rotation.z-=THREE.MathUtils.degToRad(90);


const renderer=new THREE.WebGLRenderer({
    canvas:document.querySelector("#herocanvas"),
    antialias:true,
})

renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.setSize(window.innerWidth,window.innerHeight);

// properties for hdri
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1;
renderer.outputEncoding=THREE.sRGBEncoding;

const pmremGenerator=new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

const loader=new GLTFLoader();
const controls=new OrbitControls(camera,renderer.domElement);
var model;
new RGBELoader().load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_03_1k.hdr',function(texture){
    const envMap=pmremGenerator.fromEquirectangular(texture).texture;
    // scene.background=envMap;
    scene.environment=envMap;
    texture.dispose();
    pmremGenerator.dispose();


    loader.load("/models/test.glb",(gltf)=>{
        model=gltf.scene;
        scene.add(model);
        // console.log(model)
        const box = new THREE.Box3().setFromObject( gltf.scene );
        const center = box.getCenter( new THREE.Vector3() );

        gltf.scene.position.x += ( gltf.scene.position.x - center.x );
        // gltf.scene.position.x=-2
        gltf.scene.position.y += ( gltf.scene.position.y - center.y );
        // gltf.scene.position.z += ( gltf.scene.position.z - center.z );
        // model.rotation.x=THREE.MathUtils.degToRad(50);
        // model.rotation.y+=THREE.MathUtils.degToRad(90);
        // model.rotation.z-=THREE.MathUtils.degToRad(0);
        
    },undefined,(error)=>{
        console.error(error);
    })
})



window.addEventListener("resize",function(){
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
})

// window.addEventListener("mousemove",function(e){
//     if(model){
//         const rotationX=(e.clientX/window.innerWidth-.5)*(Math.PI*.3);
//         const rotationY=(e.clientY/window.innerHeight-.5)*(Math.PI*.3);
//         // model.rotation.y+=THREE.MathUtils.degToRad(90);

//         gsap.to(model.rotation,{
//             x:rotationY,
//             y:rotationX,
//             duration:.5,
//             ease:"power2.out",
//         })
//         // model.rotation.y=-rotationY;
//         // model.rotation.x=rotationX;
//     }
// })

function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene,camera);
    controls.update();
}
animate();