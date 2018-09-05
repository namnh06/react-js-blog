import React, { Fragment } from 'react';
import Button from '../../../../../../../UI/Button';
import { imageFallBack } from '../../../../../../../../helpers/image';
import { connect } from 'react-redux';
import { postUpdateStart } from '../../../../../../../../store/actions/posts.action';
class index extends React.Component {
  statusUpdate = event => {
    const status = event.target.checked ? 'publish' : 'draft';
    let formData = new FormData();
    const post = {
      id: this.props.id,
      status
    };
    formData.append('post', JSON.stringify(post));
    formData.append('_method', 'PUT');
    this.props.postUpdateStart(post.id, formData);
  };
  render() {
    return (
      <Fragment>
        <div className="font-weight-bold">{this.props.index}</div>
        <div className="d-flex justify-content-start font-weight-bold">
          <span className="px-2">{this.props.title}</span>
        </div>
        <div className="d-flex justify-content-start">
          <span className="px-2">{this.props.description}</span>
        </div>
        <div className="d-flex justify-content-center">
          <span className="px-2">{this.props.author.name}</span>
        </div>
        <div className="d-flex justify-content-center">
          <input
            className="tgl tgl-ios"
            id={`js-${this.props.id}`}
            type="checkbox"
            onChange={event => this.statusUpdate(event)}
            defaultChecked={this.props.status === 'publish' ? true : false}
          />
          <label className="tgl-btn" htmlFor={`js-${this.props.id}`} />
        </div>
        <div className="d-flex justify-content-center">
          <img src={imageFallBack(this.props.images)} className="w-25" alt="" />
        </div>
        <div className="d-flex justify-content-center">
          {this.props.categories.map(category => {
            return (
              <span className="px-2" key={category.slug}>
                {category.name}
              </span>
            );
          })}
        </div>
        <div className="d-flex justify-content-around">
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

const mapDispatchToProps = dispatch => ({
  postUpdateStart: (id, post) => dispatch(postUpdateStart(id, post))
});

export default connect(
  null,
  mapDispatchToProps
)(index);
