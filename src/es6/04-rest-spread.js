// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits
console.log(a, b);

// Object destructuring

let user = { username: 'Oscar', age: 34}
let { username, age } = user;
console.log(username, user.age);

// spread operator (operador de prograpagación)
// Como funciona:

let person = {name: 'Oscar', age: 28};
let country = 'MX';

// crear una variable en la que se unan los elementos

let data = { ...person, country}
console.log(data)

/* lo que hace es que al colocar los tres puntos "...",
    toma la estructura de ese elemento, y le agrega otro con coma ","
*/

// otro ejemplo:

let id = 123;
let dataWithID = {id, ...person, country};
console.log(dataWithID);

// rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(5,2,3,4);
// en este caso, el primer valor "5" se asigna a num, y el resto a values
// por lo que el resultado es:
// 7, porque 5 se suma al primer elemento de values que es 2

// no es recomendable usar más de 3 paramtros indefinidos