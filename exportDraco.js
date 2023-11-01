import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {DRACOExporter} from 'three/examples/jsm/exporters/DRACOExporter'
import './style.css'


const exporter = new DRACOExporter()
const  loader = new GLTFLoader()

let scene = new THREE.Scene()

let file = document.getElementById("inputFile").files[0]

loader.load(file,
	function(gltf){
		const binaryData=exporter.parse(gltf.scene)
		downloadFile(binaryData, 'output.drc')
		
	}
);

function downloadFile(thisFile, fileName){
	var ref = document.createElement('a')
	document.body.appendChild(ref)
	ref.href = URL.createObjectURL(new Blob( [ thisFile ], { type: 'application/octet-stream' } ))
	ref.download = fileName
	ref.click()
}

//const binaryData = exporter.parse("/Users/vicclab/Development/Projects/Personal Site/PersonalWebsite/public/decimatedwaterbug/decimatedbug.glb")
//saveArrayBuffer(binaryData, 'mesh.drc')