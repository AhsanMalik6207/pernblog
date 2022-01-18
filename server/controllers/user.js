
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

let refreshtokens = [];
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

exports.renewaccesstoken = async function (req, res) {
  try {
    const refreshtoken = req.body.token;
    if (!refreshtoken || !refreshtokens.includes(refreshtoken)) {
      return res.json({ message: "Refresh token not found, login again" });
    }
    jwt.verify(refreshtoken, process.env.JWT_REFRESH_KEY, (err, user) => {
      if (!err) {
        const accesstoken = jwt.sign(
          { username: user.name },
          process.env.JWT_KEY,
          {
            expiresIn: "30s",
          }
        );
        return res.json({ success: true, accesstoken });
      } else {
        return res.json({
          success: false,
          message: "Invalid refresh token",
        });
      }
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.login = async function (req, res) {
  try {
    User.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user === null) {
        res.status(401).json({
          message: "Invalid credentials!",
        });
      } else {
        if (req.body.password == user.password) {
          const accesstoken = jwt.sign(
            {
              email: user.email,
              userId: user.id,
            },
            process.env.JWT_KEY,
            { expiresIn: "30s" }
          );
          const refreshtoken = jwt.sign(
            {
              email: user.email,
              userId: user.id,
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "1y" }
          );
          refreshtokens.push(refreshtoken);
          res.status(200).json({
            accesstoken,
            refreshtoken,
          });
        } else {
          res.status(401).json({
            message: "Invalid credentials!",
          });
        }
      }
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

export default Users;
const User = require('../models/user');

exports.create = async function (req, res) {
	try {
		const { name, username, email, password } = req.body;
		const user = await User.create({
			name: name,
			username: username,
			email: email,
			password: password,
		});
		return res
			.status(200)
			.json({ status: 200, message: 'User Created Successfully' });
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

exports.getAll = async function (req, res) {
	try {
		const users = await User.findAll({});
		// console.log('params are', req.params);
		return res.status(200).json({
			status: 200,
			data: users,
			message: 'Succesfully User Retrieved',
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

exports.update = async function (req, res) {
	try {
		const { name, username, email, password } = req.body;
		return User.findByPk(req.params.userId)
			.then((user) => {
				user.update({
					name: name || user.name,
					username: username || user.username,
					email: email || user.email,
					password: password || user.password,
				})
					.then((updatedUser) => {
						res.status(200).send({
							message: 'User updated successfully',

							data: {
								name: name || updatedUser.name,
								username: username || updatedUser.username,
								email: email || updatedUser.email,
								password: password || updatedUser.password,
							},
						});
					})
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

exports.delete = async function (req, res) {
	try {
		return User.findByPk(req.params.userId)

			.then((user) => {
				if (!user) {
					return res.status(400).send({
						message: 'User Not Found',
					});
				}
				return user
					.destroy()
					.then(() =>
						res.status(200).send({
							message: 'User successfully deleted',
						})
					)
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};