const Commentlike = require("../models/commentlike");
const jwt = require("jsonwebtoken")
exports.commentlike = async function (req, res) {
  try {
    const { postId,userId,commentId} = req.params
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    const useri = decodedToken.userId
    if (useri == userId) {
    return Commentlike
      .create({
        postId,
        userId,
        commentId
      })
      .then(commentlike => res.status(201).send({
        message: `Your have liked the comment`,
        commentlike
      }))
  } else {
    res.status(500).json({
      message: "User is not authenticated to like this comment!",
    });
  }} catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};


exports.commentunlike = async function (req, res) {
  try {
    return Commentlike
          .findByPk(req.params.commentlikeId)
          .then(commentlike => {
            return commentlike
              .destroy()
              .then(() => res.status(200).send({
                message: 'You have unliked the comment that you liked before'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};