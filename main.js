import './style.css'
import * as THREE from './node_modules/three';
import {EffectComposer} from './node_modules/three/examples/jsm/postprocessing/EffectComposer';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 300);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#background-stars")});
let mouseX = 0;
let mouseY = 0;

//somebody explain to me why I had to offset the camera position to see anything
camera.position.set(0.1,0,0);
camera.rotation.set(0,3.14/2,0);

//adding the renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

//camera controls
document.addEventListener('mousemove', onDocumentMouseMove);
function onDocumentMouseMove(event){
  mouseX = (event.clientX-(window.innerWidth/2)) / 100;
  mouseY = (event.clientY-(window.innerHeight/2)) / 100;
}

//helpful in debugging
const grid = new THREE.GridHelper(100, 100);
//creating the stars and adding them to an array
const stars = [];
function addStar(){
  const starGeometry = new THREE.SphereGeometry(0.025,10,10);
  const starMaterial = new THREE.MeshStandardMaterial({color: 0XFFFFFF});
  const star = new THREE.Mesh(starGeometry,starMaterial);
  const [x,y,z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));

  star.position.set(THREE.MathUtils.randFloat(-50,5),y,z);
  scene.add(star);
  stars.push(star);
}
for(let i = 0; i < 1000; i ++ ){
  addStar();
}
//lighting
const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

//effects composer, not currently in use
//const composer = new EffectComposer(renderer);

function animate(){
  //star positioning
  stars.forEach(s => {s.position.x += 0.01
                      if(s.position.x>5){
                        s.position.x = -50;
                        s.position.y = THREE.MathUtils.randFloat(-50,50);
                        s.position.y = THREE.MathUtils.randFloat(-50,50);
                      }});
  //window sizing
  renderer.setSize(window.innerWidth,window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  camera.aspect = (window.innerWidth/window.innerHeight);
  camera.updateProjectionMatrix();
  //camera controls,
  camera.lookAt(scene.position);
  camera.position.y = mouseY / 1000;
  camera.position.z = mouseX /1000;               
  //show time
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
setTimeout(function(){
  document.querySelector("#cover").style.visibility = "hidden";
},250);