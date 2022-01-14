const User = require("../models/user");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();
exports.register = async function (req, res) {
  try {
    const { name,username, email, password } = req.body
    const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );
    if (alreadyExistsUser) {
        return res.status(409).json({ message: "User with email already exists!" });
    }
    return User
        .create({
            name,
            username,
            email,
            password
        })
        .then(userData => res.status(201).send({
            success: true,
            message: 'User successfully created',
            userData
        })).catch(error => {
            res.status(500).json({
                message: "Something went wrong!",
            });
        });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.login = async function (req, res) {
  try {
    User.findOne({ where: { email: req.body.email } }).then(user => {
      if (user === null) {
          res.status(401).json({
              message: "Invalid credentials!",
          });
      } else {
        if (req.body.password == user.password) {
          const token = jwt.sign({
              email: user.email,
              userId: user.id
          }, process.env.JWT_KEY, { expiresIn: "90s" },function (err, token) {
              res.status(200).json({
                  message: "Authentication successful!",
                  token: token
              });
          });
      }else {
              res.status(401).json({
                  message: "Invalid credentials!",
              });
          }
      }
  }).catch(error => {
      res.status(500).json({
          message: "Something went wrong!",
      });
  });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
