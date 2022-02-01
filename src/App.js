import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Register from './components/Register'
import Login from './components/Login'
import CreatePost from './components/CreatePost'
import UpdatePost from './components/UpdatePost'
import PostDetail from './components/PostDetail'
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
// import { incNumber, decNumber } from './actions/index';

function App() {
    const auth=localStorage.getItem('user');
  // const mystate = useSelector((state) => state.changeNumber);
  // const dispatch = useDispatch();
  // const styleObj = {
  //   fontSize: 40,
  //   color: "#4a54f1",
  // }
  return (
    <>
      {/* <div>
        <h1>Increment/Decrement Counter</h1>
        <div>
          <a title="decrement" onClick={() => dispatch(decNumber())}>
            <span style={styleObj}>-</span>
          </a>
          <input name="quantity" type="text" value={mystate} />
          <a title="increment" onClick={() => dispatch(incNumber(5))}>
            <span style={styleObj}>+</span>
          </a>
        </div>
      </div> */}
      <BrowserRouter forceRefresh={true}>
        <Navbar />
        <Box style={{ margintop: 64 }}>
          <Switch>
            <Route
              path="/createpost"
              render={props =>
                auth ? (
                  <CreatePost {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/updatepost"
              render={props =>
                auth ? (
                  <UpdatePost {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/postdetail' component={PostDetail} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Box>
      </BrowserRouter>
    </>
  );
};
export default App;
