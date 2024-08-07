import './style.css'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 300);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#bugCanvas")});
const controls = new OrbitControls(camera, renderer.domElement);
const light = new THREE.AmbientLight(0XFFFFFF);
const loader = new GLTFLoader();

camera.position.set(37,37,37);
camera.lookAt(new THREE.Vector3(10,10,10));
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
controls.autoRotate=true;
controls.autoRotateSpeed=1.0;
controls.target.set(10,10,10);
scene.add(light);

loader.load('/decimatedwaterbug/decimatedbug.glb',
	function(gltf){
		gltf.scene.position.set(10,10,10);
		scene.add(gltf.scene);
	}
);

function animate(){
	//window sizing
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	camera.aspect = (window.innerWidth/window.innerHeight);
	camera.updateProjectionMatrix();
	controls.update();
	//show time
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
  }
  animate();