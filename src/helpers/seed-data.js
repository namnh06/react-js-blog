import {
  USER_ADD_START,
  USER_EDIT_START,
  POST_CREATE_START
} from './constants';

export const initCategories = [];
export const initPosts = [];
export const initPost = {};
export const initMenus = [];
export const initAuth = {};

export const userWillBeCreated = {
  type: USER_ADD_START,
  validEmail: null,
  validPassword: null,
  validName: null,
  passwordSecure: true,
  name: '',
  email: '',
  password: ''
};

export const userWillBeEdited = {
  type: USER_EDIT_START,
  validEmail: null,
  validName: null,
  validPassword: null,
  passwordSecure: true,
  name: '',
  password: '',
  email: ''
};

export const articleWillBeCreated = {
  type: POST_CREATE_START,
  title: '',
  description: '',
  content: '',
  categories: null
};
