import React from 'react';
import Button from '../../../../../../../../UI/Button';
import { NavLink } from 'react-router-dom';

const index = props => {
  return (
    <NavLink className="nav-link" to={`/blog/categories/${props.slug}`}>
      <Button className="btn btn-sm btn-primary roundex-0">{`${props.name} (${
        props.posts_count
      })`}</Button>
      {/* {props.name}
      <span className="badge badge-primary badge-pill">
        {props.posts_count}
      </span> */}
    </NavLink>
  );
};

export default index;
