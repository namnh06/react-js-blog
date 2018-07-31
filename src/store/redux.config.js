import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import categories from '../store/reducers/admin/categories.reducer';
import posts from '../store/reducers/posts.reducer';
import post from '../store/reducers/post.reducer';
import menus from '../store/reducers/menus.reducer';
import auth from '../store/reducers/admin/auth.reducer';
import users from '../store/reducers/admin/users.reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const appReducer = combineReducers({
    categories,
    posts,
    menus,
    post,
    auth,
    users
  });

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
