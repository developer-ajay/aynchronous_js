const showMessage = (callback) => {
    console.log(callback);
}

const firstMessage = (callback) => {
    setTimeout( () => {
        console.log('Hello');
        callback();
    })
}

const secondMessage = () => {
    showMessage('World');
}

firstMessage(secondMessage);