var lastName = 'David'; // declarado/asingación de variable
lastName = 'Oscar'; // reasignación de valor
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'cat'; // NO SE PUEDE REASIGNAR una constante
console.log(animal);

const fruits = () => {
    if(true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
    }
    console.log(fruit1); // function scope
    console.log(fruit2); // block scope
    console.log(fruit3); // block scope
}

fruits();