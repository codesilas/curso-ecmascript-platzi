// Propagación con objetos

const user = { username : 'Juan', age : 24, country : 'CO'};
const { username, ...values } = user;
console.log(username);
console.log(values);
console.log(user);

// Output:
// Juan
// { age: 24, country: 'CO' }
// { username: 'Juan', age: 24, country: 'CO' }