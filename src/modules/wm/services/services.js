import { LightningElement } from 'lwc';

export default class Services extends LightningElement {

    items = [
        {
            id: 'chair-01',
            name: 'Premium Wooden Chair',
            material: 'Sheesham Wood',
            price: '3,500',
            rating: 5,
            image: ''
        },
        {
            id: 'dining-01',
            name: 'Dining Table',
            material: 'Solid Mango Wood',
            price: '18,999',
            rating: 5,
            image: ''
        },
        {
            id: 'almirah-01',
            name: 'Modern Almirah',
            material: 'Teak Wood',
            price: '27,500',
            rating: 5,
            image: ''
        },
        {
            id: 'door-01',
            name: 'Wooden Panel Door',
            material: 'Sal Wood',
            price: '12,000',
            rating: 4,
            image: ''
        },
        {
            id: 'study-01',
            name: 'Study Table',
            material: 'Engineered Wood',
            price: '8,999',
            rating: 5,
            image: ''
        },
        {
            id: 'bed-01',
            name: 'King Size Bed',
            material: 'Sheesham Wood',
            price: '34,999',
            rating: 5,
            image: ''
        },
        {
            id: 'tv-01',
            name: 'TV Unit',
            material: 'Teak Finish',
            price: '15,999',
            rating: 4,
            image: ''
        },
        {
            id: 'pooja-01',
            name: 'Pooja Unit',
            material: 'Solid Wood',
            price: '11,999',
            rating: 5,
            image: ''
        }
    ];

    cart = [];

    handleAddToCart(event) {

        const productId = event.target.dataset.id;

        const selectedProduct = this.items.find(
            product => product.id === productId
        );

        if (!selectedProduct) {
            return;
        }

        this.cart = [...this.cart, selectedProduct];

        console.log('Added to Cart:', selectedProduct);

        console.log('Current Cart:', this.cart);

        // Future Enhancement:
        // localStorage
        // Publish Event
        // Salesforce REST API
    }
}