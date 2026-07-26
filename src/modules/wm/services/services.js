import { LightningElement } from 'lwc';

export default class Services extends LightningElement {
  items = [
    {
      id: 'almirah',
      title: 'Almirahs',
      description:
        'Floor-to-ceiling wardrobes built to your room\u2019s exact width, with adjustable shelving, drawers and hanging space laid out around what you actually own.',
      tag: 'Sheesham \u00b7 Teak \u00b7 Mango wood',
      path: 'M14 10 L14 38 M34 10 L34 38 M14 10 L34 10 M14 38 L34 38 M24 10 L24 38'
    },
    {
      id: 'door',
      title: 'Doors',
      description:
        'Solid-core main doors, panel doors and frames, hung true and finished to weather Delhi\u2019s summers without warping.',
      tag: 'Sal \u00b7 Teak \u00b7 Engineered core',
      path: 'M16 8 L16 40 L32 40 L32 8 Z M27 24 L27 24.5'
    },
    {
      id: 'table',
      title: 'Dining Tables',
      description:
        'Family-size tables in a single slab or joined boards, sized for the room and the number of chairs around it.',
      tag: 'Mango \u00b7 Sheesham \u00b7 Live edge',
      path: 'M8 16 L40 16 M12 16 L12 38 M36 16 L36 38'
    },
    {
      id: 'chair',
      title: 'Chairs',
      description:
        'Dining and accent chairs, mortise-and-tenon joined at the frame so they hold up to daily use for years, not seasons.',
      tag: 'Sheesham \u00b7 Cane \u00b7 Upholstered',
      path: 'M14 10 L14 26 L34 26 L34 10 M16 26 L14 40 M32 26 L34 40'
    },
    {
      id: 'study-table',
      title: 'Study Tables',
      description:
        'Desks with built-in drawers, cable routing and shelving, sized for kids\u2019 rooms, work-from-home corners or shared study spaces.',
      tag: 'Ply core \u00b7 Solid edge \u00b7 Custom fit',
      path: 'M8 20 L40 20 M12 20 L12 38 M36 20 L36 38 M28 20 L28 30 L36 30'
    },
    {
      id: 'custom',
      title: 'Custom Woodwork',
      description:
        'TV units, pooja units, bookshelves, window seats, beds \u2014 if it can be drawn on paper, we can measure your room and build it in wood.',
      tag: 'Site visit \u00b7 Free sketch',
      path: 'M10 34 L18 14 L24 24 L30 10 L38 34 Z'
    }
  ];
}
