import { LightningElement } from 'lwc';

export default class Footer extends LightningElement {
  year = new Date().getFullYear();
}
