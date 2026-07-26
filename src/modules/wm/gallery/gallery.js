import { LightningElement } from 'lwc';

export default class Gallery extends LightningElement {
  pieces = [
    {
      id: 'p1',
      title: 'Teak 3-Door Almirah',
      meta: 'Sector 62, Noida',
      color: '#5A3A24',
      seed: 2,
      filterId: 'grain-1',
      filterUrl: 'url(#grain-1)'
    },
    {
      id: 'p2',
      title: 'Sheesham Study Table',
      meta: 'Indirapuram, Ghaziabad',
      color: '#7A4A2B',
      seed: 7,
      filterId: 'grain-2',
      filterUrl: 'url(#grain-2)'
    },
    {
      id: 'p3',
      title: 'Panel Main Door',
      meta: 'Vaishali, Ghaziabad',
      color: '#3E2A1C',
      seed: 4,
      filterId: 'grain-3',
      filterUrl: 'url(#grain-3)'
    },
    {
      id: 'p4',
      title: '6-Seater Dining Table',
      meta: 'Sector 137, Noida',
      color: '#8A5A34',
      seed: 11,
      filterId: 'grain-4',
      filterUrl: 'url(#grain-4)'
    },
    {
      id: 'p5',
      title: 'Mortise-Joined Chair Set',
      meta: 'Raj Nagar Extension',
      color: '#6B4426',
      seed: 9,
      filterId: 'grain-5',
      filterUrl: 'url(#grain-5)'
    },
    {
      id: 'p6',
      title: 'Pooja Unit, Mango Wood',
      meta: 'Crossings Republik',
      color: '#96633B',
      seed: 14,
      filterId: 'grain-6',
      filterUrl: 'url(#grain-6)'
    }
  ];
}
