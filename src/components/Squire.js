import React from 'react'
import Squire from 'squire-rte'


export default class SquireEditor extends React.PureComponent {

  componentDidMount() {
    const node = document.getElementById('squire-editor')
    const editor = new Squire(node, {
      blockTag: 'p',
      blockAttributes: {'class': 'paragraph'},
      tagAttributes: {
          ul: {'class': 'UL'},
          ol: {'class': 'OL'},
          li: {'class': 'listItem'},
          a: {'target': '_blank'},
          pre: {
              style: 'border-radius:3px;border:1px solid #ccc;padding:7px 10px;background:#f6f6f6;font-family:menlo,consolas,monospace;font-size:90%;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;'
          },
          code: {
              style: 'border-radius:3px;border:1px solid #ccc;padding:1px 3px;background:#f6f6f6;font-family:menlo,consolas,monospace;font-size:90%;'
          },
      }
    })
    Squire.prototype.makeHeader = function() {
      return this.modifyBlocks( function( frag ) {
        var output = this._doc.createDocumentFragment();
        var block = frag;
        while ( block = Squire.getNextBlock( block ) ) {
          output.appendChild(
            this.createElement( 'h2', [ Squire.empty( block ) ] )
          );
        }
        return output;
      });
    };
    document.addEventListener( 'click', function ( e ) {
      var id = e.target.id,
          value;
      if ( id && editor && editor[ id ] ) {
        if ( e.target.className === 'prompt' ) {
          value = prompt( 'Value:' );
        }
        editor[ id ]( value );
      }
    }, false );
  }
  

  render() {
    return (
      <div>
        <header>
          <p>This is a really simple demo, with the most trivial of UI integrations</p>
          <p>
          <span id="bold">Bold</span>
          <span id="removeBold">Unbold</span>
          <span id="italic">Italic</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="removeItalic">Unitalic</span>
          <span id="underline">Underline</span>
          <span id="removeUnderline">Deunderline</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="removeAllFormatting">Remove formatting</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="setFontSize" class="prompt">Font size</span>
          <span id="setFontFace" class="prompt">Font face</span>
          </p>
          <p>
          <span id="setTextColour" class="prompt">Text colour</span>
          <span id="setHighlightColour" class="prompt">Text highlight</span>
          <span id="makeLink" class="prompt">Link</span>
          </p>
          <p>
            <span id="makeHeader">Make Header</span>
            <span id="increaseQuoteLevel">Quote</span>
            <span id="decreaseQuoteLevel">Dequote</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span id="makeUnorderedList">List</span>
            <span id="removeList">Unlist</span>
            <span id="increaseListLevel">Increase list level</span>
            <span id="decreaseListLevel">Decrease list level</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span id="code">Code</span>
            <span id="removeCode">Uncode</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="insertImage" class="prompt">Insert image</span>
          <span id="setHTML" class="prompt">Set HTML</span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span id="undo">Undo</span>
            <span id="redo">Redo</span>
          </p>
        </header>
        <div id="squire-editor" className="squire-editor" />
      </div>
    )
  }
}