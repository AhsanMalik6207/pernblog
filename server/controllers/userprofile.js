const Userprofile = require("../models/userprofile");
const { use } = require("../routes");
exports.create = async function (req, res) {
  try {
    const { firstName, lastName, email, gender, phoneNo, bio, nationality } = req.body
    return Userprofile
      .create({
        firstName,
        lastName,
        email,
        gender,
        phoneNo,
        bio,
        nationality
      })
      .then(userprofile => res.status(201).send({
        message: `Your profile has been created successfully `,
        userprofile
      }))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.update = async function (req, res) {
  try {
    const { firstName, lastName, email, gender, phoneNo, bio, nationality } = req.body
        return Userprofile
          .findByPk(req.params.userprofileId)
          .then((userprofile) => {
            userprofile.update({
              firstName: firstName || userprofile.firstName,
              lastName: lastName || userprofile.lastName,
              email: email || userprofile.email,
              gender: gender || userprofile.gender,
              phoneNo: phoneNo || userprofile.phoneNo,
              bio: bio || userprofile.bio,
              nationality: nationality || userprofile.nationality
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
                  nationality: nationality || updatedProfile.nationality
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
exports.delete = async function (req, res) {
  try {
    return Userprofile
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

