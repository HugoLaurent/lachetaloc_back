const bcrypt = require("bcrypt");
const user = require("../../models/user");

user.beforeCreate((user, options) => {
  if (user.changed("password")) {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
  }
});

module.exports = {
  userHooks: user,
};
