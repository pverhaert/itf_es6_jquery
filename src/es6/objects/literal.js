const user = {
    // properties
    name: 'John',
    surname: 'Doe',
    age: 41,
    // functions (or methodes)
    greet() {
        console.log(`Hi, ${this.name} ${this.surname}`);
    },
};

console.log('user: ', user);
console.log('user.name: ', user.name);
user.greet();

// change the name of the user and delete the age
user.name = 'Jane';
delete user.age;
console.log('user: ', user);
user.greet();

// convert the object to a readable string
document.querySelector('pre').textContent = JSON.stringify(user);
