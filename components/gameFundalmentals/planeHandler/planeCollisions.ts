import { group } from "console";
import { Group, Plane, Raycaster, Scene, Vector3 } from "three";

let collisionCheckTime = 500

export class CheckPlaneCollisions {
    private Plane:Group
    private interval: NodeJS.Timeout | undefined
    private raycaster: Raycaster =  new Raycaster();
    private direction:Vector3 = new Vector3(1,0,0); 
    private Scenes: Scene

    constructor(mainPlane:Group, Scenes:Scene){
        this.Plane = mainPlane
        this.Scenes = Scenes
    }

    updateCycle(){
        this.interval = setInterval(() => {
            this.checkForObjects()
        }, collisionCheckTime)
    }

    private checkForObjects(){
        let origin = this.Plane.position
        this.direction.set( 0, 0, - 1 ).normalize();
        this.raycaster.set( origin, this.direction );
        let intersects = this.raycaster.intersectObjects( this.Scenes.children, false );
        intersects = intersects.filter((e) => {
            if(e.distance > 10){
                return false
            }
            if(e.object.type === "GridHelper"){
                return false
            }
            return true
        })
        if ( intersects.length > 0 ) {      
            console.log(intersects)
            // your code        
        }
    }

    stopUpdating(){
        if(this.interval){
            clearInterval(this.interval)
        }
    }
}