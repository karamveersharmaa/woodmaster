import { LightningElement } from 'lwc';

export default class Hero extends LightningElement {


    handlePlanFurniture() {
        console.log('Hero: Plan Your Furniture button clicked');
        this.dispatchEvent(
            new CustomEvent('planfurniture')
        );

    }
}
