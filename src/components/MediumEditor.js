import React from 'react'
import MediumEditor from 'medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'


export default class Medium extends React.PureComponent {

  componentDidMount() {
    const editor = new MediumEditor('.medium-editor')
  }

  render() {
    return (
      <div className="medium-editor">Please select me</div>
    )
  }
}