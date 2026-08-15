import { LightningElement, api } from 'lwc';

export default class ReferenceDesigns extends LightningElement {

    @api selectedFurniture = [];

    selectedInspirations = [];

    // Currently opened design in the modal
    selectedDesign = null;

    // Currently displayed image in the modal
    activeImageIndex = 0;


    /*
     * Temporary inspiration data.
     *
     * Later these records will come from Salesforce.
     */

    inspirationDesigns = [

        {
            id: 'INS-001',
            name: 'Modern 6-Seater',
            description: 'Solid Wood',
            minimumPrice: 25000,
            maximumPrice: 35000,
            categoryIds: ['dining-table'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        },

        {
            id: 'INS-002',
            name: 'Premium 8-Seater',
            description: 'Premium Finish',
            minimumPrice: 35000,
            maximumPrice: 50000,
            categoryIds: ['dining-table'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        },

        {
            id: 'INS-003',
            name: 'Rustic Dining',
            description: 'Custom Finish',
            minimumPrice: 40000,
            maximumPrice: 55000,
            categoryIds: ['dining-table'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        },

        {
            id: 'INS-004',
            name: 'Floating TV Unit',
            description: 'Modern Wall Panel',
            minimumPrice: 25000,
            maximumPrice: 40000,
            categoryIds: ['tv-panel'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        },

        {
            id: 'INS-005',
            name: 'Full Wall TV Unit',
            description: 'Storage & Media Unit',
            minimumPrice: 40000,
            maximumPrice: 65000,
            categoryIds: ['tv-panel'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        },

        {
            id: 'INS-006',
            name: 'Minimal Wooden Wardrobe',
            description: 'Full Height Storage',
            minimumPrice: 55000,
            maximumPrice: 90000,
            categoryIds: ['almirah'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        },

        {
            id: 'INS-007',
            name: 'Classic Wooden Bed',
            description: 'Solid Wood Frame',
            minimumPrice: 45000,
            maximumPrice: 70000,
            categoryIds: ['bed'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        },

        {
            id: 'INS-008',
            name: 'Modern Storage Cabinet',
            description: 'Custom Storage',
            minimumPrice: 20000,
            maximumPrice: 35000,
            categoryIds: ['storage'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        },

        {
            id: 'INS-009',
            name: 'Classic Wooden Chair',
            description: 'Solid Wood Chair',
            minimumPrice: 5000,
            maximumPrice: 9000,
            categoryIds: ['chairs'],

            images: [
                '',
                '',
                '',
                '',
                ''
            ]
        }

    ];


    /*
     * Only show inspirations related to
     * the furniture selected by the customer.
     */

    get relevantInspirations() {

        if (
            !this.selectedFurniture ||
            this.selectedFurniture.length === 0
        ) {
            return [];
        }

        return this.inspirationDesigns
            .filter(design =>
                design.categoryIds.some(
                    categoryId =>
                        this.selectedFurniture.includes(categoryId)
                )
            )
            .map(design => {

                const isSelected =
                    this.selectedInspirations.includes(design.id);

                return {
                            ...design,
                            isSelected,

                            cardImage:
                                design.images && design.images.length
                                    ? design.images[0]
                                    : '',

                            cardClass: isSelected
                                ? 'design-card selected'
                                : 'design-card'
                        };

            });

    }


    /*
     * Open design preview.
     */

    handleDesignClick(event) {

        const designId =
            event.currentTarget.dataset.id;

        const design =
            this.inspirationDesigns.find(
                item => item.id === designId
            );

        if (!design) {
            return;
        }

        this.selectedDesign = design;

        this.activeImageIndex = 0;

    }


    /*
     * Close design preview.
     */

    handleCloseModal() {

        this.selectedDesign = null;

        this.activeImageIndex = 0;

    }


    /*
     * Prevent modal clicks from bubbling
     * to the overlay.
     */

    handleModalContentClick(event) {

        event.stopPropagation();

    }


    /*
     * Change active gallery image.
     */

    handleImageSelect(event) {

        this.activeImageIndex =
            Number(event.currentTarget.dataset.index);

    }


    /*
     * Currently displayed image.
     */

    get activeImageUrl() {

        if (!this.selectedDesign) {
            return '';
        }

        return this.selectedDesign.images[
            this.activeImageIndex
        ];

    }


    /*
     * Prepare thumbnail state.
     */

    get modalImages() {

        if (!this.selectedDesign) {
            return [];
        }

        return this.selectedDesign.images.map(
            (image, index) => {

                return {
                    url: image,

                    // Internal array index remains 0-4
                    index: index,

                    // Display number becomes 1-5
                    displayNumber: index + 1,

                    isActive:
                        index === this.activeImageIndex,

                    className:
                        index === this.activeImageIndex
                            ? 'thumbnail active'
                            : 'thumbnail'
                };

            }
        );

    }


    /*
     * Select the current design as
     * a reference.
     */

    handleSelectReference(event) {

        event.stopPropagation();

        if (!this.selectedDesign) {
            return;
        }

        const designId =
            this.selectedDesign.id;

        if (
            !this.selectedInspirations.includes(designId)
        ) {

            this.selectedInspirations = [
                ...this.selectedInspirations,
                designId
            ];

        }

        console.log(
            'Selected Inspirations:',
            this.selectedInspirations
        );

        this.handleCloseModal();

    }


    /*
     * Customer does not want to select
     * an inspiration.
     */

    handleContinueWithoutChoosing() {

        console.log(
            'REFERENCE DESIGNS: Continue Without Inspiration clicked'
        );

        this.dispatchEvent(
            new CustomEvent('continuewithoutinspiration', {
                bubbles: true,
                composed: true
            })
        );

    }

}