import configureStore from 'redux-mock-store';

// create any initial state needed
// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore();

const addTodo = () => ({ type: 'TEST' });

it('should dispatch action', () => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = mockStore(initialState);

  // Dispatch the action
  store.dispatch(addTodo());

  // Test if your store dispatched the expected actions
  const actions = store.getActions();
  console.log(actions);
  const expectedPayload = { type: 'TEST' };
  expect(actions).toEqual([expectedPayload]);
});
