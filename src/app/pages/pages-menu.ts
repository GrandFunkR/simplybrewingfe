import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Warehouse',
    icon: { icon: 'warehouse', pack: 'menu' },
    link: '/pages/forms/inputs',
    home: true,
    children: [
      {
        title: 'Hops',
        icon: { icon: 'hops', pack: 'menu' },
        link: '/pages/tables/warehouse-hops',
      },
    ]
  }
];
