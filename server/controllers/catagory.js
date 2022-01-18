const Catagory = require("../models/catagory");
const { Op } = require("sequelize");

////Function for Search///////

exports.search = async function (req, res) {
  try {
    
    const key = req.body.key;

    const items = await Catagory.findAll({
      where: {
        Name: {
          [Op.iLike]: `%${key}%`
        }
      }
    });

    return res.status(200).json({
      status: 200,
      data: items,
      message: "Categories searched succesfully",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
///////Function for Search End/////

exports.getAll = async function (req, res) {
  try {
    const items = await Catagory.findAll({});
    return res.status(200).json({
      status: 200,
      data: items,
      message: "Succesfully Post Retrieved",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.create = async function (req, res) {
  try {
    const { Name} = req.body;
    const CatagoryPost = await Catagory.create({
      Name: Name,
    });
    return res.status(200).json({ status: 200, data: CatagoryPost});
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
exports.update = async function (req, res) {
  try {
    const { Name } = req.body;
        return Catagory
          .findByPk(req.params.CatagoryId)
          .then((catagory) => {
            catagory.update({
              Name:Name || catagory.Name,
            })
            .then((updatedCatagory) => {
              res.status(200).send({
                message: 'Post updated successfully',
                data: {
                 Name:Name || updatedCatagory.Name,
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
    return Catagory
    .findByPk(req.params.CatagoryId)
    .then(catagory => {
      if(!catagory) {
        return res.status(400).send({
        message: 'Catagory Not Found',
        });
      }
      return catagory
        .destroy()
        .then(() => res.status(200).send({
          message: 'Catagory successfully deleted'
        }))
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
