//PRODUCT
export const DOMAIN = window.location.origin;
// export const HOST = 'http://101.0.86.110:6699';
// export const API = 'http://101.0.86.110:6699/api/v1';

// DEVELOPMENT

export const HOST = 'http://192.168.1.70:6699';
export const API = 'http://192.168.1.70:6699/api/v1';

// export const URL = HOST + API;

// CATEGORY
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

// POST
export const POSTS_FETCH_START = 'POSTS_FETCH_START';
export const POSTS_FETCHED = 'POSTS_FETCHED';

export const POSTS_DELETED_FETCH_START = 'POSTS_DELETED_FETCH_START';
export const POSTS_DELETED_FETCHED = 'POSTS_DELETED_FETCHED';

export const POST_FETCH_START = 'POST_FETCH_START';
export const POST_FETCHED = 'POST_FETCH';

export const POST_DELETE_START = 'POST_DELETE_START';
export const POST_DELETED = 'POST_DELETED';

export const POST_DELETED_PERMANENTLY_START = 'POST_DELETE_PERMANENTLY_START';
export const POST_DELETED_PERMANENTLY = 'POST_DELETED_PERMANENTLY';

export const POST_DELETED_RESTORE_START = 'POST_DELETED_RESTORE_START';
export const POST_DELETED_RESTORED = 'POST_DELETED_RESTORED';

export const POST_CREATE_START = 'POST_CREATE_START';
export const POST_CREATED = 'POST_CREATED';

export const POST_UPDATE_START = 'POST_UPDATE_START';
export const POST_UPDATED = 'POST_UPDATED';

// INFORMATION
export const INFORMATION_FETCH_START = 'INFORMATION_FETCH_START';
export const INFORMATION_FETCHED = 'INFORMATION_FETCHED';
export const INFORMATION_UPDATE_START = 'INFORMATION_UPDATE_START';
export const INFORMATION_UPDATED = 'INFORMATION_UPDATED';

// MENU
export const MENUS_FETCH_START = 'MENUS_FETCH_START';
export const MENUS_FETCHED = 'MENUS_FETCHED';

// TAG
export const TAGS_FETCH_START = 'TAGS_FETCH_START';
export const TAGS_FETCHED = 'TAGS_FETCHED';

// AUTH
export const AUTH_LOG_IN_START = 'AUTH_LOGIN_START';
export const AUTH_LOG_IN = 'AUTH_LOG_IN';

export const AUTH_LOG_OUT_START = 'AUTH_LOG_OUT_START';
export const AUTH_LOG_OUT = 'AUTH_LOG_OUT';
// END AUTH

// SLIDE
export const SLIDES_FETCH_START = 'SLIDES_FETCH_START';
export const SLIDES_FETCHED = 'SLIDES_FETCHED';

export const SLIDES_RAND_FETCH_START = 'SLIDES_RAND_FETCH_START';
export const SLIDES_RAND_FETCHED = 'SLIDES_RAND_FETCHED';

export const SLIDE_CREATE_START = 'SLIDE_CREATE_START';
export const SLIDE_CREATED = 'SLIDE_CREATED';

export const SLIDE_EDIT_START = 'SLIDE_EDIT_START';
export const SLIDE_EDITED = 'SLIDE_EDITED';

export const SLIDE_UPDATE_START = 'SLIDE_UPDATE_START';
export const SLIDE_UPDATED = 'SLIDE_UPDATED';

export const SLIDE_DELETE_START = 'SLIDE_DELETE_START';
export const SLIDE_DELETED = 'SLIDE_DELETED';

// END SLIDE

// USER
export const USERS_FETCH_START = 'USERS_FETCH_START';
export const USERS_FETCHED = 'USERS_FETCHED';

export const USERS_DELETED_FETCH_START = 'USERS_DELETED_FETCH_START';
export const USERS_DELETED_FETCHED = 'USERS_DELETED_FETCHED';

export const USER_DELETE_START = 'USER_DELETE_START';
export const USER_DELETED = 'USER_DELETED';

export const USER_DELETED_PERMANENTLY_START = 'USER_DELETE_PERMANENTLY_START';
export const USER_DELETED_PERMANENTLY = 'USER_DELETED_PERMANENTLY';

export const USER_DELETED_RESTORE_START = 'USER_DELETE_RESTORE_START';
export const USER_DELETED_RESTORED = 'USER_DELETED_RESTORE';

export const USER_CREATE_START = 'USER_CREATE_START';
export const USER_CREATED = 'USER_CREATED';

export const USER_EDIT_START = 'USER_EDIT_START';
export const USER_EDITED = 'USER_EDITED';
// END USER

export const CLIENT_LOG_OUT = 'CLIENT_LOG_OUT';

// CONST HELPER

export const ADMIN_PAGES_NAME = {
  USERS: 'users',
  POSTS: 'posts',
  CATEGORIES: 'categories',
  DASHBOARD: 'dashboard',
  IMAGES: 'images'
};
export const CLIENT_PAGES_NAME = {
  HOME: 'home',
  BLOG: 'blog',
  CONTACT: 'contact',
  HELP: 'help',
  POST: 'post',
  CATEGORY: 'category'
};

export const ADMIN_PAGES_URL_PREFIX = '/admin';

export const ADMIN_URL_PAGES = {
  DASHBOARD: ADMIN_PAGES_URL_PREFIX + '/dashboard',
  USERS: ADMIN_PAGES_URL_PREFIX + '/users',
  CATEGORIES: ADMIN_PAGES_URL_PREFIX + '/categories',
  POSTS: ADMIN_PAGES_URL_PREFIX + '/posts',
  IMAGES: ADMIN_PAGES_URL_PREFIX + '/images'
};
