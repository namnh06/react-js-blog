export const initCategories = { current: { data: [] }, deleted: { data: [] } };
export const initPosts = {
  current: { data: [] },
  deleted: { data: [] }
};

export const initSlides = {
  current: { data: [] },
  deleted: { data: [] },
  show: {}
};
export const initTags = { current: {}, deleted: {} };
export const initUsers = {
  current: {
    data: []
  },
  deleted: { data: [] }
};
export const initPost = {};
export const initMenus = [];
export const initAuth = {};
export const initInformation = [];
export const tempData = { images: [], nameCategories: [], categories: [] };

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
  isValidContent: null,
  categories: []
};

export const userForm = {
  name: '',
  isValidName: null,
  email: '',
  isValidEmail: null,
  password: '',
  isValidPassword: null,
  rePassword: '',
  isValidRePassword: null
};

// export const categoryWillBeCreated = {
//   type: CATEGORY_CREATE_START,
//   name: '',
//   isValidName: null,
//   saveButtonClicked: false
// };

// export const userWillBeCreated = {
//   type: USER_ADD_START,
//   validEmail: null,
//   validPassword: null,
//   validName: null,
//   passwordSecure: true,
//   name: '',
//   email: '',
//   password: ''
// };

// export const userWillBeEdited = {
//   type: USER_EDIT_START,
//   validEmail: null,
//   validName: null,
//   validPassword: null,
//   passwordSecure: true,
//   name: '',
//   password: '',
//   email: ''
// };

// export const articleWillBeCreated = {
//   type: POST_CREATE_START,
//   title: '',
//   description: '',
//   content: '',
//   categories: null
// };
