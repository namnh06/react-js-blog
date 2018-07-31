export const DEVELOPMENT_DOMAIN = 'http://localhost:6699';
export const DEVELOPMENT_API = '/api/v1';
export const DEVELOPMENT_URL_API = DEVELOPMENT_DOMAIN + DEVELOPMENT_API;

export const CATEGORIES_FETCH_START = 'CATEGORIES_FETCH_START';
export const CATEGORIES_FETCHED = 'CATEGORIES_FETCHED';

export const CATEGORIES_DELETED_FETCH_START = 'CATEGORIES_DELETE_FETCH_START';
export const CATEGORIES_DELETED_FETCHED = 'CATEGORIES_DELETED_FETCHED';

export const CATEGORY_DELETE_START = 'CATEGORY_DELETE_START';
export const CATEGORY_DELETED = 'CATEGORY_DELETED';

export const CATEGORY_DELETED_PERMANENTLY_START =
  'CATEGORY_DELETE_PERMANENTLY_START';
export const CATEGORY_DELETED_PERMANENTLY = 'CATEGORY_DELETED_PERMANENTLY';

export const CATEGORY_CREATE_START = 'CATEGORY_CREATE_START';
export const CATEGORY_CREATED = 'CATEGORY_CREATED';

export const CATEGORY_EDIT_START = 'CATEGORY_EDIT_START';
export const CATEGORY_EDITED = 'CATEGORY_EDITED';

export const CATEGORY_DELETED_RESTORE_START = 'CATEGORY_DELETED_RESTORE_START';
export const CATEGORY_DELETED_RESTORED = 'CATEGORY_DELETED_RESTORED';

export const POSTS_FETCH_START = 'POSTS_FETCH_START';
export const POSTS_FETCHED = 'POSTS_FETCHED';

export const POST_FETCH_START = 'POST_FETCH_START';
export const POST_FETCHED = 'POST_FETCH';

export const POST_DELETE_START = 'POST_DELETE_START';
export const POST_DELETED = 'POST_DELETED';

export const POST_CREATE_START = 'POST_CREATE_START';
export const POST_CREATED = 'POST_CREATED';

export const MENUS_FETCH_START = 'MENUS_FETCH_START';
export const MENUS_FETCHED = 'MENUS_FETCHED';

export const AUTH_LOG_IN_START = 'AUTH_LOGIN_START';
export const AUTH_LOG_IN = 'AUTH_LOG_IN';

export const AUTH_LOG_OUT_START = 'AUTH_LOG_OUT_START';
export const AUTH_LOG_OUT = 'AUTH_LOG_OUT';

export const USERS_FETCH_START = 'USERS_FETCH_START';
export const USERS_FETCH = 'USERS_FETCH';

export const USER_DELETE_START = 'USER_DELETE_START';
export const USER_DELETED = 'USER_DELETED';

export const CLIENT_LOG_OUT = 'CLIENT_LOG_OUT';

export const USER_ADD_START = 'USER_CREATE_START';
export const USER_ADDED = 'USER_ADDED';

export const USER_EDIT_START = 'USER_EDIT_START';
export const USER_EDITED = 'USER_EDITED';

export const SUB_CATEGORY_DELETE_START = 'SUB_CATEGORY_DELETE_START';
export const SUB_CATEGORY_DELETED = 'SUB_CATEGORY_DELETED';

export const ADMIN_PAGES_NAME = {
  USERS: 'users',
  POSTS: 'posts',
  CATEGORIES: 'categories'
};
export const CLIENT_PAGES_NAME = {
  HOME: 'home',
  BLOG: 'blog',
  CONTACT: 'contact',
  HELP: 'help',
  POST: 'post'
};

export const ADMIN_PAGES_URL_PREFIX = '/admin';

export const ADMIN_URL_PAGES = {
  DASHBOARD: ADMIN_PAGES_URL_PREFIX + '/dashboard',
  USERS: ADMIN_PAGES_URL_PREFIX + '/users',
  CATEGORIES: ADMIN_PAGES_URL_PREFIX + '/categories',
  POSTS: ADMIN_PAGES_URL_PREFIX + '/posts'
};
