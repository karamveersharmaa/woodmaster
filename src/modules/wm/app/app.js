import { LightningElement } from 'lwc';
import { products } from '../../../data/products';

export default class App extends LightningElement {

    currentPage = 'home';

    selectedProduct = null;


    connectedCallback() {

        window.addEventListener(
            'popstate',
            this.handleBrowserNavigation
        );

    }


    disconnectedCallback() {

        window.removeEventListener(
            'popstate',
            this.handleBrowserNavigation
        );

    }


    // =========================================
    // Browser Navigation
    // =========================================

    handleBrowserNavigation = (event) => {

        const page = event.state?.page || 'home';


        if (page === 'productDetails') {

            this.currentPage = 'productDetails';

            this.selectedProduct = event.state.product;

            return;
        }


        if (page === 'products') {

            this.currentPage = 'products';

            this.selectedProduct = null;

            return;
        }


        if (page === 'cart') {

            this.currentPage = 'cart';

            this.selectedProduct = null;

            return;
        }


        this.currentPage = 'home';

        this.selectedProduct = null;

    };


    // =========================================
    // Page Getters
    // =========================================

    get isHomePage() {
        return this.currentPage === 'home';
    }


    get isProductsPage() {
        return this.currentPage === 'products';
    }


    get isProductDetailsPage() {
        return this.currentPage === 'productDetails';
    }


    get isCartPage() {
        return this.currentPage === 'cart';
    }

    get isPlanFurniturePage() {
        return this.currentPage === 'planFurniture';
    }


    // =========================================
    // Plan Your Furniture
    // =========================================

    handlePlanFurniture() {

        console.log('Plan Furniture event received');

        const planFurniture =
            this.template.querySelector('wm-plan-furniture');

        if (planFurniture) {

            planFurniture.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

        }

    }


    // =========================================
    // Explore Products
    // =========================================

    handleExploreProducts() {

        console.log('Explore Products event received');
        this.currentPage = 'products';

    }


    // =========================================
    // Product Click
    // =========================================

    handleProductClick(event) {

        const productId =
            event.detail.productId;


        const selectedProduct =
            products.find(
                product => product.id === productId
            );


        if (!selectedProduct) {

            console.error(
                'Product not found:',
                productId
            );

            return;
        }


        this.selectedProduct = selectedProduct;

        this.currentPage = 'productDetails';

    }


    // =========================================
    // Back From Product Details
    // =========================================

    handleBackToProducts() {

        console.log('Back to Products clicked');

        this.currentPage = 'products';

        this.selectedProduct = null;

    }


    // =========================================
    // Cart
    // =========================================

    handleOpenCart() {

        this.currentPage = 'cart';

    }


    handleCartClick() {

        console.log('Cart event received');

        this.currentPage = 'cart';

    }


    // =========================================
    // Continue Shopping
    // =========================================

    handleContinueShopping() {

        console.log('Continue Shopping event received');

        this.currentPage = 'home';

        this.selectedProduct = null;

    }


    // =========================================
    // Back To Home
    // =========================================

    handleBackToHome() {

        console.log('Back event received');

        this.currentPage = 'home';

        this.selectedProduct = null;

    }

}