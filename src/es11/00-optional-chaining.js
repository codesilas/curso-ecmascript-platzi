const users = {
    usuario: {
        country: 'MX'
    }
}

console.log(users.usuario.country) // se accede a cada valor

// optional chaining
// si queremos acceder a un dato que probablemente ya no existe
// pero no queremos que se rompa el programa si no existe

console.log(users?.devjob?.country);
// como no existe devjob en el objeto, continua y devuelve
// undefined pero no detiene el programa, continua su ejecución

