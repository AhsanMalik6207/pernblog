const Comment = require("../models/comment");
exports.getAll = async function (req, res) {
  try {
    return Comment
    .findAll()
    .then(comments => res.status(200).send(comments));
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.create = async function (req, res) {
  try {
    const { comment_text} = req.body
    const { postId } = req.params
    return Comment
      .create({
        comment_text,
        postId
      })
      .then(comment => res.status(201).send({
        message: `Your comment ${comment_text} has been posted successfully `,
        comment
      }))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.update = async function (req, res) {
  try {
    const { comment_text } = req.body
        return Comment
          .findByPk(req.params.commentId)
          .then((comment) => {
            comment.update({
              comment_text: comment_text || comment.comment_text,
            })
            .then((updatedComment) => {
              res.status(200).send({
                message: 'Comment updated successfully',
                data: {
                  comment_text: comment_text || updatedComment.comment_text,
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
    return Comment
          .findByPk(req.params.commentId)
          .then(comment => {
            if(!comment) {
              return res.status(400).send({
              message: 'Comment Not Found',
              });
            }
            return comment
              .destroy()
              .then(() => res.status(200).send({
                message: 'Comment successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

