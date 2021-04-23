import * as THREE from 'three';
export class GenerateClouds {
    constructor(pos, scene, speed, scale) {

        const group = new THREE.Group();

        const tuft1 = new THREE.SphereBufferGeometry(1.5*scale,7*scale,11)
        tuft1.translate(-2*scale, 0, 0)


        const tuft3 = new THREE.SphereBufferGeometry(1.5*scale,7*scale,11)
        tuft3.translate(2*scale, 0, 0)

        const tuft2 = new THREE.SphereBufferGeometry(2.0*scale,7*scale,11)
        tuft2.translate(0, 0, 0)



        let cloud = new THREE.Mesh(
            tuft1,
            new THREE.MeshPhongMaterial({
                color: 'white',
                flatShading: true,
            })
        )
        let cloud1 = new THREE.Mesh(
            tuft2,
            new THREE.MeshPhongMaterial({
                color: 'white',
                flatShading: true,
            })
        )
        let cloud2 = new THREE.Mesh(
            tuft3,
            new THREE.MeshPhongMaterial({
                color: 'white',
                flatShading: true,
            })
        )

        group.add(cloud)
        group.add(cloud1)
        group.add(cloud2)

        scene.add(group)
        group.castShadow = true
        group.receiveShadow = true
        group.position.x = pos.x
        group.position.y = pos.y
        group.position.z = pos.z

        this.grass = group
        this.speed = speed   
        this.pos = pos
    }

    update() {
        let geos = this.grass
        geos.position.x +=  this.speed
        if(geos.position.x > 400){
           geos.position.x = this.pos.x
        }
    }
}
