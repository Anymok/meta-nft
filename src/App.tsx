//@ts-ignore
import {Scene,Entity} from 'aframe-react';
import sky from "./models/sky.png";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
//@ts-ignore
import final from "./models/final.glb"


export function App(){
    const loader = new GLTFLoader()
    loader.load(final,(d)=>{
        const entity : any = document.getElementById("landscape");

        entity.object3D.add(d.scene)
    })
    return <div>
        <Scene>
            <Entity primitive='a-assets'>
                <img id="sky" src={sky} alt="stars"/>

            </Entity>
            <Entity id="landscape" gltf-model="url('./models/final.glb')" position={{x:1,y:1,z:1}} scale="0.2 0.2 0.2"></Entity>
            <Entity primitive='a-sky' color="FFFFFF" material="src:#sky" rotation={{x:0,y:0,z:0}}/>
        </Scene>
    </div>
}
