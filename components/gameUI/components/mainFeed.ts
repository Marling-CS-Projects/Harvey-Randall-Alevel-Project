// Global cache for adding to global feed \\

let feed:{name:string, event:string}[] = []
let hooks:CallableFunction

export function addToFeed(name:string, event:string){
    feed.push({name, event})
    delete feed[10]
    delete feed[11]

    if(hooks){
        hooks(feed)
    }
}

export function addHookToFeed(callback:CallableFunction){
    hooks = callback
}