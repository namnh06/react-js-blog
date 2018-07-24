import React from 'react';
import List from './List';
const index = props => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rounded-0">
        {props.data.map((key, index) => {
          return (
            <List
              key={index}
              name={key}
              last={index === props.data.length - 1}
            />
          );
        })}
      </ol>
    </nav>
  );
};

export default index;
