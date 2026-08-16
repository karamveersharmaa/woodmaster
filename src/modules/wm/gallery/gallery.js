import { LightningElement } from 'lwc';

import almirah from '../../../assets/gallery/Almirah.webp';
import sheeshamTable from '../../../assets/gallery/SheeshamTable.webp';
import panelDoor from '../../../assets/gallery/PanelDoor.jpg';
import diningTable from '../../../assets/gallery/DiningTable.webp';
import chairSet from '../../../assets/gallery/ChairSet.webp';
import poojaUnit from '../../../assets/gallery/PoojaUnit.jpg';


export default class Gallery extends LightningElement {

    pieces = [
        {
            id: 'p1',
            title: 'Teak 3-Door Almirah',
            meta: 'Sector 62, Noida',
            image: almirah
        },
        {
            id: 'p2',
            title: 'Sheesham Study Table',
            meta: 'Indirapuram, Ghaziabad',
            image: sheeshamTable
        },
        {
            id: 'p3',
            title: 'Panel Main Door',
            meta: 'Vaishali, Ghaziabad',
            image: panelDoor
        },
        {
            id: 'p4',
            title: '6-Seater Dining Table',
            meta: 'Sector 137, Noida',
            image: diningTable
        },
        {
            id: 'p5',
            title: 'Mortise-Joined Chair Set',
            meta: 'Raj Nagar Extension',
            image: chairSet
        },
        {
            id: 'p6',
            title: 'Pooja Unit, Mango Wood',
            meta: 'Crossings Republik',
            image: poojaUnit
        }
    ];


    handlePlanFurniture() {

        console.log(
            'Gallery: Plan Your Furniture clicked'
        );

        this.dispatchEvent(
            new CustomEvent('planfurniture')
        );

    }

}