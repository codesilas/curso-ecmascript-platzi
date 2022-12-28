// enhanced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser("abc", 18, 'ES', 1));