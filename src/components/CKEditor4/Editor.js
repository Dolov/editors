import React from 'react'
import CKEditor from 'ckeditor4-react'

export default class CKEditor4 extends React.PureComponent {

  componentDidMount() {
    
  }

  render() {
    return (
      <CKEditor
        config={{
          uiColor: '#E0F2F4',
          // extraPlugins: `image2,tableresize,autogrow,colorbutton,print,font,colordialog,codesnippet,
          //   mathjax,placeholder,copyformatting,magicline,bidi,language,uicolor,timestamp,
          //   pastefromword,liststyle,justify,uploadimage,uploadfile`,
          autoGrow_minHeight: 200,
          autoGrow_maxHeight: 600,
          autoGrow_bottomSpace: 50,
          customConfig: '',
          mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML',
          language_list: ['ar:Arabic:rtl', 'fr:French', 'he:Hebrew:rtl', 'es:Spanish'],
          

      // Define the toolbar: https://ckeditor.com/docs/ckeditor4/latest/guide/dev_toolbar
      // The full preset from CDN which we used as a base provides more features than we need.
      // Also by default it comes with a 3-line toolbar. Here we put all buttons in two rows.
      // toolbar: [{
      //     name: 'clipboard',
      //     items: ['PasteFromWord', '-', 'Undo', 'Redo']
      //   },
      //   {
      //     name: 'basicstyles',
      //     items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'Subscript', 'Superscript']
      //   },
      //   {
      //     name: 'links',
      //     items: ['Link', 'Unlink']
      //   },
      //   {
      //     name: 'paragraph',
      //     items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote']
      //   },
      //   {
      //     name: 'insert',
      //     items: ['Image', 'Table']
      //   },
      //   {
      //     name: 'editing',
      //     items: ['Scayt']
      //   },
      //   '/',

      //   {
      //     name: 'styles',
      //     items: ['Format', 'Font', 'FontSize']
      //   },
      //   {
      //     name: 'colors',
      //     items: ['TextColor', 'BGColor', 'CopyFormatting']
      //   },
      //   {
      //     name: 'align',
      //     items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock']
      //   },
      //   {
      //     name: 'document',
      //     items: ['Print', 'Source']
      //   }
      // ],

      // Since we define all configuration options here, let's instruct CKEditor to not load config.js which it does by default.
      // One HTTP request less will result in a faster startup time.
      // For more information check https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html#cfg-customConfig
      

      // Upload images to a CKFinder connector (note that the response type is set to JSON).
      // uploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

      // Configure your file manager integration. This example uses CKFinder 3 for PHP.
      // filebrowserBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html',
      // filebrowserImageBrowseUrl: '/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
      // filebrowserUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      // filebrowserImageUploadUrl: '/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images',

      // Sometimes applications that convert HTML to PDF prefer setting image width through attributes instead of CSS styles.
      // For more information check:
      //  - About Advanced Content Filter: https://ckeditor.com/docs/ckeditor4/latest/guide/dev_advanced_content_filter
      //  - About Disallowed Content: https://ckeditor.com/docs/ckeditor4/latest/guide/dev_disallowed_content
      //  - About Allowed Content: https://ckeditor.com/docs/ckeditor4/latest/guide/dev_allowed_content_rules
      // disallowedContent: 'img{width,height,float}',
      // extraAllowedContent: 'img[width,height,align];span{background}',

      // Enabling extra plugins, available in the full-all preset: https://ckeditor.com/cke4/presets

      

      /*********************** File management support ***********************/
      // In order to turn on support for file uploads, CKEditor has to be configured to use some server side
      // solution with file upload/management capabilities, like for example CKFinder.
      // For more information see https://ckeditor.com/docs/ckeditor4/latest/guide/dev_ckfinder_integration

      // Uncomment and correct these lines after you setup your local CKFinder instance.
      // filebrowserBrowseUrl: 'http://example.com/ckfinder/ckfinder.html',
      // filebrowserUploadUrl: 'http://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files',
      /*********************** File management support ***********************/

      // Make the editing area bigger than default.
      // height: 1000,
      // width: 940,

      // An array of stylesheets to style the WYSIWYG area.
      // Note: it is recommended to keep your own styles in a separate file in order to make future updates painless.
      contentsCss: [
        'http://cdn.ckeditor.com/4.11.4/full-all/contents.css',
        'assets/css/pastefromword.css'
      ],

      // This is optional, but will let us define multiple different styles for multiple editors using the same CSS file.
      // bodyClass: 'document-editor',

      // Reduce the list of block elements listed in the Format dropdown to the most commonly used.
      format_tags: 'p;h1;h2;h3;pre',

      // Simplify the Image and Link dialog windows. The "Advanced" tab is not needed in most cases.
      removeDialogTabs: 'image:advanced;link:advanced',

      // Define the list of styles which should be available in the Styles dropdown list.
      // If the "class" attribute is used to style an element, make sure to define the style for the class in "mystyles.css"
      // (and on your website so that it rendered in the same way).
      // Note: by default CKEditor looks for styles.js file. Defining stylesSet inline (as below) stops CKEditor from loading
      // that file, which means one HTTP request less (and a faster startup).
      // For more information see https://ckeditor.com/docs/ckeditor4/latest/guide/dev_styles
      stylesSet: [
        /* Inline Styles */
        {
          name: 'Marker',
          element: 'span',
          attributes: {
            'class': 'marker'
          }
        },
        {
          name: 'Cited Work',
          element: 'cite'
        },
        {
          name: 'Inline Quotation',
          element: 'q'
        },

        /* Object Styles */
        {
          name: 'Special Container',
          element: 'div',
          styles: {
            padding: '5px 10px',
            background: '#eee',
            border: '1px solid #ccc'
          }
        },
        {
          name: 'Compact table',
          element: 'table',
          attributes: {
            cellpadding: '5',
            cellspacing: '0',
            border: '1',
            bordercolor: '#ccc'
          },
          styles: {
            'border-collapse': 'collapse'
          }
        },
        {
          name: 'Borderless Table',
          element: 'table',
          styles: {
            'border-style': 'hidden',
            'background-color': '#E6E6FA'
          }
        },
        {
          name: 'Square Bulleted List',
          element: 'ul',
          styles: {
            'list-style-type': 'square'
          }
        }
      ]
    }}
      
      />
    )
  }
}