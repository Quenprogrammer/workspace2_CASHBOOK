import {Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {fontFamily,  textColor, textFontSize} from '../../../core/system/config';
import {NgForOf, NgIf} from "@angular/common";
import {TextComponent} from '../../../core/components/text/text.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {serverTimestamp} from '@angular/fire/database';
import {getDownloadURL, getStorage, ref, uploadBytes} from '@angular/fire/storage';
export interface MenuItem {
  name: string;
  icon: string; // This should be a string representing the URL to the icon
  link: string; // This should be a string representing the router link
}
@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    TextComponent,
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css'
})
export class MenuItemsComponent {

  isModal1Open = false;
  isModal2Open = false;
  MENU_ITEMS: MenuItem[] = [
    {name: 'Dashboard', icon: 'data-analysis-svgrepo-com.svg', link: '/dashboard'},
    {name: 'Data', icon: 'cloud-acceleration-svgrepo-com.svg', link: '/backupData'},
    {name: 'Accounts', icon: 'cloud-acceleration-svgrepo-com.svg', link: '/backupData'},
    {name: 'CashBook', icon: 'interface-control-svgrepo-com.svg', link: '/cashbook'},
    {name: 'staffs', icon: 'interface-control-svgrepo-com.svg', link: '/staffs'},
    {name: 'history', icon: 'ddos-protection-svgrepo-com.svg', link: '/transaction-history'},
    {name: 'Statistics', icon: 'icons/statis.svg', link: '/statistics'},

    {name: 'Public Site', icon: 'bg/inbox.svg', link: '/Public_site_dashboard'},
    {name: 'SiteMap', icon: 'touch-click-svgrepo-com.svg', link: '/sitemap'},
    {name: 'Inbox', icon: 'touch-click-svgrepo-com.svg', link: '/records'},
    {name: 'invoice', icon: 'machine-vision-svgrepo-com.svg', link: '/invoice'},
    {name: 'Vault', icon: 'cloud-backup-svgrepo-com.svg', link: '/vault'},

    {name: 'Apps', icon: 'mobile-app-svgrepo-com.svg', link: '/appsHome'},
    {name: 'Company', icon: 'mobile-app-svgrepo-com.svg', link: '/company'},
    {name: 'Recycle Bin', icon: 'mobile-app-svgrepo-com.svg', link: '/company'},


    {name: 'Notifications', icon: 'mail-reception-svgrepo-com.svg', link: '/notifications'},
    {name: 'Settings', icon: 'system-settings-svgrepo-com.svg', link: '/settings'},
    {name: 'API Interface', icon: 'api-interface-svgrepo-com.svg', link: '/statUp'},
    {name: 'Logs', icon: 'availability-svgrepo-com.svg', link: '/logs'},


  ];


  protected readonly textFontSize = textFontSize;
  protected readonly fontFamily = fontFamily;
  protected readonly textColor = textColor;

  uploadBy = signal<string>('admin');  // uploader name
  userImage = signal<string>('https://example.com/default-profile.jpg'); // default profile image URL

  blog: any = {
    title: '',
    category: '',
    description: '',
    date: '',
    time: '',
    images: []
  };

  selectedImages: File[] = [];
  uploadStatus: string = '';
  private firestore = inject(Firestore);
  private storage = getStorage();

  onImageSelected(event: any) {
    this.selectedImages = Array.from(event.target.files);
  }

  async submitBlog() {
    this.uploadStatus = 'Uploading images...';

    try {
      const imageUrls: string[] = [];
      for (let file of this.selectedImages) {
        const filePath = `blog-images/${Date.now()}_${file.name}`;
        const storageRef = ref(this.storage, filePath);
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        imageUrls.push(url);
      }

      const now = new Date();
      const blogData = {
        ...this.blog,
        images: imageUrls,
        uploadBy: this.uploadBy(),
        userImage: this.userImage(), // default profile image
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        timestamp: serverTimestamp(),
      };

      const blogsCollection = collection(this.firestore, 'blogs');
      await addDoc(blogsCollection, blogData);
      this.uploadStatus = '✅ Blog uploaded successfully!';

      this.blog = {
        title: '',
        category: '',
        description: '',
        date: '',
        time: '',
        images: []
      };
      this.selectedImages = [];
    } catch (err) {
      console.error(err);
      this.uploadStatus = '❌ Failed to upload blog.';
    }
  }
  categories = signal<string[]>(['Technology', 'Education', 'Agriculture', 'Health', 'Finance', 'Entertainment']);

}
