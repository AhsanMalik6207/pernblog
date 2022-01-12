import Users from '../controllers/user';
import Posts from '../controllers/post';
import Comments from '../controllers/comment';
export default (app) => {
app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Blog app API!',
}));
app.post('/api/posts/:postId/comments',Comments.create)
app.get('/api/comments',Comments.list)
app.get('/api/posts', Posts.list);
app.put('/api/comments/:commentId',Comments.modify)
app.put('/api/posts/:postId', Posts.modify); 
app.delete('/api/comments/:commentId',Comments.delete)
app.delete('/api/posts/:postId', Posts.delete);
app.post('/api/users/:userId/posts', Posts.create); 
app.post('/api/users', Users.signUp); 
};