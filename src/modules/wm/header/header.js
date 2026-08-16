import { LightningElement, track } from 'lwc';
import cartService from '../../../services/cartService';

export default class Header extends LightningElement {
  @track menuOpen = false;
  @track cartCount = 0;

  connectedCallback() {
    console.log('HEADER CONNECTED');
    this.loadCartCount();
  }

  disconnectedCallback() {

        window.removeEventListener(
            'cartchange',
            this.handleCartChange
        );

  }

  handleCartChange = () => {
        console.log('HEADER RECEIVED CART CHANGE');
        console.log('Cart Changed - Updating Header');

        this.loadCartCount();

  };

  loadCartCount() {
    this.cartCount = cartService.getItemCount();
    console.log(
            'HEADER CART COUNT:',
            this.cartCount
        );
  }

  openCart() {
    console.log('Cart Icon Clicked');
    this.dispatchEvent(
        new CustomEvent('cartclick')
    );
  }


  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  get navClass() {
    return this.menuOpen ? 'links open' : 'links';
  }

  handleExploreProducts() {
      console.log('Header: Explore Products clicked');

      this.dispatchEvent(
          new CustomEvent('exploreproducts', {
              bubbles: true,
              composed: true
          })
      );
  }
}
