import React from 'react';

import TreeView from './TreeView';
import './styles.css';
import { ADMIN_URL_PAGES } from '../../../../../helpers/constants';
const index = props => {
  return (
    <div className="col-2 Side-Bar px-0">
      <ul className="list-unstyled my-0 h-100 bg-secondary position-fixed col-2">
        <TreeView
          iconType="tachometer-alt"
          text="Dash Board"
          to={ADMIN_URL_PAGES.DASHBOARD}
        />
        <TreeView iconType="users" text="Users" to={ADMIN_URL_PAGES.USERS} />
        <TreeView
          iconType="th-list"
          text="Categories"
          to={ADMIN_URL_PAGES.CATEGORIES}
        />
        <TreeView
          iconType="newspaper"
          text="Posts"
          to={ADMIN_URL_PAGES.POSTS}
        />
      </ul>
    </div>
  );
};

export default index;
