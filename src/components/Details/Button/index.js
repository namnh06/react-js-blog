import React from 'react';

const Button = props => {
  return (
    <button
      disabled={props.disabled}
      type={props.type}
      className={props.className}
      onClick={props.clicked}
    >
      <span className="text-uppercase">{props.children}</span>
    </button>
  );
};

export default Button;
