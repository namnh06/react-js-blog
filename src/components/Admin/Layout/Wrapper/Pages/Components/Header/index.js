import React from 'react';
import { ADMIN_PAGES_NAME } from '../../../../../../../helpers/constants';
import CategoryHeader from './Category';
const Header = props => {
  const renderHeaderList = page => {
    switch (page) {
      case ADMIN_PAGES_NAME.CATEGORIES:
        return <CategoryHeader className={props.className} />;

      default:
        return null;
    }
  };
  return renderHeaderList(props.page);
};

export default Header;
