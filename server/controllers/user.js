const User = require("../models/user");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config();

let refreshtokens = [];
exports.register = async function (req, res) {
    try {
        const { name, email, password,active } = req.body
        const { roleId } = req.params
        const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
            (err) => {
                console.log("Error: ", err);
            }
        );
        return User
            .create({
                name,
                email,
                password,
                active,
                roleId
            })
            .then(userData => res.status(201).send({
                success: true,
                message: 'User successfully created',
                userData
            })).catch(error => {
                if (alreadyExistsUser) {
                    res.status(500).json({
                        message: "User with email already exists!",
                    });
                } else if (password.length < 8) {
                    res.status(500).json({
                        message: "Password should be at least 8 characters!",
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
exports.login = async function (req, res) {
    try {        
        User.findOne({ where: { email: req.body.email } }).then(user => {
            if (user === null) {
                res.status(401).json({
                    message: "Invalid credentials!",
                });
            } else {
                if (req.body.password == user.password) {
                    const accesstoken = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, process.env.JWT_KEY, { expiresIn: "1y" })
                    const refreshtoken = jwt.sign({
                        email: user.email,
                        userId: user.id
                    }, process.env.JWT_REFRESH_KEY, { expiresIn: "1y" })
                    refreshtokens.push(refreshtoken);
                    res.status(200).json({
                        accesstoken,
                        refreshtoken
                    });
                } else {
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
exports.renewaccesstoken = async function (req, res) {
    try {
        const refreshtoken = req.body.token;
        if (!refreshtoken || !refreshtokens.includes(refreshtoken)) {
            return res.json({ message: "Refresh token not found, login again" });
        }
        jwt.verify(refreshtoken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (!err) {
                const accesstoken = jwt.sign({ username: user.name }, process.env.JWT_KEY, {
                    expiresIn: "1y"
                });
                return res.json({ success: true, accesstoken });
            } else {
                return res.json({
                    success: false,
                    message: "Invalid refresh token"
                });
            }
        });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
};

exports.disableUser = function(req,res) {
    const { active } = req.body;
    try {
        return User.findByPk(req.params.userId)
            .then((user) => {
                user.update({
                    active: active || user.active
                })
                    .then((updatedUser) => {
                        res.status(200).send({
                            message: 'User Disabled',
                            data: {
                                active: active || updatedUser.active
                            },
                        });
                    })
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}





