import React from 'react';
import Search from './Search';
import Tags from './Tags';
import Categories from './Categories';
const index = () => {
  return (
    <div className="col-4">
      <Search />
      <Tags />
      <Categories />
    </div>
  );
};

export default index;
