import React, { Component } from 'react';
import { categoriesFetchStart } from '../../../../../../../../store/actions/admin/categories.action';
import { connect } from 'react-redux';
import Category from './Category';
class index extends Component {
  componentDidMount() {
    this.props.categoriesFetchStart();
  }

  render() {
    return (
      <ul className="nav d-flex my-2 list-unstyled justify-content-center border-bottom">
        {Object.keys(this.props.categories).map((key, index) => {
          const category = this.props.categories[key];
          return (
            <li className="nav-item" key={category.id}>
              <Category index={index + 1} {...category} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.current
  };
};

const mapDispatchToProps = dispatch => ({
  categoriesFetchStart: () => dispatch(categoriesFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
