// promesa
// async y await controlan el flujo

const fnAsync = () => {
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve ('Luego de esperar 2 segundos'),2000)
            :reject(new Error('Error!'));
    });
}

const anotherFn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Antes');
anotherFn();
console.log('Despues');
