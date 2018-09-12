// let P =

const promiseEvent =(n)=>{
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (n > 10) {
                resolve(n);
            }
            if (n <= 10) {
                reject(new Error(console.log('reject')))
            }
        },n*100)
    }).catch((error)=>{
        console.log('jsCatch',error);
    })
    // return P;
}
export default promiseEvent