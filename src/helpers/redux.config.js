import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import categories from '../store/reducers/category.reducer';
import articles from '../store/reducers/articles.reducer';
import article from '../store/reducers/article.reducer';
import menus from '../store/reducers/menu.reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const appReducer = combineReducers({ categories, articles, menus, article });

  const rootReducer = (state, action) => {
    return appReducer(state, action);
  };

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
