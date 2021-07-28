const fs = require("fs");
const path = require("path");

const filePath = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "users.json"
);

const getUsersFromFiles = (callBack) => {
  fs.readFile(filePath, (err, fileContenet) => {
    if (err) {
      callBack([]);
    } else {
      callBack(JSON.parse(fileContenet));
    }
  });
};

module.exports = class User {
  constructor(id, firstName, lastName, email, password) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  save() {
    getUsersFromFiles((users) => {
      this.id = Math.random().toString();
      users.push(this);
      fs.writeFile(filePath, JSON.stringify(users), (err) => console.log(err));
    });
  }
  static fetchUsers(callBack) {
    getUsersFromFiles(callBack);
  }

  static singIn(email, password, callBack) {
    getUsersFromFiles((users) => {
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      callBack(user);
    });
  }
};
