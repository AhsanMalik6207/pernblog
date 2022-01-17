const User = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
exports.register = async function (req, res) {
  try {
    const { name, username, email, password } = req.body;
    const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
      (err) => {
        console.log("Error: ", err);
      }
    );
    return User.create({
      name,
      username,
      email,
      password,
    })
      .then((userData) =>
        res.status(201).send({
          success: true,
          message: "User successfully created",
          userData,
        })
      )
      .catch((error) => {
        if (alreadyExistsUser) {
          res.status(500).json({
            message: "User with email already exists!",
          });
        } else if (password.length < 8) {
          res.status(500).json({
            message: "Password should be at least 8 characters",
          });
        } else {
          res.status(500).json({
            message: "Something went wrong!",
          });
        }
      });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

export default Users;
