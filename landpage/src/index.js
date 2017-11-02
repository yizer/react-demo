import React from 'react';
import ReactDOM from 'react-dom';
import './assets/js/rem.js';
import './assets/css/com-phone.css';
import './assets/css/style.css';
// 兼容fetch api
import 'whatwg-fetch'
import Router from './router/Router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
