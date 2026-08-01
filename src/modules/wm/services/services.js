import { LightningElement } from 'lwc';

export default class Services extends LightningElement {

    items = [
        {
            id: 'chair-01',
            title: 'Premium Wooden Chair',
            material: 'Sheesham Wood',
            price: '3,500',
            rating: 5,
            image: '',
            description:'Premium handcrafted chair made from solid Sheesham wood. Designed for comfort, durability and timeless elegance.'
        },
        {
            id: 'dining-01',
            title: 'Dining Table',
            material: 'Solid Mango Wood',
            price: '18,999',
            rating: 5,
            image: '',
            description:'Premium handcrafted chair made from solid Sheesham wood. Designed for comfort, durability and timeless elegance.'
        },
        {
            id: 'almirah-01',
            title: 'Modern Almirah',
            material: 'Teak Wood',
            price: '27,500',
            image: '',
            description:'Premium handcrafted chair made from solid Sheesham wood. Designed for comfort, durability and timeless elegance.'
        },
        {
            id: 'door-01',
            title: 'Wooden Panel Door',
            material: 'Sal Wood',
            price: '12,000',
            rating: 4,
            image: '',
            description:'Premium handcrafted chair made from solid Sheesham wood. Designed for comfort, durability and timeless elegance.'
        },
        {
            id: 'study-01',
            title: 'Study Table',
            material: 'Engineered Wood',
            price: '8,999',
            rating: 5,
            image: '',
            description:'Premium handcrafted chair made from solid Sheesham wood. Designed for comfort, durability and timeless elegance.'
        },
        {
            id: 'bed-01',
            title: 'King Size Bed',
            material: 'Sheesham Wood',
            price: '34,999',
            rating: 5,
            image: '',
            description:'Premium handcrafted chair made from solid Sheesham wood. Designed for comfort, durability and timeless elegance.'
        },
        {
            id: 'tv-01',
            title: 'TV Unit',
            material: 'Teak Finish',
            price: '15,999',
            rating: 4,
            image: '',
            description:'Premium handcrafted chair made from solid Sheesham wood. Designed for comfort, durability and timeless elegance.'
        },
        {
            id: 'pooja-01',
            title: 'Pooja Unit',
            material: 'Solid Wood',
            price: '11,999',
            rating: 5,
            image: '',
            description:'Premium handcrafted chair made from solid Sheesham wood. Designed for comfort, durability and timeless elegance.'
        }
    ];

    cart = [];

    handleAddToCart(event) {

        event.stopPropagation();

        const productId = event.currentTarget.dataset.id;

        const selectedProduct = this.items.find(
            item => item.id === productId
        );


        console.log('Added To Cart', selectedProduct);

    }

    handleProductClick(event) {

        const productId = event.currentTarget.dataset.id;

        const selectedProduct = this.items.find(
            item => item.id === productId
        );

        this.dispatchEvent(
            new CustomEvent('productclick', {
                detail: selectedProduct,
                bubbles: true,
                composed: true
            })
        );

    }
}