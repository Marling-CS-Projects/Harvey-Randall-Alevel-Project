// Written By Harvey Randall \\

// This file aims to make communicatiom between client and server a lot easier, using promise

//-------------[   Imports   ]-------------\\
import { PriorityQueue } from "../Algorithms/PriorityQueue";
import * as Joi from "joi";

//-------------[Core Variables]-------------\\
let client;
let Queue = new PriorityQueue((a, b) => a.prority > b.prority);

/**
 *  @param {string} socket - The socket io Client
 */
export function startSeverClientCommunication(socket) {
  client = socket;

  //Data Handshake
  socket.emit("ConnectionEstablised", Date.now());
}

/**
 *  @param {string} event - The Event name
 *  @param {array} data   - The data to send to the server
 */
export function sendDataWithPromise(event, data) {
  //-------------[   Create a basic promise to return data   ]-------------\\
  const DataPromise = new Promise((resolve, reject) => {
    let resolved = false;
    try {
      client.emit(event, ...data);

      client.on(event + "_Callback", (...args) => {
        resolved = true;
        resolve(...args);
      });
    } catch (err) {
      resolved = true;
      reject(err);
    }
    setTimeout(() => {
      if (resolved === false) {
        resolved = true;
        reject("No data returned within 2 seconds, is there a data callback?");
      }
    }, 2000);
  });
  return DataPromise;
}

/**
 *  @param {string} event        - The Event name
 *  @param {function} callback   - The function that will be called with the data back
 */
export function listenToEvent(event, callback) {
  // Attach event handle to functions
  client.on(event, callback);
}

export function sendDataToServer(event, data){
  client.emit(event, ...data)
}

/**
 *  @param {function} callback   - The function that will listen to all events sent to the client
 */
export function attachToMainEventStream(callback) {
  client.onAny((eventName, ...args) => {
    callback(eventName, args);
  });
}

/**
 *  @param {string} event        - The name of the event to listen to
 *  @param {scema} scema         - The data scheme to folow
 *  @param {function} callback   - The function that will be called with the data
 */
export async function listenForEventWithSchemaValidation(
  event,
  scema,
  callback
) {
  listenToEvent(event, (args) => {
    const { error, value } = scema.validate(args);
    if (error) {
      throw new Error("Scehma Check Failed");
    } else {
      callback(value);
      return value;
    }
  });
}

export function addDataToQueue(event, data, callback, prority = 1) {
  Queue.push({ prority, input: [event, data, callback] });
}


export async function joinGame(gameId, password) {
  try{
    let [seed, clients, userData] = await sendDataWithPromise("GameConnect", [gameId, password])
    if(seed === false){
      return false
    }
    return { seed, clients, userData }
  }catch{
    return true
  }
  
}

//-------------[   All Non essesntial communication   ]-------------\\
setInterval(async () => {
  if (!Queue.isEmpty()) {
    let func = Queue.pop();
    let input = func.input;
    let callBack = input[2];
    try {
      //Destructure and send data
      let data = await sendDataWithPromise(input[0], ...input[1]);
      callBack(false, data);
    } catch {
      callBack(true, []);
    }
  }
}, 500);
