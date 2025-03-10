import {Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DownloadDataService } from '../../../services/downloadData/download-data.service';
import { CharacterCountService } from '../../../services/characterCount/character-count.service';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
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
    }, 30000);
  }

  text: string = '';
  selectedFormat: string = 'text';
  charCount: number = 0;
  sizeInKB: number = 0;
  undoStack: string[] = [];
  redoStack: string[] = [];
  searchText: string = '';
  fontSize: number = 16;
  fontSizes: number[] = [12, 14, 16, 18, 20, 22, 24];

  searchResults: number[] = [];
  currentSearchIndex: number = -1;



  saveState() {
    this.undoStack.push(this.text);
    if (this.undoStack.length > 50) this.undoStack.shift(); // Limit stack size
    this.redoStack = []; // Clear redo stack on new input
  }

  undo() {
    if (this.undoStack.length > 0) {
      this.redoStack.push(this.text);
      this.text = this.undoStack.pop()!;
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      this.undoStack.push(this.text);
      this.text = this.redoStack.pop()!;
    }
  }

  search() {
    this.searchResults = [];
    this.currentSearchIndex = -1;

    if (!this.searchText.trim()) return;

    const regex = new RegExp(this.searchText, 'gi');
    let match;
    while ((match = regex.exec(this.text)) !== null) {
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

  scrollToMatch() {
    const textarea = document.getElementById('textArea') as HTMLTextAreaElement;
    if (!textarea) return;

    const index = this.searchResults[this.currentSearchIndex];
    textarea.focus();
    textarea.setSelectionRange(index, index + this.searchText.length);
  }

  onTextChange(event: Event) {
    this.text = (event.target as HTMLTextAreaElement).value;
    this.charCount = this.textUtilityService.getCharacterCount(this.text);
    this.sizeInKB = this.textUtilityService.getSizeInKB(this.text);
  }
  downloadText() {
    this.downloadService.downloadFileWithContent(this.selectedFormat, this.text);
  }
  clearTextArea() {
    this.text = ''; // Clears the text area
    this.saveState(); // Optionally save the cleared state
  }
  saveToLocalStorage() {
    localStorage.setItem('savedText', this.text);
    console.log('Text saved to local storage');
  }
  loadFromLocalStorage() {
    const savedText = localStorage.getItem('savedText');
    if (savedText !== null) {
      this.text = savedText; // Assign saved text to the textarea model
      console.log('Text loaded from local storage');
    }
  }
  clearSavedText() {
    localStorage.removeItem('savedText'); // Remove saved text from local storage
    this.text = ''; // Clear the textarea content
    console.log('Saved text cleared');
  }
  SaveToCloud() {
    this.clearSavedText()
  }
}
