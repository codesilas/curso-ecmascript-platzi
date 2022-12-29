// antes: convierte un objeto en un array
// object.entries ahora puede pasar de un array a un objeto
// util según la transformación de datos que necesitamos

const entries = new Map([["name", "Silas"], ["age", 26]]);
console.log(entries);
console.log(Object.fromEntries(entries));

// se convirtió el array de arrays en un objeto