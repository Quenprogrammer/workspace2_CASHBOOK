import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notepad',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent {
  textContent: string = '';
  undoStack: string[] = [];
  redoStack: string[] = [];
  searchText: string = '';
  fontSize: number = 16;
  fontSizes: number[] = [12, 14, 16, 18, 20, 22, 24];

  searchResults: number[] = [];
  currentSearchIndex: number = -1;

  constructor() {}

  saveState() {
    this.undoStack.push(this.textContent);
    if (this.undoStack.length > 50) this.undoStack.shift(); // Limit stack size
    this.redoStack = []; // Clear redo stack on new input
  }

  undo() {
    if (this.undoStack.length > 0) {
      this.redoStack.push(this.textContent);
      this.textContent = this.undoStack.pop()!;
    }
  }

  redo() {
    if (this.redoStack.length > 0) {
      this.undoStack.push(this.textContent);
      this.textContent = this.redoStack.pop()!;
    }
  }

  search() {
    this.searchResults = [];
    this.currentSearchIndex = -1;

    if (!this.searchText.trim()) return;

    const regex = new RegExp(this.searchText, 'gi');
    let match;
    while ((match = regex.exec(this.textContent)) !== null) {
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
}
