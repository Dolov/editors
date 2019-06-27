import React from 'react'
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from 'react-froala-wysiwyg';



export default class Editor extends React.PureComponent {

  render() {
    return (
      <FroalaEditor 
        config={{
          toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'table', '|', 'paragraphFormat', 'align', 'undo', 'redo', 'html'],
          tableResizerOffset: 10,
          tableResizingLimit: 50
        }}
      />
    )
  }
}