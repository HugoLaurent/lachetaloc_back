const bcrypt = require("bcrypt");
const User = require("../../models/user");

User.beforeCreate((user, options) => {
  if (user.changed("password")) {
    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
  }
});

module.exports = {
  userHooks: User,
};
