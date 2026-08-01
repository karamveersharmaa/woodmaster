import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    currentPage = 'home';

    selectedProduct = null;

    get isHomePage() {
        return this.currentPage === 'home';
    }

    get isProductDetailsPage() {
        return this.currentPage === 'productDetails';
    }

    handleProductClick(event) {

        this.selectedProduct = event.detail;

        this.currentPage = 'productDetails';

        console.log('Selected Product');

        console.log(this.selectedProduct);

    }

    handleBackToHome() {
         console.log('Back event received in App');

        this.currentPage = 'home';

        this.selectedProduct = null;

    }

}