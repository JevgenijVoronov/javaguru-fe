class User {
    constructor(id, firstName, lastName, email, password, role) {
        this.id         = id;
        this.firstName  = firstName;
        this.lastName   = lastName;
        this.email      = email;
        this.password   = password;
        this.role       = role;
    }
}

function register() {
    const id        = Math.floor(Math.random() * 1000000)
    const firstName = document.getElementById('firstName').value;
    const lastName  = document.getElementById('lastName').value;
    const email     = document.getElementById('email').value;
    const password  = document.getElementById('password').value;
    const role      = document.getElementById('role').value;

    const newUser   = new User (id, firstName, lastName, email, password, role);
    localStorage.setItem(id, JSON.stringify(newUser))

}

function login() {

}