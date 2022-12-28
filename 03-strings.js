let hello = 'hello';
let world = 'world';

// concatenar antes de ES6
let epicPhrase = hello + " " + world;
console.log(epicPhrase)

// template literals
// uso de comillas francesas: `` y ${variables}
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)

// en ES6 se agregó multi-line strings
let lorem = "esto es un string\n" + "otra linea";
let lorem2 = `Esta es una frase epica
y esta es la continuación en otra linea`;

console.log(lorem)
console.log(lorem2)