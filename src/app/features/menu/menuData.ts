// Define the interface for MenuItem
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}

// Export the menu data
export const MENU_ITEMS: MenuItem[] = [
  { name: 'Dashboard', icon: 'assets/vendor/duotone-icons/gra/gra011.svg', link: '/dashboard' },
  { name: 'Cashbook', icon: 'assets/svgImage/book-svgrepo-com.svg', link: '/cashbook' },
  { name: 'Transactions', icon: 'assets/vendor/duotone-icons/fin/fin007.svg', link: '/transaction-history' },
  { name: 'Ledger', icon: 'assets/vendor/duotone-icons/gen/gen014.svg', link: '/ledger' },
  { name: 'TrialBalance', icon: 'assets/svgImage/data-svgrepo-com.svg', link: '/tribalance' },
  { name: 'Records', icon: 'assets/vendor/duotone-icons/elc/elc011.svg', link: '/records' },
  { name: 'Tools', icon: 'assets/svgImage/tools-and-utensils-computer-svgrepo-com.svg', link: '/tools' },
   { name: 'Cloud', icon: 'assets/vendor/duotone-icons/fil/fil024.svg', link: '/storage' },
  { name: 'Help center', icon: 'assets/vendor/duotone-icons/elc/elc008.svg', link: '/help-center' },
  { name: 'Create account', icon: 'assets/vendor/duotone-icons/com/com006.svg', link: '/cashbook-accounts' },
  { name: 'Database', icon: 'assets/vendor/duotone-icons/com/com013.svg', link: '/database' },


];
