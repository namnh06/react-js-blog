import React, { Fragment } from 'react';
import Carousel from './Carousel';
import Ribbon from './Ribbon';
import Feature from '../../../Feature';
import Articles from './Articles';
import CarouselVisited from './CarouselVisited';
class index extends React.Component {
  state = {
    visited: '0'
  };
  componentDidMount() {
    if (!!localStorage.getItem('cz.visited')) {
      const visited = localStorage.getItem('cz.visited');
      this.setState({
        visited
      });
    }
  }
  render() {
    return (
      <Fragment>
        {!!this.state.visited && parseInt(this.state.visited, 10) < 2 ? (
          <Fragment>
            <Carousel
              onButtonSignUpClicked={this.props.onButtonSignUpClicked}
            />
            <Ribbon onButtonSignUpClicked={this.props.onButtonSignUpClicked} />
          </Fragment>
        ) : (
          <CarouselVisited
            onButtonSignUpClicked={this.props.onButtonSignUpClicked}
          />
        )}

        <Articles />
        <Feature />
      </Fragment>
    );
  }
}

export default index;
