import React, { Fragment } from 'react';

import ContainerFluid from '../../../UI/ContainerFluid';

import Row from '../../../UI/Row';
import SideBar from './SideBar';

import { adminPageRender } from '../../../../helpers';

const index = props => {
  return (
    <ContainerFluid className="px-0 h-100">
      <Row className="h-100">
        <SideBar />
        <Fragment>{adminPageRender(props.page)}</Fragment>
      </Row>
    </ContainerFluid>
  );
};

export default index;
