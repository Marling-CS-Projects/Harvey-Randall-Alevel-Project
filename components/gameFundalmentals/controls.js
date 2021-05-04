// Written By Harvey Randall \\

export class ControlHandler {
    constructor(SceneToGet, document){
        this.document = document
    }
    init(){
        let [w, a, s, d, up, down, e, q, shift] = [false, false, false, false, false, false, false, false, 1]

        this.document.addEventListener("keydown", (e) => { onDocumentKeyDown(e, true) }, false);
        this.document.addEventListener("keyup", (e) => { onDocumentKeyDown(e, false) }, false);

        function onDocumentKeyDown(event, val) {
            if(child2 === document.activeElement) return
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
    update(){
        
    }
}