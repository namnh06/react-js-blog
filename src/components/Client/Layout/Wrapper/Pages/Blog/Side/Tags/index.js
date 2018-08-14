import React from 'react';
import { connect } from 'react-redux';
import { tagsFetchStart } from '../../../../../../../../store/actions/tags.action';
class index extends React.Component {
  componentDidMount() {
    this.props.fetchStart();
  }
  render() {
    return (
      <div className="my-3 border-bottom">
        <h3>Tags</h3>
        <div className="">
          {this.props.items &&
            Object.keys(this.props.items)
              .slice(0, 30)
              .map((key, index) => {
                const item = this.props.items[key];
                return (
                  <a className="mx-1 badge badge-primary text-light" key={key}>
                    {item.name}
                  </a>
                );
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.tags.current
  };
};
const mapDispatchToProps = dispatch => ({
  fetchStart: _ => dispatch(tagsFetchStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
