// Written By Harvey Randall \\
let renderingList = {}

function CheckType(type){
    if(renderingList[type] === undefined){
        console.warn("This type does not exist on the renderingList object, is this the right type?")
        renderingList[type] = []
    }
}

export function addToRenderSequence(type, callback, newType = false){
    if(newType){
        renderingList[type] = []
    }
    CheckType(type)
    renderingList[type].push(callback)
    console.log(renderingList)
}

export function RenderingInfo(type){
    CheckType(type)
    return renderingList[type].length
}

export function UpdateRenderCycle(type){
    CheckType(type)
    renderingList[type].forEach((item) => {
        item()
    })
}