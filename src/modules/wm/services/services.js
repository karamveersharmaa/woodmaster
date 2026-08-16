import { LightningElement } from 'lwc';
import { products } from '../../../data/products';
import cartService from '../../../services/cartService';

export default class Services extends LightningElement {

    
    items = products;

    cart = [];

    handleAddToCart(event) {

        event.stopPropagation();

        const productId = event.target.dataset.id;

        const selectedProduct = this.items.find(
            product => product.id === productId
        );

        if (!selectedProduct) {
            return;
        }

        cartService.addItem(selectedProduct);

        console.log('Added To Cart');

        console.log(cartService.getItems());
    }


    handleProductClick(event) {

        const productId =
            event.currentTarget.dataset.id;

        const selectedProduct =
            this.items.find(
                item => item.id === productId
            );

        if (!selectedProduct) {
            return;
        }

        this.dispatchEvent(
            new CustomEvent('productclick', {
                detail: {
                    productId: selectedProduct.id
                },
                bubbles: true,
                composed: true
            })
        );
    }
}