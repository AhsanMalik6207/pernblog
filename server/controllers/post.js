const Post = require("../models/post");

exports.getAll = async (req, res) => {
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

exports.create = async (req, res) => {
  try {
    const post = await Post.create({
      id: 2,
      title: "Jane",
      description: "It is the description",
      userId: "b2db9937-051d-4dfe-8adb-2e056fd16432",
    });

    return res
      .status(200)
      .json({ status: 200, message: "Post Created Successfully" });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
