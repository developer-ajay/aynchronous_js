//promise.then & .catch

const promise = new Promise( (resolve , reject) => {
    const randomNumber = Math.floor(Math.random() * 10)
    
    if (randomNumber < 5){
        resolve('You guessed it right')
    }
    else {
        reject('Sorry,Wrong answer')
    }
})

promise.then( (value) => {
   console.log(value); 
})
.catch( (error) => {
  console.log(error);
  
})