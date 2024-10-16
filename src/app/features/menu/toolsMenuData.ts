// Define the interface for UtilityMenuItem
export interface UtilityMenuItem {
  name: string;
  icon: string;
  link: string;
}

// Export the utility menu data
export const UTILITY_MENU_ITEMS: UtilityMenuItem[] = [
  { name: 'Calculator', icon: '/assets/images/calculator-icon.png', link: '/calculator' },
  { name: 'Notepad', icon: '/assets/images/notepad-icon.png', link: '/notepad' },
  { name: 'Todo List', icon: '/assets/images/todo-list-icon.png', link: '/todo-list' },
  { name: 'Gmail', icon: '/assets/images/gmail-icon.png', link: 'https://mail.google.com' },
  { name: 'Google Drive', icon: '/assets/images/google-drive-icon.png', link: 'https://drive.google.com' },
  { name: 'Google Docs', icon: '/assets/images/google-docs-icon.png', link: 'https://docs.google.com' },
  { name: 'syncSAFE Cloud', icon: '/assets/images/syncsafe-icon.png', link: '/syncsafe-cloud' },
  { name: 'database', icon: '/assets/images/whatsapp-iconn.png', link: 'https://web.whatsapp.com' },
  { name: 'WhatsApp', icon: '/assets/images/whatsapp-icon.png', link: 'https://web.whatsapp.com' }
];
