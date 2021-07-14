// Created by Harvey Randall to Automate the creation and handling of web workers \\

import { ArrowFunction } from "typescript";

// OK first thing first, we need to turn the file into a data blob

/**
* Turn JS file into a datablob and then into a web worker
* @param {worker} str The actual code for the worker to be parsed
* @returns {Worker}
*/
export function GenerateWebWorker(worker:string, globalVars:string[], returnFunc: Function):Worker{
    // First thing if its not a string make it a string
    const code = worker.toString();

    //We may need to add the calling context so we should add the global vars
    let inputStuff = `let globalVars = ${globalVars};\n`

    //Next Create the blob in a self running function
    const blob = new Blob([inputStuff + "(" + code + ")()"], { type: 'text/javascript' });

    //Then return the web worker
    let workerOut = new Worker(window.URL.createObjectURL(blob), { type: 'module' })

    //Check if web worker wants to terminate itself
    workerOut.addEventListener('message', (e) => returnFunc(e), false)  

    return workerOut
}

export function TerminteWorkerExternally(worker:Worker):boolean{
    try{
       worker.terminate() 
       return true
    }catch(e){
        return false
    }
    
}