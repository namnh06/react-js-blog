import {
  USER_ADD_START,
  USER_EDIT_START,
  POST_CREATE_START,
  CATEGORY_CREATE_START
} from './constants';

export const initCategories = { current: [], deleted: [] };
export const initPosts = { current: [], deleted: [] };
export const initUsers = { current: [], deleted: [] };
export const initPost = {};
export const initMenus = [];
export const initAuth = {};
export const tempData = { images: [] };

export const categoryForm = {
  name: '',
  isValidName: null,
  saveButtonClicked: false
};

export const postForm = {
  title: '',
  isValidTitle: null,
  description: '',
  isValidDescription: null,
  content: '',
  isValidContent: null
};

export const categoryWillBeCreated = {
  type: CATEGORY_CREATE_START,
  name: '',
  isValidName: null,
  saveButtonClicked: false
};

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
