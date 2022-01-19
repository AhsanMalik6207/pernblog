const Like = require("../models/like");
const jwt = require("jsonwebtoken")
exports.like = async function (req, res) {
  try {
    const { postId,userId} = req.params
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    const useri = decodedToken.userId
    if (useri == userId) {
    return Like
      .create({
        postId,
        userId
      })
      .then(like => res.status(201).send({
        message: `Your have liked the post`,
        like
      }))
  } else {
    res.status(500).json({
      message: "User is not authenticated to like a post!",
    });
  }} catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.unlike = async function (req, res) {
  try {
    return Like
          .findByPk(req.params.likeId)
          .then(like => {
            return like
              .destroy()
              .then(() => res.status(200).send({
                message: 'You have unliked the post that you liked before'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};