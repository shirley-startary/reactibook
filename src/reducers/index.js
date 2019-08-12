import { combineReducers } from 'redux';
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import postReducer from './postReducer';


export default combineReducers({
  loginReducer,
  registerReducer,
  postReducer
});