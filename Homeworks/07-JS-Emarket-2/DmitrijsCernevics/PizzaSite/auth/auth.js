

// Это как заданный шаблон по которому мы хотим получать наши ключи и их значение
class User {
    constructor(id, firstName, lastName, email, password, role){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}


// После того как пользователь нажал кнопку и вызвал эту функцию, мы достаём значение по ИД. Затем задаём переменные для каждого из полученного ИД.
function register() {
    const id        = Math.floor(Math.random()*1000000)
    const firstName = document.getElementById('firstName').value; 
    const lastName  = document.getElementById('lastName').value;
    const email      = document.getElementById('email').value;
    const password  = document.getElementById('password').value;
    const role      = document.getElementById('role').value;

     // Создаём новый объект, который мы назвали User и он передаём эти поля в шаблон
    const newUser   = new User (id, firstName, lastName, email, password, role);

    //Так как в localStorage мы хранить объекты и передавать их на bcakend не можем, то превращаем объект newUser в строку
    localStorage.setItem(id, JSON.stringify(newUser))

    // Превращаем строку newUser обратно в объект вот так:  localStorage.getItem(id, JSON.parse(newUser))

}

// Мы получаем 2 значения при нажатии на функцию логин
function login() {
    const email      = document.getElementById('loginEmail').value;
    const password  = document.getElementById('loginPassword').value;

    //Превращаем полученные строки в объекты и сохраняем в users
    const users = JSON.parse(localStorage.getItem(email, password));


// Цикл который по букве проверяет есть ли данный пользователь в users
    for ( i=0; i < users.lenght; i++ ) {
        userExists = users[i]
        if (users.email === email && users.password === password){
            alert('success');
        }
    }
}