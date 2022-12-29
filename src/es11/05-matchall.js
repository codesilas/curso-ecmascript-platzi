// match all
// uso de regex para encontrar coincidencias

const regex = /\b(Apple)+\b/g;
const fruit = "apple, banana, kiwi, apple, orange"

for (const match of fruit.matchAll(regex)) {
    console.log(match)}
