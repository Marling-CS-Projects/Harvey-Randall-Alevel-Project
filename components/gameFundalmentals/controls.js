// Written By Harvey Randall \\

import { Vector3 } from "three";
let [w, a, s, d, up, down, e, q, shift] = [false, false, false, false, false, false, false, false, 1]

export function ControlHandlerInit(document, child2) {

    document.addEventListener("keydown", (e) => { onDocumentKeyDown(e, true) }, false);
    document.addEventListener("keyup", (e) => { onDocumentKeyDown(e, false) }, false);

    function onDocumentKeyDown(event, val) {
        if (child2 === document.activeElement) return
        var keyCode = event.which;
        if (keyCode == 87) {
            w = val
        }
        if (keyCode == 83) {
            s = val
        }
        if (keyCode == 65) {
            a = val
        }
        if (keyCode == 68) {
            d = val
        }
        if (keyCode == 38) {
            up = val
        }
        if (keyCode == 40) {
            down = val
        }
        if (keyCode == 69) {
            e = val
        }
        if (keyCode == 81) {
            q = val
        }
        if (keyCode == 16) {
            shift = val ? 0.5 : 1
        }
    };
}

export function ControlHandlerUpdate(Camera) {
    if (w) {
        var direction = new Vector3();
        Camera.getWorldDirection(direction);
        Camera.position.add(direction.multiplyScalar(shift == 1 ? 1 : 0.25));
    }
    if (s) {
        var direction = new Vector3();
        Camera.getWorldDirection(direction);
        Camera.position.add(direction.multiplyScalar(-(shift == 1 ? 1 : 0.25)));
    }
    if (a) {
        Camera.rotateY(0.04 * shift)
    }
    if (d) {
        Camera.rotateY(-0.04 * shift)
    }
    if (up) {
        Camera.rotateX(0.04 * shift)
    }
    if (down) {
        Camera.rotateX(-0.04 * shift)
    }
    if (q) {
        Camera.rotateZ(0.02 * shift)
    }
    if (e) {
        Camera.rotateZ(-0.02 * shift)
    }
}