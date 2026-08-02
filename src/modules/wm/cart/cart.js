import { LightningElement } from 'lwc';
import cartService from '../../../services/cartService';

export default class Cart extends LightningElement {

    cartItems = [];

    itemCount = 0;

    grandTotal = 0;

    connectedCallback() {
        this.loadCart();
    }

    loadCart() {

        this.cartItems = cartService.getItems();

        this.itemCount = cartService.getItemCount();

        this.grandTotal = cartService.getGrandTotal();

        console.log('Cart Loaded');
        console.table(this.cartItems);

    }

    get hasItems() {
        return this.cartItems.length > 0;
    }

    get formattedGrandTotal() {
        return this.grandTotal.toLocaleString('en-IN');
    }

    get formattedCartItems() {

        return this.cartItems.map(item => {

            const price = Number(
                item.product.price.replace(/,/g, '')
            );

            const subtotal = price * item.quantity;

            return {

                ...item,

                formattedPrice: `₹${item.product.price}`,

                formattedSubtotal: `₹${subtotal.toLocaleString('en-IN')}`

            };

        });

    }

    increaseQuantity(event) {

        const productId = event.target.dataset.id;

        const item = this.cartItems.find(
            item => item.product.id === productId
        );

        if (!item) {
            return;
        }

        cartService.updateQuantity(
            productId,
            item.quantity + 1
        );

        this.loadCart();

    }

    decreaseQuantity(event) {

        const productId = event.target.dataset.id;

        const item = this.cartItems.find(
            item => item.product.id === productId
        );

        if (!item) {
            return;
        }

        cartService.updateQuantity(
            productId,
            item.quantity - 1
        );

        this.loadCart();

    }

    removeItem(event) {

        const productId = event.target.dataset.id;

        cartService.removeItem(productId);

        this.loadCart();

    }

    continueShopping() {
        console.log('Continue Shopping Clicked');
        this.dispatchEvent(
            new CustomEvent('backtohome')
        );

    }

}