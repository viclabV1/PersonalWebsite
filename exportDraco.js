import * as THREE from three
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOExporter} from 'three/examples/jsm/exporters/DRACOExporter'
import './style.css'


const exporter = new DracoExporter()
const  loader = new GLTFLoader()

// let scene = new THREE.scene()

// loader.load('/Users/vicclab/Development/Projects/Personal Site/PersonalWebsite/public/decimatedwaterbug/decimatedbug.glb',
// 	function(gltf){
// 		const binaryData=exporter.parse(gltf.scene)
// 		saveArrayBuffer(binaryData, 'mesh.drc')
// 	}
// );


//const binaryData = exporter.parse("/Users/vicclab/Development/Projects/Personal Site/PersonalWebsite/public/decimatedwaterbug/decimatedbug.glb")
//saveArrayBuffer(binaryData, 'mesh.drc')