import React from 'react';

import { NavLink } from 'react-router-dom';

const index = props => {
  return (
    <NavLink
      className="nav-link text-muted+ pl-0 pt-0"
      to={`/blog/categories/${props.slug}`}
    >
      {props.name}({props.posts_count}) {!props.last && ','}
    </NavLink>
  );
};

export default index;
