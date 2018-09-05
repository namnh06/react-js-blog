import React from 'react';
import Number from './Number';
const index = props => {
  return (
    <nav aria-label="...">
      <ul className="pagination justify-content-center">
        <li className={['page-item', !!props.prev ? '' : 'disabled'].join(' ')}>
          <a
            className="page-link"
            onClick={_ => props.onPaginateClicked(props.prev)}
          >
            Previous
          </a>
        </li>
        {props.currentPage >= 3 && (
          <Number clicked={_ => props.onPaginateClicked(props.firstPageUrl)}>
            1
          </Number>
        )}
        {props.currentPage > 3 && props.lastPage > 3 && <Number>...</Number>}
        {props.currentPage - 1 > 0 && (
          <Number clicked={_ => props.onPaginateClicked(props.prev)}>
            {props.currentPage - 1}
          </Number>
        )}
        <Number className="active">{props.currentPage}</Number>
        {props.currentPage + 1 < props.lastPage && (
          <Number clicked={_ => props.onPaginateClicked(props.next)}>
            {props.currentPage + 1}
          </Number>
        )}

        {props.lastPage - 2 > props.currentPage && <Number>...</Number>}
        {props.lastPage - 1 >= props.currentPage && (
          <Number clicked={_ => props.onPaginateClicked(props.lastPageUrl)}>
            {props.lastPage}
          </Number>
        )}
        {/* {props.nums &&
          Object.keys(props.nums).map(num => {
            return <Number>num</Number>;
          })} */}
        <li className={['page-item', !!props.next ? '' : 'disabled'].join(' ')}>
          <a
            className="page-link"
            onClick={_ => props.onPaginateClicked(props.next)}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default index;
