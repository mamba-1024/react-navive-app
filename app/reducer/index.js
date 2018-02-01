import { combineReducers } from 'redux';
import { myReducer } from "./my/index";
import { loginReducer } from './login/index';

const indexReduces = combineReducers({
    myReducer,
    loginReducer,
});

export default indexReduces;