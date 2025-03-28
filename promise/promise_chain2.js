//promise_chain

const promise = new Promise( (resolve) => {
    resolve('Promise one fullfilled!')
});

const promise2 = new Promise( (resolve) => {
    resolve('Promise Two fullfilled!')
});

const promise3 = new Promise( (reject) => {
    reject('Promise Three rejected!')
});

promise
.then( (data) => {
    console.log(data)
    return promise2
})
.then( (data) => {
    console.log(data)
    return promise3
})
.then( (data) => {
    console.log(data)
}).catch( (error) => {
    console.log(error)
})