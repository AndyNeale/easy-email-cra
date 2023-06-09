import services from 'services';
import { IUser } from 'services/user';
import createSliceState from './common/createSliceState';

export default createSliceState({
  name: 'user',
  initialState: null as IUser | null,
  reducers: {
    set: (state, action) => state,
  },
  effects: {
    fetch: async state => {
      const data = await services.user.getInfo();
      return data;
    },
  },
});
