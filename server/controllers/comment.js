import model from '../models';

const { Comment } = model;
class Comments{
  static create(req, res) {
    const { comment_text} = req.body
    const { userId,postId } = req.params
    return Comment
      .create({
        comment_text,
        userId,
        postId
      })
      .then(comment => res.status(201).send({
        message: `Your comment ${comment_text} has been posted successfully `,
        comment
      }))
    }
    static list(req, res) {
        return Comment
          .findAll()
          .then(comments => res.status(200).send(comments));
    }
    static modify(req, res) {
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
      }
      static delete(req, res) {
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
      }
}
export default Comments;