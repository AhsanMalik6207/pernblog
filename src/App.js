import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import CreatePost from './components/CreatePost'
import UpdatePost from './components/UpdatePost'
import PostDetail from './components/PostDetail'
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box style={{ margintop: 64 }}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/createpost' component={CreatePost} />
            <Route exact path='/updatepost' component={UpdatePost} />
            <Route exact path='/postdetail' component={PostDetail} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Box>
      </BrowserRouter>
    </>
  );
};
export default App;
