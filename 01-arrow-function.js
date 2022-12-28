/* arrow function : alternativa a la función clasica
    Algunas caracteristicas:
    - sytaxis más amigable
    - no tiene argumentos o palabras clave new.target
    - no se pueden utilizar como constructor
*/

// función clasica
function square(num) {
    return num * num
}

// se puede hacer uso de var, let y const
const square = (num) => {
    return num * num;
}

// reducir función, con return implicito
const square = num => num * num;