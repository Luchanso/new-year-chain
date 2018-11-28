import { combineReducers } from 'redux';

export default combineReducers({
  test: (state, action) => {
    if (action.type === 'TEST') {
      return 'test';
    }
    return '';
  },
});
