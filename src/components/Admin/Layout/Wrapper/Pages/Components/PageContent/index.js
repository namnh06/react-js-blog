import React, { Fragment } from 'react';
import Title from './Title';
import Button from '../../../../../../Details/Button';
import Icon from '../../../../../../UI/Icon';
import { iconClass } from '../../../../../../../helpers';
import FormPost from './Form/Post';
import Header from './Header';
import List from './List';
import FormCategory from './Form/Category';
import { ADMIN_PAGES_NAME } from '../../../../../../../helpers/constants';
const index = props => {
  console.log(props);
  return (
    <div className="col-10 ">
      <div className="mt-5 border border-style-custom ">
        <div className="d-flex justify-content-between align-items-center border-bottom p-3">
          <Title className="mb-0">{props.page}</Title>
          <Button
            className="btn btn-sm btn-info"
            clicked={this.onAddToggleClicked}
          >
            <Icon
              // iconClass={iconClass(this.state.addToggle ? 'minus' : 'plus')}
              iconClass={iconClass(true ? 'minus' : 'plus')}
              className="text-white"
            />
          </Button>
        </div>

        <div>
          {/* {this.state.addToggle && ( */}
          {true && (
            <FormPost
              onResetButtonClicked={this.onCreateReset}
              onTitleChange={event => this.onCreateTitleChange(event)}
              onDescriptionChange={event =>
                this.onCreateDescriptionChange(event)
              }
              onContentChange={content => this.onCreateContentChange(content)}
              onSubmitHandler={event => this.onCreateSubmitHandler(event)}
              // {...this.state.articleWillBeCreated}
              onUpdateTextEditor={this.onUpdateTextEditor}
            />
          )}

          {props.page === ADMIN_PAGES_NAME.CATEGORIES && <FormCategory />}
        </div>

        <div className="m-3">
          <ul className="list-unstyled">
            <Header />
            {/* {this.props.items && */}
            {false &&
              Object.keys(this.props.items).map((key, index) => {
                return (
                  <Fragment key={this.props.items[key].id}>
                    <List
                      index={++index}
                      deleteButton={id => this.onDeleteButtonClickHandler(id)}
                      {...this.props.items[key]}
                    />
                  </Fragment>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
