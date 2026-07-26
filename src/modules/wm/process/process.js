import { LightningElement } from 'lwc';

export default class Process extends LightningElement {
  steps = [
    {
      id: '01',
      title: 'Consult & Measure',
      description:
        'We visit your site, take exact measurements and talk through how the piece will actually be used.'
    },
    {
      id: '02',
      title: 'Sketch & Approve',
      description:
        'You get a dimensioned sketch and a materials list before any wood is cut, so there are no surprises.'
    },
    {
      id: '03',
      title: 'Select Timber',
      description:
        'We choose and season the right wood for the job \u2014 sheesham, teak or mango \u2014 based on budget and use.'
    },
    {
      id: '04',
      title: 'Build & Finish',
      description:
        'Joined by hand at the workshop, sanded through several grits, and finished in your choice of stain.'
    },
    {
      id: '05',
      title: 'Deliver & Install',
      description:
        'Delivered, assembled and levelled on site \u2014 doors hung, drawers eased, edges checked by hand.'
    }
  ];
}
