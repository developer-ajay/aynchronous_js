//promise

const promise = new Promise( (resolve , reject) => {
    const randomNumber = Math.floor(Math.random() * 10)
    
    if (randomNumber < 5){
        resolve('Promise fullfilled!')
    }
    else {
        reject('promise rejected!')
    }
})

console.log(promise);
