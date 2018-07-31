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
      <div className="my-2">
        <h3>Categories</h3>
        {Object.keys(this.props.categories).map((key, index) => {
          const category = this.props.categories[key];
          return <Category key={category.id} index={++index} {...category} />;
        })}
      </div>
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
