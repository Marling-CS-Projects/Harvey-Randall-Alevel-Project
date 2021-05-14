// Written By Harvey Randall \\
let renderingList = {};

function checkType(type) {
  if (renderingList[type] === undefined) {
    console.warn(
      "This type does not exist on the renderingList object, is this the right type?"
    );
    renderingList[type] = [];
  }
}

export function addToRenderSequence(type, callback, newType = false) {
  if (newType) {
    renderingList[type] = [];
  }
  checkType(type);
  renderingList[type].push(callback);
  console.log(renderingList);
}

export function renderingInfo(type) {
  checkType(type);
  return renderingList[type].length;
}

export function updateRenderCycle(type) {
  checkType(type);
  renderingList[type].forEach((item) => {
    item();
  });
}
