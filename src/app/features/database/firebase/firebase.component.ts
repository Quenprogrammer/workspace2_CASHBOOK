import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { LineBreakPipe } from '../../../shared/linebrake/line-break.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';  // ✅ Import DomSanitizer

@Component({
  selector: 'app-firebase',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    LineBreakPipe
  ],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.css'
})
export class FirebaseComponent {
  isModalOpen: boolean = false;
  selectedFirebase: { name: string; image: string; data: string } = { name: '', image: '', data: '' };

  constructor(private sanitizer: DomSanitizer) {}  // ✅ Inject DomSanitizer

  products = [
    {
      name: "Service Account",
      image: "logos/serviceA.png",
      data: `{

  "type": "service_account",
  "project_id": "cashbook-979b7",
  "private_key_id": "ca6ddddd5def6a35c69024de321b52d7e9850a65",
  "private_key": "-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC7IhahzgwrUWiO\\nDaQ2gUdJxntuVUba2/HUMpsL1fjxpMCkN8mKKpHqqK0QKiuo0r10WFqnOlg/Pvkw\\n...",
  "client_email": "firebase-adminsdk-5mazj@cashbook-979b7.iam.gserviceaccount.com",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
   "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5mazj%40cashbook-979b7.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"

}`
    },
    {
      name: "SDK configuration npm",
      image: "newLogo/6.jpg",
      data: `{

    npm install firebase

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAw6Nor69h7X2uHI1EfujHHwg-717KIOOA",
  authDomain: "cashbook-979b7.firebaseapp.com",
  projectId: "cashbook-979b7",
  storageBucket: "cashbook-979b7.firebasestorage.app",
  messagingSenderId: "575903547165",
  appId: "1:575903547165:web:c7b809df944630a7716bf4",
  measurementId: "G-E62D6DZXR3"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}`
    },
    {
      name: "SDK configuration CDN",
      image: "newLogo/6.jpg",
      data: `
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAw6Nor69h7X2uHI1EfujHHwg-717KIOOA",
    authDomain: "cashbook-979b7.firebaseapp.com",
    projectId: "cashbook-979b7",
    storageBucket: "cashbook-979b7.firebasestorage.app",
    messagingSenderId: "575903547165",
    appId: "1:575903547165:web:c7b809df944630a7716bf4",
    measurementId: "G-E62D6DZXR3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
    `
    },
    {
      name: "Project Details",
      image: "logos/details.png",
      data: `
Project Name: Cashbook,
Project ID: cashbook-979b7,
Project Number:575903547165,
Project Number:AIzaSyAw6Nor69h7X2uHIwg-717KIOOA,

`
    },
    {
      name: "FireStore",
      image: "newLogo/6.jpg",
      data: `


`
    },
    {
      name: "Cloud Store",
      image: "logos/storage.png",
      data: `


`
    },
    {
      name: "Authentication",
      image: "logos/aut.png",
      data: `


`
    },
    {
      name: "Functions",
      image: "logos/functions.png",
      data: `


`
    },
    {
      name: "User and Permissions",
      image: "newLogo/6.jpg",
      data: `
AimsTech----------------++ Owner,
officialAimsDeves@gmail.com,

ADAMU SALISU ADAMU----------------++ Owner,
adamsadam3667@gmail.com,
`
    },

  ];

  openModal(index: number) {
    this.selectedFirebase = this.products[index];
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

}
