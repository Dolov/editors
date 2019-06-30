

import loadScript from 'load-script';

let promise;

function getEditorNamespace( editorURL ) {
	if ( typeof editorURL !== 'string' || editorURL.length < 1 ) {
		throw new TypeError( 'CKEditor URL must be a non-empty string.' );
	}

	if ( 'CKEDITOR' in window ) {
		return Promise.resolve( window.CKEDITOR );
	} else if ( !promise ) {
		promise = new Promise( ( scriptResolve, scriptReject ) => {
			loadScript( editorURL, err => {
				if ( err ) {
					scriptReject( err );
				} else {
					scriptResolve( window.CKEDITOR );
					promise = undefined;
				}
			} );
		} );
	}

	return promise;
}

export default getEditorNamespace;
