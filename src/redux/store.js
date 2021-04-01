import { createStore, applyMiddleware } from "redux";
import * as actions from "./actions";
import userReducer from'./reducer'
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

// const middleware = applyMiddleware(thunkMiddleware);


// export default store = createStore(
//     reducer,
//     composeWithDevTools(middleware)
// );

export default function configureStore() {
    const store = createStore(
      userReducer,
      { uName: '',
        fullName: '',
        password: '' },
      composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
    store.dispatch(actions.verifyAuth());
    return store;
  }