import React, { Fragment } from 'react';

import ContainerFluid from '../../../UI/ContainerFluid';

import Row from '../../../UI/Row';
import SideBar from './SideBar';

import { ADMIN_PAGES_NAME } from '../../../../helpers/constants';
import Users from './Pages/Users';
import Posts from './Pages/Posts';
import Categories from './Pages/Categories';
import NotFoundPage from '../../../../containers/404';
class index extends React.Component {
  state = {
    formToggle: false
  };
  onFormToggleClicked = () => {
    this.setState(prevState => ({
      formToggle: !prevState.formToggle
    }));
  };

  adminPageRender = page => {
    switch (page.toLowerCase()) {
      case ADMIN_PAGES_NAME.USERS:
        return (
          <Users
            formToggle={this.state.formToggle}
            onFormToggleClicked={this.onFormToggleClicked}
          />
        );
      case ADMIN_PAGES_NAME.POSTS:
        return (
          <Posts
            formToggle={this.state.formToggle}
            onFormToggleClicked={this.onFormToggleClicked}
          />
        );
      case ADMIN_PAGES_NAME.CATEGORIES:
        return (
          <Categories
            formToggle={this.state.formToggle}
            onFormToggleClicked={this.onFormToggleClicked}
          />
        );
      default:
        return <NotFoundPage />;
    }
  };
  render() {
    return (
      <ContainerFluid className="px-0 h-100">
        <Row className="h-100">
          <SideBar />
          <Fragment>{this.adminPageRender(this.props.page)}</Fragment>
        </Row>
      </ContainerFluid>
    );
  }
}

export default index;
