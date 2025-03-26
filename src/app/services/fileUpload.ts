import { inject, Injectable, signal } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytesResumable, UploadTaskSnapshot } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadingService {
  selectedFile: File | null = null;
  BrowsePropertyUploadProgress = signal(0);
  BrowsePropertyDownloadURL = signal<string | null>(null);
  private readonly storage: Storage = inject(Storage); // ✅ Corrected injection

  BrowsePropertyOnFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  uploadImage() {
    if (!this.selectedFile) return;

    const filePath = `images/${Date.now()}_${this.selectedFile.name}`;
    const storageRef = ref(this.storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, this.selectedFile);

    uploadTask.on(
      'state_changed',
      (snapshot: UploadTaskSnapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.BrowsePropertyUploadProgress.set(progress);
      },
      (error) => console.error('Upload failed:', error),
      async () => {
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          this.BrowsePropertyDownloadURL.set(url);
        } catch (error) {
          console.error('Error getting download URL:', error);
        }
      }
    );
  }
}
