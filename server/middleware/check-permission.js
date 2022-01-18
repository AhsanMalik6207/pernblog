const RoleHasPermission = require('../models/RoleHasPermission');
const Permission = require('../models/Permission');
function checkPermission(roleId, permName) {
    return new Promise(
        (resolve, reject) => {
            Permission.findOne({
                where: {
                    perm_name: permName
                }
            }).then((perm) => {
                RoleHasPermission.findOne({
                    where: {
                        role_id: roleId,
                        perm_id: perm.id
                    }
                }).then((roleHasPermission) => {
                    if(roleHasPermission) {
                        resolve(roleHasPermission);
                    } else {
                        reject({message: 'Forbidden'});
                    }
                }).catch((error) => {
                    reject(error);
                });
            }).catch(() => {
                reject({message: 'Forbidden'});
            });
        }
    );
}