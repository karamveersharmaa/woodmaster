import { LightningElement, api } from 'lwc';

export default class ProductDetails extends LightningElement {

    // Product received from App component
    @api product;

    quantity = 1;

    // Increase Quantity
    increaseQty() {
        this.quantity++;
    }

    // Decrease Quantity
    decreaseQty() {
        if (this.quantity > 1) {
            this.quantity--;
        }
    }

    // Add To Cart
    addToCart() {
        console.log('Add To Cart');
        console.log(this.product);
        console.log('Quantity :', this.quantity);

        // We'll connect this to the Cart page later
    }

    // Buy Now
    buyNow() {
        console.log('Buy Now');
        console.log(this.product);
    }

    // Back to Home
    backToProducts() {
         console.log('Back button clicked');
        this.dispatchEvent(new CustomEvent('back'));
    }

    // Dynamic Rating Stars
    get ratingStars() {
        return '★'.repeat(this.product?.rating || 0);
    }

    // Formatted Price
    get formattedPrice() {
        return `₹${this.product?.price}`;
    }

    // Stock Status (for future use)
    get stockStatus() {
        return this.product?.stock || 'In Stock';
    }

}