// Define the interface for MenuItem
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}

// Export the menu data
export const MENU_ITEMS: MenuItem[] = [
  { name: 'test', icon: 'assets/custome/icon-40.svg', link: '/dashboard' },
  { name: 'Cashbook', icon: 'assets/custome/icon-5.svg', link: '/cashbook' },
  { name: 'Transactions', icon: 'assets/custome/icon-19.svg', link: '/transaction-history' },
  { name: 'Ledger', icon: 'assets/custome/icon-11.svg', link: '/ledger' },
  { name: 'TrialBalance', icon: 'assets/custome/icon-42.svg', link: '/tribalance' },
  { name: 'Records', icon: 'assets/custome/icon-28.svg', link: '/records' },
  { name: 'Tools', icon: 'assets/custome/icon-23.svg', link: '/tools' },
   { name: 'Cloud', icon: 'assets/custome/icon-6.svg', link: '/storage' },
  { name: 'Help center', icon: 'assets/custome/icon-62.svg', link: '/help-center' },
  { name: 'Accounts', icon: 'assets/custome/icon-20.svg', link: '/cashbook-accounts' },
  { name: 'Budget', icon: 'assets/custome/icon-2.svg', link: '/budget' },
  { name: 'Vault', icon: 'assets/custome/icon-34.svg', link: '/vault' },

];
