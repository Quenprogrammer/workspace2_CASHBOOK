import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { LineBreakPipe } from '../../../shared/linebrake/line-break.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {TruncateTextPipe} from '../../../shared/truncate-text-pipe/truncate-text.pipe';  // ✅ Import DomSanitizer

@Component({
  selector: 'app-firebase',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,

    TruncateTextPipe
  ],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.css'
})
export class FirebaseComponent {
  isModalOpen: boolean = false;
  selectedFirebase: { name: string; image: string; data: string } = { name: '', image: '', data: '' };

  constructor(private sanitizer: DomSanitizer) {}  // ✅ Inject DomSanitizer

  configu = [

  ];

  openModal(index: number) {
    this.selectedFirebase = this.configu[index];
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // ✅ Function to apply syntax highlighting and return safe HTML
  syntaxHighlight(json: string): SafeHtml {
    json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    json = json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|\b\d+\b)/g,
      function (match) {
        let cls = "json-number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "json-key"; // JSON Key (blue)
          } else {
            cls = "json-string"; // JSON String (green)
          }
        } else if (/true|false/.test(match)) {
          cls = "json-boolean"; // Boolean (red)
        } else if (/null/.test(match)) {
          cls = "json-null"; // Null (gray)
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );

    console.log("Processed JSON:", json); // Debugging Output

    return this.sanitizer.bypassSecurityTrustHtml(json);
  }
  downloadData() {
    const data = this.selectedFirebase.data;
    const blob = new Blob([data], { type: 'application/json' }); // Use text/plain if it's not JSON
    const url = window.URL.createObjectURL(blob);

    // Create a temporary <a> element for triggering the download
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.selectedFirebase.name}.json`;  // Name the file with the selected data name and .json extension
    a.click();

    // Clean up and revoke the Object URL
    window.URL.revokeObjectURL(url);
  }
}
