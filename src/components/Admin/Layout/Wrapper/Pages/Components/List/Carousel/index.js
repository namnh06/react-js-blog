import React, { Fragment } from 'react';
import Button from '../../../../../../../UI/Button';

import { connect } from 'react-redux';

import { HOST } from '../../../../../../../../helpers/constants';
class index extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="font-weight-bold">{this.props.index}</div>
        <div className="d-flex justify-content-start font-weight-bold">
          <span className="px-2">{this.props.name}</span>
        </div>
        <div className="d-flex justify-content-start">
          <span className="px-2">{this.props.caption}</span>
        </div>
        <div className="d-flex justify-content-center">
          <img src={HOST + this.props.images[0].path} className="w-50" alt="" />
        </div>

        <div className="d-flex justify-content-around">
          <Button
            className="btn btn-sm btn-info"
            // clicked={_ => this.onPreviewClickHandler(this.props.slug)}
          >
            preview
          </Button>
          <Button
            className="btn btn-sm btn-warning"
            clicked={this.props.onButtonEditClicked}
          >
            edit
          </Button>
          <Button
            className="btn btn-sm btn-danger"
            clicked={this.props.onButtonDeleteClicked}
          >
            delete
          </Button>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

export default connect(
  null,
  mapDispatchToProps
)(index);
