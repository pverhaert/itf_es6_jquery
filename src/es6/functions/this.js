const primaryBtn = document.querySelector('button.primary');
const secondaryBtn = document.querySelector('button.secondary');

// regular function
primaryBtn.addEventListener('click', function (e) {
    console.log('this inside normal function', this);
});

// arrow function
secondaryBtn.addEventListener('click', (e) => {
    console.log('this inside arrow function', this);
    console.log('e.target', e.target);
});

// user1 is an object literal
const user1 = {
    // properties
    name: 'John',
    surname: 'Doe',
    // functions (or methodes)
    greet() {
        console.log(`Hi, ${this.name} ${this.surname}`);
    },
};
