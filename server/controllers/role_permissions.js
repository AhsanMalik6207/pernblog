const rolePermission = require('../models/role_has_permissions');

exports.getAll = async function (req, res) {
	try {
		const rolepermission = await rolePermission.findAll({});
		// console.log('params are', req.params);
		return res.status(200).json({
			status: 200,
			data: rolepermission,
			message: 'Succesfully permissions Retrieved',
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};

exports.create = async function (req, res) {
	try {
		const { permission_Name } = req.body;
		const { roleId, permId } = req.params;
		const permission = await rolePermission.create({
			roleId: roleId,
			permId: permId,
		});
		return res.status(200).json({
			status: 200,
			message: 'Role_Permission Created Successfully',
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};
