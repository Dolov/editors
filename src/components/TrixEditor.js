import React from 'react'
import 'trix'
import 'trix/dist/trix.css'


export default class TrixEditor extends React.PureComponent {

  render() {
    return (
      <div className="trix-editor">
        <trix-editor></trix-editor>
      </div>
    )
  }
}