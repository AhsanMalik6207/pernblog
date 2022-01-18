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
exports.delete = async function (req, res) {
  try {
    return Post.findByPk(req.params.postId)
      .then((post) => {
        if (!post) {
          return res.status(400).send({
            message: "Post Not Found.",
          });
        }
        return post
          .destroy()
          .then(() =>
            res.status(200).send({
              message: "Post successfully deleted",
            })
          )
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
