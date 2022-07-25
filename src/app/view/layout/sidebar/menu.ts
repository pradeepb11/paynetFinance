import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Finance',
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
  {
    label: 'IT',
    isTitle: true,
  },
  {
    label: 'Add Processor',
    icon: 'cast',
    link: '/addprocessor'
  },
  {
    label: 'Add Payment Processor',
    icon: 'cast',
    link: '/paymentprocessor'
  },
  {
    label: 'Operation',
    isTitle: true,
  },
  {
    label: 'Activation MID',
    icon: 'cast',
    link: '/activationmid'
  },
  {
    label:'Merchant Profile',
    icon: 'cast',
    link: '/merchantprofile'
  }
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
