// Written By Harvey Randall \\

import {
    DoubleSide,
    Group,
    Mesh,
    MeshPhongMaterial,
    SphereGeometry,
} from "three";

// Randomly delplace cloud verticies
const map = (val, smin, smax, emin, emax) =>
    ((emax - emin) * (val - smin)) / (smax - smin) + emin;
const jitter = (geometry, per) => {
    for (var i = 0, l = geometry.attributes.position.count; i < l; i++) {
        geometry.attributes.position.array[i * 3] += map(
            Math.random(),
            0,
            1,
            -per,
            per
        );
        geometry.attributes.position.array[i * 3 + 1] += map(
            Math.random(),
            0,
            1,
            -per,
            per
        );
        geometry.attributes.position.array[i * 3 + 2] += map(
            Math.random(),
            0,
            1,
            -per,
            per
        );
    }
};

export class generateClouds {
    constructor(pos, scene, speed, scale) {
        const group = new Group();

        const tuft1 = new SphereGeometry(1.5 * scale, 7, 11);
        tuft1.translate(-2 * scale, 0, 0);

        const tuft3 = new SphereGeometry(1.5 * scale, 7, 11);
        tuft3.translate(2 * scale, 0, 0);

        const tuft2 = new SphereGeometry(2.0 * scale, 7, 11);
        tuft2.translate(0, 0, 0);

        jitter(tuft1, 0.2);
        jitter(tuft2, 0.1);
        jitter(tuft3, 0.1);

        tuft1.computeVertexNormals();

        const mat = new MeshPhongMaterial({
            color: "white",
            flatShading: true,
            side: DoubleSide,
        });

        let cloud = new Mesh(tuft1, mat);
        let cloud1 = new Mesh(tuft2, mat);
        let cloud2 = new Mesh(tuft3, mat);

        group.add(cloud);
        group.add(cloud1);
        group.add(cloud2);

        scene.add(group);
        group.castShadow = true;
        group.receiveShadow = true;
        group.position.x = pos.x;
        group.position.y = pos.y;
        group.position.z = pos.z;

        this.grass = group;
        this.speed = speed;
        this.pos = pos;
    }

    update() {
        let geos = this.grass;
        geos.position.x += this.speed;
        if (geos.position.x > 400) {
            geos.position.x = this.pos.x;
        }
    }
}
