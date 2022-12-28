// así se hacía antes
function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 25;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('David', 15,'CO')

// Ahora, ES6:
function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 34);