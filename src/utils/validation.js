const validator = require("validator");

const validate = (req) => {
  const { firstName, lastName, email, password } = req;
  console.log({ firstName, lastName, email, password });
  if (!firstName || !lastName) {
    throw new Error("Name is mandatory field");
  } else if (!validator.isEmail(email)) {
    throw new Error("Enter a valid email id");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password");
  }
};

module.exports = { validate };
