import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DownloadDataService } from '../../../services/downloadData/download-data.service';
import { CharacterCountService } from '../../../services/characterCount/character-count.service';
import { addDoc, collection, Firestore, getDocs, doc, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit, OnDestroy {
  private saveTimeout: any;
  fileName: string = '';  // New variable to hold the file name

  savedNotes: { id: string, content: string, timestamp: any }[] = [];
  adminSiteModalOpen = signal(false);
  constructor(
    private firestore: Firestore,
    private textUtilityService: CharacterCountService,
    private downloadService: DownloadDataService
  ) {}

  async addUser() {
    const usersCollection = collection(this.firestore, 'users');
    try {
      await addDoc(usersCollection, { name: 'John Doe', email: 'johndoe@example.com' });
      console.log('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  ngOnInit() {
    this.loadFromLocalStorage();
    setInterval(() => {
      this.saveToLocalStorage();
    }, 60000); // Save every 60 seconds

    // Fetch notes from Firestore on initialization
    this.fetchNotesFromFirestore();
  }

  text: WritableSignal<string> = signal('');
  selectedFormat: string = 'text';
  sizeInKB: WritableSignal<number> = signal(0);
  charCount: WritableSignal<number> = signal(0);
  undoStack: string[] = [];
  redoStack: string[] = [];
  searchText: string = '';
  fontSize: number = 16;
  fontSizes: number[] = [12, 14, 16, 18, 20, 22, 24];
  searchResults: number[] = [];
  currentSearchIndex: number = -1;

  saveState() {
    this.undoStack.push(this.text());
    if (this.undoStack.length > 50) this.undoStack.shift(); // Limit stack size
    this.redoStack = []; // Clear redo stack on new input
  }

  undo() {
    if (this.undoStack.length > 0) {
      this.redoStack.push(this.text());
      this.text.set(this.undoStack.pop()!);
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      this.undoStack.push(this.text());
      this.text.set(this.redoStack.pop()!);
    }
  }

  search() {
    this.searchResults = [];
    this.currentSearchIndex = -1;

    if (!this.searchText.trim()) return;

    const regex = new RegExp(this.searchText, 'gi');
    let match;
    while ((match = regex.exec(this.text())) !== null) {
      this.searchResults.push(match.index);
    }

    if (this.searchResults.length > 0) {
      this.currentSearchIndex = 0;
      this.scrollToMatch();
    }
  }

  nextMatch() {
    if (this.searchResults.length === 0) return;

    this.currentSearchIndex = (this.currentSearchIndex + 1) % this.searchResults.length;
    this.scrollToMatch();
  }

  prevMatch() {
    if (this.searchResults.length === 0) return;

    this.currentSearchIndex = (this.currentSearchIndex - 1 + this.searchResults.length) % this.searchResults.length;
    this.scrollToMatch();
  }

  ngOnDestroy() {
    clearTimeout(this.saveTimeout);
  }

  scrollToMatch() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    if (!textarea) return;

    const index = this.searchResults[this.currentSearchIndex];
    textarea.focus();
    textarea.setSelectionRange(index, index + this.searchText.length);
  }

  onTextChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    this.text.set(value);
    this.saveState();

    // Update character count and size in KB
    this.charCount.set(this.calculateCharacterCount(this.text()));
    this.sizeInKB.set(this.calculateSizeInKB(this.text()));

    clearTimeout(this.saveTimeout);
    this.saveTimeout = setTimeout(() => this.saveToLocalStorage(), 1000); // Save 1s after last input
  }

  calculateCharacterCount(text: string): number {
    return text.length; // Simple character count
  }

  calculateSizeInKB(text: string): number {
    const sizeInBytes = new TextEncoder().encode(text).length;
    return sizeInBytes / 1024; // Convert bytes to KB
  }

  downloadText() {
    this.downloadService.downloadFileWithContent(this.selectedFormat, this.text());
  }

  clearTextArea() {
    this.text.set('');
    this.saveState(); // Optionally save the cleared state
  }

  saveToLocalStorage() {
    localStorage.setItem('savedText', this.text());
    localStorage.setItem('fontSize', this.fontSize.toString());
  }

  loadFromLocalStorage() {
    const savedText = localStorage.getItem('savedText');
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedText !== null) this.text.set(savedText);
    if (savedFontSize !== null) this.fontSize = +savedFontSize;
  }

  clearSavedText() {
    localStorage.removeItem('savedText'); // Remove saved text from local storage
    this.text.set('');
    console.log('Saved text cleared');
  }

  async saveNoteToCloud() {
    const noteContent = this.text();

    try {
      const notepadCollection = collection(this.firestore, 'NOTEPAD');
      await addDoc(notepadCollection, {
        content: noteContent,
        timestamp: new Date()
      });
      console.log('New note saved to Firestore.');
      window.alert('Note saved successfully!'); // Show alert when the note is saved
    } catch (error) {
      console.error('Failed to save note to Firestore:', error);
      window.alert('Failed to save note. Please try again.'); // Show alert if there is an error
    }

    this.fetchNotesFromFirestore();
  }



  async fetchNotesFromFirestore() {
    const notepadCollection = collection(this.firestore, 'NOTEPAD');
    const querySnapshot = await getDocs(notepadCollection);
    this.savedNotes = querySnapshot.docs.map(doc => ({
      id: doc.id, // Store the document ID to update the note later
      content: doc.data()['content'],  // Use bracket notation for properties
      timestamp: doc.data()['timestamp']  // Use bracket notation for properties
    }));
  }


  openNoteFromList(noteId: string) {
    const note = this.savedNotes.find(n => n.id === noteId);
    if (note) {
      this.text.set(note.content);
    }
  }




  openAdminSiteModal() {
    this.adminSiteModalOpen.set(true);
  }
  closeAdminSiteModal() {
    this.adminSiteModalOpen.set(false);
  }
}
