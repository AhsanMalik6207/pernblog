import { configureStore} from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import postReducer from "./postRedux";
import userprofileReducer from "./userprofileRedux";
export default configureStore({
  reducer:{
      user:userReducer,
      userprofile:userprofileReducer,
      post:postReducer,
  },
});


