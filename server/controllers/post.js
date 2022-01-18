const Post = require("../models/post");
exports.getAll = async function (req, res) {
  try {
    return Post
    .findAll()
    .then(posts => res.status(200).send(posts));
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.create = async function (req, res) {
  try {
    const { title,description,picture } = req.body
    const { userId } = req.params
    return Post
      .create({
        title,
        description,
        picture,
        userId
      })
      .then(post => res.status(201).send({
        message: `Your post with the title ${title} has been created successfully `,
        post
      }))
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.update = async function (req, res) {
  try {
    const { title, description,picture } = req.body
        return Post
          .findByPk(req.params.postId)
          .then((post) => {
            post.update({
              title: title || post.title,
              description: description || post.description,
              picture: picture || post.picture,
            })
            .then((updatedPost) => {
              res.status(200).send({
                message: 'Post updated successfully',
                data: {
                  title: title || updatedPost.title,
                  description: description || updatedPost.description,
                  picture: picture || updatedPost.picture,
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
    return Post
    .findByPk(req.params.postId)
    .then(post => {
      if(!post) {
        return res.status(400).send({
        message: 'Post Not Found.',
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
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};