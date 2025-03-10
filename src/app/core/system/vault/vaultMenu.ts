
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}

// Export the menu data
export const MENU_ITEMS: MenuItem[] = [
  { name: 'Document', icon: 'vault/icon-40.svg', link: '/dashboard' },
  { name: 'Bank', icon: 'vault/bank.svg', link: '/dashboard' },
  { name: 'Files', icon: 'vault/files.svg', link: '/cashbook' },
  { name: 'Server', icon: 'vault/server.svg', link: '/cashbook' },
  { name: 'Credentials', icon: 'vault/credencials.svg', link: '/cashbook' },
  { name: 'Location', icon: 'vault/location.svg', link: '/cashbook' },
  { name: 'Schedules', icon: 'vault/schedules.svg', link: '/cashbook' },
  { name: 'Credit cards', icon: 'vault/icon-19.svg', link: '/transaction-history' },
  { name: 'Crypto Asset', icon: 'vault/cypto.svg', link: '/ledger' },
  { name: 'Social Contacts', icon: 'vault/social contacts.svg', link: '/ledger' },
  { name: 'Web', icon: 'vault/web.svg', link: '/ledger' },
  { name: 'Code', icon: 'vault/code.svg', link: '/ledger' },
  { name: 'Password', icon: 'vault/pass.svg', link: '/ledger' },
  { name: 'Contact', icon: 'vault/contact.svg', link: '/ledger' },
  { name: 'E-mails', icon: 'vault/email.svg', link: '/records' },
  { name: 'Cloud', icon: 'vault/cloud.svg', link: '/storage' },
  { name: 'Digital Asset', icon: 'vault/digitalAsset.svg', link: '/help-center' },
  { name: 'Social Accounts', icon: 'vault/social.svg', link: '/cashbook-accounts' },
  { name: 'Driven Licence', icon: 'vault/drivenlicence.svg', link: '/budget' },
  { name: 'Image', icon: 'vault/image.svg', link: '/vault' },
  { name: 'Message', icon: 'vault/message.svg', link: '/vault' },
  { name: 'NIN', icon: 'vault/nin.svg', link: '/vault' },
  { name: 'ID Card', icon: 'vault/ID.svg', link: '/vault' },
  { name: 'Financial Asset', icon: 'vault/finance.svg', link: '/vault' },

];
