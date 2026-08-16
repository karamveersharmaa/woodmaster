import { LightningElement } from 'lwc';

export default class Testimonials extends LightningElement {

    quotes = [
        {
            id: 't1',
            text:
                'They measured the alcove twice before cutting anything. The almirah fits like it was built into the wall, because it basically was.',
            name: 'Priya M.',
            piece: 'Almirah, Sector 62'
        },
        {
            id: 't2',
            text:
                'Asked for a dining table that could take a toddler standing on it. Two years on, not a single wobble in the joints.',
            name: 'Arjun S.',
            piece: 'Dining table, Indirapuram'
        },
        {
            id: 't3',
            text:
                'Showed up with a proper sketch and a wood sample before starting. Felt like working with an architect, not a contractor.',
            name: 'Neha & Karan',
            piece: 'Study table & bookshelf'
        }
    ];

}