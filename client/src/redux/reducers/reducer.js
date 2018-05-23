import { combineReducers } from 'redux';

import {basicInfo} from './basicinfo.reducer';
import {loginInfo} from './login.reducer';
import {universityInfo} from './university.reducer';

const appReducer = combineReducers({
  basicInfo,
  loginInfo,
  universityInfo
});

export default appReducer;
