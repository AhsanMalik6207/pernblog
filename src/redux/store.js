import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import postReducer from "./postRedux";
export default configureStore({
  reducer:{
      user:userReducer,
      post:postReducer,
  },
});


