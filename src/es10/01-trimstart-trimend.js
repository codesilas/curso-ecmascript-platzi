const hello = '        muchos espacios         '

// trimStart
console.log(hello.trimStart());
// elimina los espacios vacios al inicio

// trimEnd
console.log(hello.trimEnd());
// elimina los espacios al final

console.log(hello.trimEnd().trimStart());
// elimina espacios al inicio y al final
