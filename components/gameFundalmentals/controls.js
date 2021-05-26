// Written By Harvey Randall \\

import { Vector3 } from "three";
import { v4 } from "uuid";
let [w, a, s, d, up, down, e, q, shift] = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    1,
];

export function controlHandlerInit(document, child2) {
    /*eslint complexity: ["error", 20]*/
    function onDocumentKeyDown(event, val) {
        if (child2 === document.activeElement) {
            return;
        }
        var keyCode = event.which;
        if (keyCode === 87) {
            w = val;
        }
        if (keyCode === 83) {
            s = val;
        }
        if (keyCode === 65) {
            a = val;
        }
        if (keyCode === 68) {
            d = val;
        }
        if (keyCode === 38) {
            up = val;
        }
        if (keyCode === 40) {
            down = val;
        }
        if (keyCode === 69) {
            e = val;
        }
        if (keyCode === 81) {
            q = val;
        }
        if (keyCode === 16) {
            shift = val ? 0.5 : 1;
        }
    }

    document.addEventListener(
        "keydown",
        (e) => {
            onDocumentKeyDown(e, true);
        },
        false
    );
    document.addEventListener(
        "keyup",
        (e) => {
            onDocumentKeyDown(e, false);
        },
        false
    );
}

/*eslint complexity: ["error", 20]*/
export function controlHandlerUpdate(Camera) {
    if (w) {
        let direction = new Vector3();
        Camera.getWorldDirection(direction);
        Camera.position.add(direction.multiplyScalar(shift === 1 ? 1 : 0.25));
    }
    if (s) {
        let direction = new Vector3();
        Camera.getWorldDirection(direction);
        Camera.position.add(
            direction.multiplyScalar(-(shift === 1 ? 1 : 0.25))
        );
    }
    if (a) {
        Camera.rotateY(0.04 * shift);
    }
    if (d) {
        Camera.rotateY(-0.04 * shift);
    }
    if (up) {
        Camera.rotateX(0.04 * shift);
    }
    if (down) {
        Camera.rotateX(-0.04 * shift);
    }
    if (q) {
        Camera.rotateZ(0.02 * shift);
    }
    if (e) {
        Camera.rotateZ(-0.02 * shift);
    }
}


let listeningHooks = {};
export function ControlEventListener(ocument, child2) {
    let [wKey, aKey, sKey, dKey, upKey, downKey, eKey, qKey, shiftKey, zKey, xKey] = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];

    function onDocumentKeyDownEvent(event, val) {
        if (child2 === document.activeElement) {
            return;
        }
        var keyCode = event.which;
        if (keyCode === 87) {
            wKey = val;
        }
        if (keyCode === 83) {
            sKey = val;
        }
        if (keyCode === 65) {
            aKey = val;
        }
        if (keyCode === 68) {
            dKey = val;
        }
        if (keyCode === 38) {
            upKey = val;
        }
        if (keyCode === 40) {
            downKey = val;
        }
        if (keyCode === 69) {
            eKey = val;
        }
        if (keyCode === 81) {
            qKey = val;
        }
        if (keyCode === 88) {
            zKey = val;
        }
        if (keyCode === 90) {
            xKey = val;
        }
        if (keyCode === 16) {
            shiftKey = val ? 0.5 : 1;
        }
        for (const [key, value] of Object.entries(listeningHooks)) {
            value({wKey, aKey, sKey, dKey, upKey, downKey, eKey, qKey, shiftKey, zKey, xKey})
        }
    }

    document.addEventListener(
        "keydown",
        (e) => {
            onDocumentKeyDownEvent(e, true);
        },
        false
    );
    document.addEventListener(
        "keyup",
        (e) => {
            onDocumentKeyDownEvent(e, false);
        },
        false
    );
}

export function listenToConrols(arg) {
    let uuid = v4();
    listeningHooks[uuid] = arg;
    return uuid;
}
export function CleanUpListener(uuid) {
    delete listeningHooks[uuid];
}
