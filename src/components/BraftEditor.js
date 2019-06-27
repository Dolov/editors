import 'braft-editor/dist/index.css'
import 'braft-extensions/dist/table.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import Table from 'braft-extensions/dist/table'


const options = {
  withDropdown: true, // 插入表格前是否弹出下拉菜单
}

BraftEditor.use(Table(options))

export default class BasicDemo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
    outputHTML: '<p></p>'
  }

  handleChange = (editorState) => {
    this.setState({
      editorState: editorState,
      outputHTML: editorState.toHTML()
    })
  }

  render () {

    const { editorState, outputHTML } = this.state

    return (
      <div>
        <div className="braft-editor-wrapper">
          <BraftEditor
            value={editorState}
            onChange={this.handleChange}
          />
        </div>
        <h5>输出内容</h5>
        <div className="output-content">{outputHTML}</div>
      </div>
    )
  }
}