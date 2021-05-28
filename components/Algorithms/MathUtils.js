export function roundnum(num, toNum) {
    return Math.round(num / toNum) * toNum;
}

export async function wait(val){
    return new Promise((res, rej) => {
        setTimeout(res, val)
    })
}