// Define the interface for MenuItem
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}

// Export the menu data
export const MENU_ITEMS: MenuItem[] = [

    { name: 'Contacts', icon: '7x24h-svgrepo-com.svg', link: '/dashboard' },
    { name: 'API Interface', icon: 'api-interface-svgrepo-com.svg', link: '/api-interface' },
    { name: 'Availability', icon: 'availability-svgrepo-com.svg', link: '/availability' },
    { name: 'backup', icon: 'cloud-acceleration-svgrepo-com.svg', link: '/cloud-acceleration' },
    { name: 'Cloud Backup', icon: 'cloud-backup-svgrepo-com.svg', link: '/cloud-backup' },
    { name: 'Data Analysis', icon: 'data-analysis-svgrepo-com.svg', link: '/data-analysis' },
    { name: 'history', icon: 'ddos-protection-svgrepo-com.svg', link: '/transaction-history' },
    { name: 'DNS', icon: 'dns-svgrepo-com.svg', link: '/dns' },
    { name: 'Database', icon: 'host-record-svgrepo-com.svg', link: '/host-record' },
    { name: 'CashBook', icon: 'interface-control-svgrepo-com.svg', link: '/interface-control' },
    { name: 'Statistics', icon: 'machine-vision-svgrepo-com.svg', link: '/machine-vision' },
    { name: 'Mail Reception', icon: 'mail-reception-svgrepo-com.svg', link: '/mail-reception' },
    { name: 'Apps', icon: 'mobile-app-svgrepo-com.svg', link: '/apps' },
    { name: 'Port Detection', icon: 'port-detection-svgrepo-com.svg', link: '/port-detection' },
    { name: 'Vault', icon: 'recursive-server-svgrepo-com.svg', link: '/recursive-server' },
    { name: 'Settings', icon: 'system-settings-svgrepo-com.svg', link: '/system-settings' },
    { name: 'Touch Click', icon: 'touch-click-svgrepo-com.svg', link: '/touch-click' }


  /*  { name: 'kkktest', icon: '7x24h-svgrepo-com.svg', link: '/dashboard' },
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
    { name: 'Vault', icon: 'assets/custome/icon-34.svg', link: '/vault' },*/

];
