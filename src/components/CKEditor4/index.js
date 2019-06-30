import React from 'react'
import CKEditor from './Editor'
import getEditorNamespace from './getEditorNamespace'


export default class Editor extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
    this.init()
  }

  init() {
    getEditorNamespace("https://cdn.ckeditor.com/4.11.4/standard-all/ckeditor.js")
    .then(CKEDITOR => {
      this.addPulugins()
      this.setState({loading: false})
    })
    .catch(err => {
      console.log(err)
      this.setState({loading: false})
    })
  }

  addPulugins() {
    require('./plugins/timestamp/plugin.js')
  }

  render() {
    const { loading } = this.state
    if (loading) return null
    return (
      <CKEditor />
    )
  }
}


