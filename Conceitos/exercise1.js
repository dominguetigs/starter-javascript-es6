class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.admin = false;
  }

  isAdmin() {
    return this.admin;
  }
}

class Admin extends User {
  constructor(email, password) {
    super(email, password);
    this.admin = true;
  }
}


const email = 'email@test.com';
const password = 'password123';

const user = new User(email, password);
const admin = new Admin(email, password);


console.log(user.isAdmin());
console.log(admin.isAdmin());
