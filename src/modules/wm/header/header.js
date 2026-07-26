import { LightningElement, track } from 'lwc';

export default class Header extends LightningElement {
  @track menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  get navClass() {
    return this.menuOpen ? 'links open' : 'links';
  }
}
