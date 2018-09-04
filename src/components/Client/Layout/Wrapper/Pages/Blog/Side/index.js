import React, { Fragment } from 'react';
import Search from './Search';
import Tags from './Tags';
import Categories from './Categories';
import FormLogin from './Form/Login';
import Adv from './Adv';
const index = props => {
  return (
    <Fragment>
      {/* <Adv /> */}
      <FormLogin onButtonSignUpClicked={props.onButtonSignUpClicked} />
      <Search />
      {/* <Categories /> */}
      <Tags />
      {/* <Adv />
      <Adv />
      <Adv /> */}
    </Fragment>
  );
};

export default index;
