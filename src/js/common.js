import '../scss/variables.scss';
import '../scss/setup.scss';
import 'normalize.css';
import '../scss/fonts.scss';
import '../scss/bootstrap.scss';
import '../scss/page.scss';

import cssVars from 'css-vars-ponyfill';
import 'focus-visible';
import focusWithin from 'focus-within';

import Vue from 'vue';
import VIcon from '../components/VIcon';

cssVars();

focusWithin(document, {
	attr: false,
	className: 'focus-within',
	force: true,
});

Vue.config.productionTip = false;
Vue.component(VIcon.name, VIcon);
