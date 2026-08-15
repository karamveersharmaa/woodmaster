import { LightningElement } from 'lwc';

export default class PlanFurniture extends LightningElement {

    currentStep = 1;
    selectedFurniture = [];
    location = '';
    preferredTime = '';
    customerName = '';
    phone = '';
    email = '';
    contactMethod = '';

    renderedCallback() {
        const select = this.template.querySelector('#preferredTime');

        if (select && this.preferredTime) {
            select.value = this.preferredTime;
        }
    }

    furnitureOptions = [
        {
            id: 'tv-panel',
            name: 'TV Panel',
            description: 'TV units, wall panels and media storage'
        },
        {
            id: 'dining-table',
            name: 'Dining Table',
            description: 'Dining tables made to your size and style'
        },
        {
            id: 'chairs',
            name: 'Chairs',
            description: 'Dining, lounge and custom wooden chairs'
        },
        {
            id: 'almirah',
            name: 'Almirah',
            description: 'Wardrobes and custom storage solutions'
        },
        {
            id: 'bed',
            name: 'Bed',
            description: 'Wooden beds designed for your space'
        },
        {
            id: 'storage',
            name: 'Storage & Cabinets',
            description: 'Cabinets, shelves and custom storage'
        },
        {
            id: 'doors',
            name: 'Wooden Doors',
            description: 'Custom doors made to your requirements'
        },
        {
            id: 'office',
            name: 'Office Furniture',
            description: 'Desks, storage and other office furniture'
        },
        {
            id: 'other',
            name: 'Others',
            description: 'Tell us what you have in mind'
        }
    ];

    get isStepOne() {
        return this.currentStep === 1;
    }

    get isStepTwo() {
        return this.currentStep === 2;
    }

    get isStepThree() {
        return this.currentStep === 3;
    }

    get isStepFour() {
        return this.currentStep === 4;
    }

    get isStepFive() {
        return this.currentStep === 5;
    }

    get furnitureOptionsWithState() {

        return this.furnitureOptions.map(option => {

            const isSelected =
                this.selectedFurniture.includes(option.id);

            return {
                ...option,
                isSelected,
                cardClass: isSelected
                    ? 'furniture-card selected'
                    : 'furniture-card'
            };

        });

    }

    get isNextDisabled() {

        if (this.isStepOne) {
            return this.selectedFurniture.length === 0;
        }

        if (this.isStepTwo) {
            return this.isStepTwoInvalid;
        }

        if (this.isStepThree) {
            return this.isStepThreeInvalid;
        }

        return false;
    }

    get displayEmail() {
        return this.email ? this.email : 'Not provided';
    }

    get selectedFurnitureDetails() {

        return this.furnitureOptions.filter(
            option => this.selectedFurniture.includes(option.id)
        );

    }

    handleBack() {

        if (this.currentStep > 1) {
            this.currentStep -= 1;
        }

    }


    handleFurnitureSelect(event) {

        const furnitureId = event.currentTarget.dataset.id;

        if (this.selectedFurniture.includes(furnitureId)) {

            this.selectedFurniture =
                this.selectedFurniture.filter(
                    id => id !== furnitureId
                );

        } else {

            this.selectedFurniture = [
                ...this.selectedFurniture,
                furnitureId
            ];

        }

        console.log(
            'Selected Furniture:',
            this.selectedFurniture
        );

    }

    handleNext() {

        if (this.isNextDisabled) {
            return;
        }

        if (this.currentStep === 1) {

            this.currentStep = 2;

            console.log(
                'Selected Furniture:',
                this.selectedFurniture
            );

            return;
        }

        if (this.currentStep === 2) {

            this.currentStep = 3;

            console.log('Location:', this.location);
            console.log('Preferred Time:', this.preferredTime);

            return;
        }

        if (this.currentStep === 3) {

            this.currentStep = 4;

            console.log('Customer Name:', this.customerName);
            console.log('Phone:', this.phone);
            console.log('Email:', this.email);
            console.log('Contact Method:', this.contactMethod);

            return;
        }

    }

    get isStepTwoInvalid() {
        return !this.location.trim() || !this.preferredTime;
    }

    handleLocationChange(event) {
        this.location = event.target.value.slice(0, 150);
    }

    handleTimeChange(event) {
        this.preferredTime = event.target.value;
    }

    handleCustomerNameChange(event) {
         let value = event.target.value;

        // Allow letters and spaces only
        value = value.replace(/[^a-zA-Z\s]/g, '');

        this.customerName = value;
    }

    handlePhoneChange(event) {

        let value = event.target.value;

        // Numbers only
        value = value.replace(/\D/g, '');

        // Maximum 10 digits
        value = value.slice(0, 10);

        this.phone = value;

    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleContactMethodChange(event) {

        this.contactMethod =
            event.currentTarget.dataset.value;

    }

    get isCallSelected() {
        return this.contactMethod === 'Call';
    }

    get isWhatsAppSelected() {
        return this.contactMethod === 'WhatsApp';
    }
    
    get callOptionClass() {

        return this.isCallSelected
            ? 'contact-option selected'
            : 'contact-option';

    }

    get whatsappOptionClass() {

        return this.isWhatsAppSelected
            ? 'contact-option selected'
            : 'contact-option';

    }

    get stepOneClass() {

        if (this.currentStep === 1) {
            return 'progress-step active';
        }

        return 'progress-step completed';
    }


    get stepTwoClass() {

        if (this.currentStep === 2) {
            return 'progress-step active';
        }

        return 'progress-step';
    }


    get stepThreeClass() {

        if (this.currentStep === 3) {
            return 'progress-step active';
        }

        return 'progress-step';
    }

    get stepFourClass() {

        if (this.currentStep === 4) {
            return 'progress-step active';
        }

        return 'progress-step';
    }

    handleSubmit() {

        const requestData = {
            furniture: this.selectedFurniture,
            location: this.location,
            preferredTime: this.preferredTime,
            customerName: this.customerName,
            phone: this.phone,
            email: this.email,
            contactMethod: this.contactMethod
        };

        console.log(
            'Furniture Request:',
            JSON.stringify(requestData, null, 2)
        );

        this.currentStep = 5;

    }

    handleBackToHome() {

        this.currentStep = 1;

        this.selectedFurniture = [];
        this.location = '';
        this.preferredTime = '';
        this.customerName = '';
        this.phone = '';
        this.email = '';
        this.contactMethod = '';

    }

    handleExitToHome() {
console.log('PlanFurniture: Back to Home clicked');
        this.dispatchEvent(
            new CustomEvent('backtohome')
        );

    }

    get isStepThreeInvalid() {

        const validPhone =
            /^\d{10}$/.test(this.phone);

        const validEmail =
            !this.email ||
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);

        return (
            !this.customerName.trim() ||
            !validPhone ||
            !validEmail ||
            !this.contactMethod
        );
    }
}