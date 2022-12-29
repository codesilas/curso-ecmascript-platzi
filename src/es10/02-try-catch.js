
// antes no se podía controlar el mensaje de error
try {
    hello();
} catch (error) {
    console.log(error);
}

// ahora se puede controlar el error,
// elimninando el parametro y pasando el mensaje en el
// console.log
try {
    hello();
} catch {
    console.log("Este es un error");
}

