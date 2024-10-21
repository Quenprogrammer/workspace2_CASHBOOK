
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}

// Export the menu data
export const MENU_ITEMS: MenuItem[] = [
  { name: 'Aims Tech', icon: 'assets/custome/icon-40.svg', link: '/dashboard' },
  { name: 'Contact Us', icon: 'assets/custome/icon-5.svg', link: '/cashbook' },
  { name: 'Services', icon: 'assets/custome/icon-5.svg', link: '/cashbook' },
  { name: 'Account', icon: 'assets/custome/icon-11.svg', link: '/ledger' },
  { name: 'TrialBalance', icon: 'assets/custome/icon-42.svg', link: '/tribalance' },
  { name: 'Records', icon: 'assets/custome/icon-28.svg', link: '/records' },



];
