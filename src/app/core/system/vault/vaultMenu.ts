
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}

// Export the menu data
export const MENU_ITEMS: MenuItem[] = [
  { name: 'Document', icon: 'assets/custome/icon-40.svg', link: '/dashboard' },
  { name: 'Files', icon: 'assets/custome/icon-5.svg', link: '/cashbook' },
  { name: 'Credit cards', icon: 'assets/custome/icon-19.svg', link: '/transaction-history' },
  { name: 'Banks', icon: 'assets/custome/icon-11.svg', link: '/ledger' },
  { name: 'E-mails', icon: 'assets/custome/icon-28.svg', link: '/records' },
  { name: 'Social accounts', icon: 'assets/custome/icon-23.svg', link: '/tools' },
  { name: 'Cloud', icon: 'assets/custome/icon-6.svg', link: '/storage' },
  { name: 'Help center', icon: 'assets/custome/icon-62.svg', link: '/help-center' },
  { name: 'Accounts', icon: 'assets/custome/icon-20.svg', link: '/cashbook-accounts' },
  { name: 'Budget', icon: 'assets/custome/icon-2.svg', link: '/budget' },
  { name: 'Vault', icon: 'assets/custome/icon-34.svg', link: '/vault' },

];
