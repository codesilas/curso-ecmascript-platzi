const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Logrado!')
        } else {
            reject('No funcionó.')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));
