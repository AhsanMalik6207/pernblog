const Permission = require('../models/permissions');

exports.getAll = async function (req, res) {
	try {
		const permissions = await Permission.findAll({});
		// console.log('params are', req.params);
		return res.status(200).json({
			status: 200,
			data: permissions,
			message: 'Succesfully permissions Retrieved',
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

exports.create = async function (req, res) {
	try {
		const { permission_Name } = req.body;
		const permission = await Permission.create({
			permission_Name: permission_Name,
		});
		return res
			.status(200)
			.json({ status: 200, message: 'Permission Created Successfully' });
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

exports.delete = async function (req, res) {
	try {
		return Permission.findByPk(req.params.permId)

			.then((permission) => {
				if (!permission) {
					return res.status(400).send({
						message: 'Permission Not Found',
					});
				}
				return permission
					.destroy()
					.then(() =>
						res.status(200).send({
							message: 'Permission successfully deleted',
						})
					)
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

exports.update = async function (req, res) {
	try {
		const { permission_Name } = req.body;
		return Permission.findByPk(req.params.permId)
			.then((permission) => {
				permission
					.update({
						permission_Name: permission_Name || permission.title,
					})
					.then((updatedPermission) => {
						res.status(200).send({
							message: 'Permissions updated successfully',

							data: {
								permission_Name:
									permission_Name || updatedPermission.title,
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
