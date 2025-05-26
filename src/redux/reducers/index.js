import { combineReducers } from "@reduxjs/toolkit";
import auth from "../authSlice";
import app from "../appSlice";
import articles from "../articleSlice";


const rootReducer = combineReducers({
  auth,
  app,
  articles,

});

export default rootReducer;
