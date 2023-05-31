import { combineReducers } from '@reduxjs/toolkit';

import loading from './common/loading';
import toast from './common/toast';
import email from './email';
import extraBlocks from './extraBlocks';
import template from './template';
import templateList from './templateList';
import user from './user';

const rootReducer = combineReducers({
  user: user.reducer,
  template: template.reducer,
  templateList: templateList.reducer,
  extraBlocks: extraBlocks.reducer,
  toast: toast.reducer,
  email: email.reducer,
  loading: loading.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
