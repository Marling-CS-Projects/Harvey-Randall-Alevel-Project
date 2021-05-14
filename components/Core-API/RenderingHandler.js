// Written By Harvey Randall \\
let renderingList = {};

function checkType(type) {
    if (typeof renderingList[type] === "undefined") {
        renderingList[type] = [];
    }
}

export function addToRenderSequence(type, callback, newType = false) {
    if (newType) {
        renderingList[type] = [];
    }
    checkType(type);
    renderingList[`${type}`].push(callback);
}

export function renderingInfo(type) {
    checkType(type);
    return renderingList[`${type}`].length;
}

export function updateRenderCycle(type) {
    checkType(type);
    renderingList[`${type}`].forEach((item) => {
        item();
    });
}
