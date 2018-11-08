import '../css/common.scss';
import cssVars from 'css-vars-ponyfill';
import 'focus-visible';
import focusWithin from 'focus-within';

cssVars();

focusWithin(document, {
	attr: false,
	className: 'focus-within',
	force: true,
});
