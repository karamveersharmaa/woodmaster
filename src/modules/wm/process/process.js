import { LightningElement } from 'lwc';

export default class Process extends LightningElement {

    steps = [
        {
            id: '01',
            title: 'Tell Us What You Need',
            description:
                'Share what you want to build, your space, approximate dimensions and any reference designs you like.'
        },
        {
            id: '02',
            title: 'Site Visit & Measurement',
            description:
                'We visit your site, understand the space and take accurate measurements before planning the piece.'
        },
        {
            id: '03',
            title: 'Design & Approval',
            description:
                'We discuss the design, materials, dimensions and finish with you before anything is built.'
        },
        {
            id: '04',
            title: 'Build & Finish',
            description:
                'Your furniture is carefully built and finished according to the approved requirements.'
        },
        {
            id: '05',
            title: 'Delivery & Installation',
            description:
                'We deliver, assemble and install the finished piece at your location.'
        }
    ];

}