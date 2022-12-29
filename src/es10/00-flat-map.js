// flat
const array = [1,2,3,4,[1,2,3,4,[1,2,3,4,]]];
console.log(array.flat(2));
console.log(array.flat(1));
console.log(array.flat(0));
// muestra los array anidados como uno plano según los niveles
// indicados

// flatmap
const array2 = [1,2,3];
console.log(array2.flatMap(v => [v * v + v]));
// permite aplica a cada elemento de un array un arrayfunction