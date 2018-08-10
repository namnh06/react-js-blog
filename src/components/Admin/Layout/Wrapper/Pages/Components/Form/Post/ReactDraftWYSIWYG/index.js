import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../../../../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.css';
import { connect } from 'react-redux';
import axios from '../../../../../../../../../helpers/axios.config';

import { DEVELOPMENT_API_DOMAIN } from '../../../../../../../../../helpers/constants';
class EditorComponent extends Component {
  state = {
    editorState: EditorState.createEmpty()
  };

  onEditorStateChange = editorState => {
    this.setState({ editorState });
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.props.onUpdateTextEditor(html);
  };

  uploadImageCallBack = file => {
    let formData = new FormData();
    formData.append('image', file);

    return axios
      .post('/images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(response => {
        return {
          data: {
            link: DEVELOPMENT_API_DOMAIN + response.data.data.image.path
          }
        };
      });
  };

  render() {
    const toolbarConfig = {
      image: {
        urlEnabled: true,
        uploadEnabled: true,
        uploadCallback: this.uploadImageCallBack,
        previewImage: true,
        alt: { present: true, mandatory: false },
        defaultSize: {
          width: '600'
        }
      }
    };

    return (
      <Editor
        editorState={this.state.editorState}
        onEditorStateChange={this.onEditorStateChange}
        wrapperClassName="Editor__wrapper w-100 h-100 border"
        toolbarClassName="Editor__toolbar border-top-0 border-left-0 border-right-0 border-bottom"
        editorClassName="Editor__editor mx-3"
        toolbar={toolbarConfig}
      />
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(EditorComponent);
