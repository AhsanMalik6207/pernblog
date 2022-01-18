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
