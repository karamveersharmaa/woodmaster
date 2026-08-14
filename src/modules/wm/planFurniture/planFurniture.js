import { LightningElement } from 'lwc';

export default class PlanFurniture extends LightningElement {

    currentStep = 1;

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

    selectedFurniture = [];


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

}