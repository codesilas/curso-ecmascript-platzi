// uso de getters y setters para privacidad en clases
// se coloca # antes del name #variable_privada 



// declarar clase
class User {};

// instanciando la clase
const newUser = new User();

class user {
    // metodos
    greeting() {
        return "Hola";
    }
};

const persona = new user();
console.log(persona.greeting());

// herencia
const dev = new user();
console.log(dev.greeting());

// constructor

class user {
    // función constructora, se ejecuta al instanciar el objeto
    constructor() {
        console.log('nuevo usuario')
    }
    greeting() {
        return "Hola";
    }
}

const joven = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodo
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// getter y setters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    // metodo
    #speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`
    }

    get #uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const dev2 = new user('Silas', 26);
console.log(dev2.uAge);
console.log(dev2.uAge = 27);