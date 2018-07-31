import React from 'react';
import Breadcrumb from '../../../../../../UI/Breadcrumb';
const index = props => {
  return (
    <div className="col-8">
      <Breadcrumb data={['blog', props.slug]} />
      <h2>{props.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  );
};

export default index;
