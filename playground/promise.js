var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey. It worked');
        reject('Hey. It didnt work');
    }, 2500);
});

somePromise.then(
    (message) => {
        console.log('Success: ', message);
    },
    (errorMessage) => {
        console.log('Error: ', errorMessage);
    }
);
