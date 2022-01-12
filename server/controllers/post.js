import model from '../models';

const { Post } = model;

class Posts {
  static create(req, res) {
    const { title, image, description } = req.body
    const { userId } = req.params
    return Post
      .create({
        title,
        image,
        description,
        userId
      })
      .then(post => res.status(201).send({
        message: `Your post with the title ${title} has been created successfully `,
        post
      }))
    }
    static list(req, res) {
        return Post
          .findAll()
          .then(posts => res.status(200).send(posts));
    }
    static modify(req, res) {
        const { title, image, description } = req.body
        return Post
          .findByPk(req.params.postId)
          .then((post) => {
            post.update({
              title: title || post.title,
              image: image || post.image,
              description: description || post.description,
            })
            .then((updatedPost) => {
              res.status(200).send({
                message: 'Post updated successfully',
                data: {
                  title: title || updatedPost.title,
                  image: image || updatedPost.image,
                  description: description || updatedPost.description,
                }
              })
            })
            .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }
      static delete(req, res) {
        return Post
          .findById(req.params.postId)
          .then(post => {
            if(!post) {
              return res.status(400).send({
              message: 'Post Not Found',
              });
            }
            return post
              .destroy()
              .then(() => res.status(200).send({
                message: 'Post successfully deleted'
              }))
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error))
      }
}
export default Posts;