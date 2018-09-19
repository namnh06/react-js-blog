import React from 'react';
import Slide from './Slide';
import Header from '../../Components/Header';

const index = props => {
  return (
    <ul className="list-unstyled">
      <Header
        page={this.props.page}
        className={!!this.props.posts ? '' : 'border-bottom-0'}
      />
      {Object.keys(props.slides).map((key, index) => {
        const slide = props.slides[key];
        return <Slide key={index} index={index + 1} {...slide} />;
      })}
    </ul>
  );
};

export default index;
