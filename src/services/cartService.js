class CartService {

    STORAGE_KEY = 'woodmaster-cart';

    cartItems = [];

    constructor() {
        this.loadCart();
    }

    // ===========================
    // Load Cart From localStorage
    // ===========================
    loadCart() {

        const savedCart = localStorage.getItem(this.STORAGE_KEY);

        if (savedCart) {
            this.cartItems = JSON.parse(savedCart);
        }

    }

    // ===========================
    // Save Cart
    // ===========================
    saveCart() {

        localStorage.setItem(
            this.STORAGE_KEY,
            JSON.stringify(this.cartItems)
        );

    }

    // ===========================
    // Add Item
    // ===========================
    addItem(product) {

        const existingItem = this.cartItems.find(
            item => item.product.id === product.id
        );

        if (existingItem) {

            console.log('Before:', existingItem.quantity);

            existingItem.quantity++;

            console.log('After:', existingItem.quantity);

        } else {

            this.cartItems.push({
                product,
                quantity: 1
            });

            console.log('Added new item with quantity 1');
        }

        this.saveCart();

        console.table(this.cartItems);
    }

    // ===========================
    // Remove Item
    // ===========================
    removeItem(productId) {

        this.cartItems = this.cartItems.filter(
            item => item.product.id !== productId
        );

        this.saveCart();

    }

    // ===========================
    // Update Quantity
    // ===========================
    updateQuantity(productId, quantity) {

        const item = this.cartItems.find(
            item => item.product.id === productId
        );

        if (!item) {
            return;
        }

        item.quantity = quantity;

        if (item.quantity <= 0) {

            this.removeItem(productId);

            return;

        }

        this.saveCart();

    }

    // ===========================
    // Get Cart Items
    // ===========================
    getItems() {

        return [...this.cartItems];

    }

    // ===========================
    // Total Items
    // ===========================
    getItemCount() {

        return this.cartItems.reduce(
            (count, item) => count + item.quantity,
            0
        );

    }

    // ===========================
    // Grand Total
    // ===========================
    getGrandTotal() {

        return this.cartItems.reduce(
            (total, item) => {

                const price = Number(
                    item.product.price.replace(/,/g, '')
                );

                return total + (price * item.quantity);

            },
            0
        );

    }

    // ===========================
    // Clear Cart
    // ===========================
    clearCart() {

        this.cartItems = [];

        this.saveCart();

    }

}

const cartService = new CartService();

export default cartService;