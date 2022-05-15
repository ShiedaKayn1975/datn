import React, { Component } from "react";
import tinymce from "tinymce";
import "tinymce/themes/silver";
import "tinymce/plugins/wordcount";
import "tinymce/plugins/table";
import { cupCakeClient } from "../../services";

class TinyEditorComponent extends Component {
  constructor() {
    super();
    this.state = { editor: null };
  }

  componentDidMount() {
    const { toolbar } = this.props;
    const default_tolbar = {
      toolbar1: 'bold italic strikethrough underline | alignleft aligncenter alignright alignjustify | image media link anchor | code outdent indent',
      toolbar2: 'numlist bullist | forecolor backcolor removeformat pagebreak | table',
      toolbar3: 'fontselect fontsizeselect styleselect',
    }
    var init = {
      selector: `#${this.props.id}`,
      plugins: "link image autoresize media anchor code pagebreak lists table",
      autoresize_bottom_margin: 50,
      images_upload_url: `${process.env.CUP_CAKE_HOST_API_URL}/api/v1/direct_uploads?namespace=datn/editor/images&public=true`,
      toolbar_sticky: true,
      toolbar_sticky_offset: 60,
      images_upload_handler: function (blobInfo, success, failure) {
        setTimeout(function () {
          const query = {
            namespace: "datn/editor/images",
            public: true
          }

          cupCakeClient.uploadFile({
            file: blobInfo.blob(), params: query, done: (blob) => {
              success(blob.file_url)
            },
            error: (error) => {
              failure()
            }
          })
        }, 2000);
      },
      menubar: false,
      resize: false,
      branding: false,
      forced_root_block: "",
      statusbar: false,
      setup: (editor) => {
        editor.on("keyup change", () => {
          const content = editor.getContent();
          this.props.onEditorChange(content);
        });
      },
    }
    if (toolbar) {
      init = { ...init, ...toolbar }
    } else {
      init = { ...init, ...default_tolbar }
    }

    tinymce.init(init);
    
    if (this.props.content) {
      this.onSetContent(this.props.content)
    }
  }

  componentWillUnmount() {
    tinymce.remove(this.state.editor);
  }

  componentDidUpdate(prevProps) {
    if (this.props.content != prevProps.content) {
      this.onSetContent(this.props.content)
    }
  }

  onSetContent = (description) => {
    tinymce.activeEditor.setContent(description);
  }

  render() {
    return (
      <textarea
        id={this.props.id}
        value={this.props.content}
        onChange={(e) => console.log(e)}
      />
    );
  }
}

export default TinyEditorComponent;