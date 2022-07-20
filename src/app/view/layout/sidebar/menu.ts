import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true,
  },
  {
    label: 'Dashborad',
    icon: 'home',
    link: '/dashboard',
  },
  {
    label: 'Add Pricing',
    icon: 'dollar-sign',
    link: '/addpricing'
  },
  {
    label: 'Report',
    icon: 'slack',
    link: '/report'
  },
  {
    label: 'Merchant Virtula Account',
    icon: 'package',
    link: '/merchantvc'
  },
  {
    label: 'Bank List',
    icon: 'briefcase',
    link: '/banklist'
  },
  // {
  //   label: 'Customer',
  //   icon: 'user',
  //   link: '/customer'
  // },
  // {
  //   label: 'Devloper Setting',
  //   icon: 'package',
  //   link: '/devlopersetting'
  // },

  // {
  //   label: 'Invoice',
  //   icon: 'slack',
  //   subItems: [
  //     {
  //       label: 'Invoice A',
  //         link: '',
  //     },
  //     {
  //       label: 'Invoice B',
  //       link: ''
  //     },
  //     {
  //       label: 'Invoice C',
  //       link: ''
  //     },
  //   ]
  // },
  // {
  //   label:'Go Live',
  //   icon: 'home',
  //   link: '/personalinfo'
  // }
 
  
];
