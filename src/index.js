import { createElement } from 'lwc';
import App from 'wm/app';

const elm = createElement('wm-app', { is: App });
document.querySelector('#main').appendChild(elm);
