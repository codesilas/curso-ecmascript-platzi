function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["uno", "dos","tres"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);