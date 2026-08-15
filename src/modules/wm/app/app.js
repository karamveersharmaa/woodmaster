import { LightningElement } from 'lwc';
import { products } from '../../../data/products';
export default class App extends LightningElement {

    currentPage = 'home';

    selectedProduct = null;

    connectedCallback() {

        // Handle Browser Back / Forward
        window.addEventListener('popstate', this.handleBrowserNavigation);

    }

    disconnectedCallback() {

        window.removeEventListener('popstate', this.handleBrowserNavigation);

    }

    handleBrowserNavigation = (event) => {

        if (event.state && event.state.page === 'productDetails') {

            this.currentPage = 'productDetails';
            this.selectedProduct = event.state.product;

        } else {

            this.currentPage = 'home';
            this.selectedProduct = null;

        }

    }

    get isHomePage() {

        return this.currentPage === 'home';

    }

    get isProductDetailsPage() {

        return this.currentPage === 'productDetails';

    }

    get isCartPage() {
        return this.currentPage === 'cart';
    }

    handleOpenCart() {

        this.currentPage = 'cart';

    }

    handleProductClick(event) {

        const productId = event.detail.productId;

        const selectedProduct = products.find(
            product => product.id === productId
        );

        if (!selectedProduct) {
            console.error('Product not found:', productId);
            return;
        }

        this.selectedProduct = selectedProduct;

        this.currentPage = 'productDetails';

        console.log('Selected Product');
        console.log(this.selectedProduct);

    }

    handleBackToHome() {

        console.log('Back event received');

        this.currentPage = 'home';

        this.selectedProduct = null;

    }

    handleCartClick() {

        console.log('Cart event received');

        this.currentPage = 'cart';

    }

    handleContinueShopping() {
        console.log('Continue Shopping event received');
        this.currentPage = 'home';

        window.history.pushState(
            { page: 'home' },
            '',
            '/'
        );

    }

    handlePlanFurniture() {

        console.log('Plan Furniture event received');

        this.currentPage = 'planFurniture';

    }

    get isPlanFurniturePage() {
        console.log('isPlanFurniturePage called');
        return this.currentPage === 'planFurniture';
    }

}