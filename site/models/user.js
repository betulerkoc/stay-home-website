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
  constructor(id, fullName, email) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
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
};
