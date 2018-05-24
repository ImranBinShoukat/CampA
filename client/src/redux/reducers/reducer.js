import { combineReducers } from 'redux';

import {basicInfo} from './basicinfo.reducer';
import {loginInfo} from './login.reducer';
import {universityInfo} from './university.reducer';
import {userInfo} from './user.reducer';
import {societyInfo} from './society.reducer';

const appReducer = combineReducers({
  basicInfo,
  loginInfo,
  universityInfo,
  userInfo,
  societyInfo
});

export default appReducer;
