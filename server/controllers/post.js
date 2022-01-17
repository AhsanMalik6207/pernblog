const Post = require("../models/post");

exports.getAll = async function (req, res) {
  try {
    const posts = await Post.findAll({});
    return res.status(200).json({
      status: 200,
      data: posts,
      message: "Succesfully Post Retrieved",
    });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.create = async function (req, res) {
  try {
    return res
      .status(200)
      .json({ status: 200, message: "Post Created Successfully" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};