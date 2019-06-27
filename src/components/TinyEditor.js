import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default class TinyEditor extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {
    return (
      <Editor
        apiKey="wi0uqkzy4hmo2ku31guuin9yc0zzkuutns7yd9pmmyksofua"
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          plugins: 'link image code',
          toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | table'
        }}
        onChange={this.handleEditorChange}
      />
    );
  }
}

