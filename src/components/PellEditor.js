import React from 'react'
import { init } from 'pell'
import 'pell/dist/pell.css'

export default class PellEditor extends React.PureComponent {

  editor = null

  constructor (props) {
    super(props)
    this.state = { html: null }
  }

  componentDidMount () {
    this.editor = init({
      element: document.getElementById('editor'),
      onChange: html => this.setState({ html }),
      actions: ['bold', 'underline', 'italic'],
    })
  }

  render() {
    return (
      <div id="editor" className="pell-editor" />
    )
  }
} 