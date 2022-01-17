const User = require("../models/userprofile");
const multer= require("multer");
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, './images')},
    filename:(req, file, cb) =>{
      cb(null,Date.now() + '--' + file.originalname)
    }
});
// middleware
const upload = multer({storage:fileStorageEngine})
exports.create = async function (req, res) {
  try {
      const { firstName, lastName, email, gender, phoneNo,bio, picture} = req.body;
      const user = await User.create({
          firstName: firstName,
          lastName: lastName,
          email: email,
          gender: gender,
          phoneNo: phoneNo,
          bio: bio,
          picture: picture
      });
      return res
          .status(200)
          .json({ status: 200, message: 'User-Profile Created Successfully' });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// update user profile

exports.update = async function (req, res) {
  try {
    const { firstName, lastName, email, gender, phoneNo, bio, picture } = req.body
        return User
          .findByPk(req.params.userprofileId)
          .then((userprofile) => {
            userprofile.update({
              firstName: firstName || userprofile.firstName,
              lastName: lastName || userprofile.lastName,
              email: email || userprofile.email,
              gender: gender || userprofile.gender,
              phoneNo: phoneNo || userprofile.phoneNo,
              bio: bio || userprofile.bio,
              picture: picture || userprofile.picture
            })
            .then((updatedProfile) => {
              res.status(200).send({
                message: 'profile updated successfully',
                data: {
                  firstName: firstName || updatedProfile.firstName,
                  lastName: lastName || updatedProfile.lastName,
                  email: email || updatedProfile.email,
                  gender: gender || updatedProfile.gender,
                  phoneNo: phoneNo || updatedProfile.phoneNo,
                  bio: bio || updatedProfile.bio,
                  picture: picture || updatedProfile.picture
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

// delete 

exports.delete = async function (req, res) {
  try {
    return User
    .findByPk(req.params.userprofileId)
    .then(userprofile => {
      if(!userprofile) {
        return res.status(400).send({
        message: 'profile Not Found',
        });
      }
      return userprofile
        .destroy()
        .then(() => res.status(200).send({
          message: 'User Profile successfully deleted'
        }))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

