import { LightningElement } from 'lwc';

export default class About extends LightningElement {

    handlePlanFurniture() {

        this.dispatchEvent(
            new CustomEvent('planfurniture', {
                bubbles: true,
                composed: true
            })
        );

    }

}