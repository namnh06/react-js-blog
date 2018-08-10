import React, { Fragment } from 'react';
import Search from './Search';
import Tags from './Tags';
import Categories from './Categories';
import FormLogin from './Form/Login';
import Adv from './Adv';
const index = () => {
  return (
    <Fragment>
      <Adv />
      <FormLogin />
      <Search />
      <Categories />
      <Tags />
    </Fragment>
  );
};

export default index;
