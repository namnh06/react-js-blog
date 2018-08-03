import React from 'react';
import Icon from '../../../../../../../../UI/Icon';
import { iconClass, fontAwesomeType } from '../../../../../../../../../helpers';

const index = props => {
  return (
    <figure
      className={[
        ' figure mx-2',
        props.main ? ' border border-danger' : ''
      ].join(' ')}
      onClick={props.onClickedMakeMainImage}
    >
      <img
        src={props.src}
        className="figure-img rounded-0 my-auto"
        alt={props.alt}
        width={props.width}
      />
      <figcaption className="figure-caption text-truncate text-center mt-auto">
        <span
          className="cursor-pointer px-2"
          onClick={props.onClickedRemoveImage}
        >
          <Icon iconClass={iconClass(fontAwesomeType.TIMES)} />
        </span>
        {props.caption}
      </figcaption>

      <div className="d-flex flex-row justify-content-center">
        {/* <button className="btn btn-info btn-sm rounded-0 mx-2">
          Add To Editor
        </button> */}
      </div>
    </figure>
  );
};

export default index;
