class User {
    // properties (age has a default value of 25)
    constructor(name, surname, age = 25) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isAdult = this.age > 18;
    }

    // methodes
    greet() {
        return `Hi, ${this.name} ${this.surname}`;
    }
}

// instantiate the User class
const user1 = new User('John', 'Doe');
const user2 = new User('Jane', 'Doe', 17);

// log the user objects
console.log(user1.greet(), user1);
console.log(user2.greet(), user2);

// convert the user objects to a readable string
document.querySelector('pre').textContent = `
${JSON.stringify(user1)}
${JSON.stringify(user2)}
`;
