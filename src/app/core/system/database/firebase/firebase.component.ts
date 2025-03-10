import { Component } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { LineBreakPipe } from '../../../../shared/linebrake/line-break.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {TruncateTextPipe} from '../../../../shared/truncate-text-pipe/truncate-text.pipe';  // ✅ Import DomSanitizer

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

  config = [
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
      image: "firebase/img.png",
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
      image: "firebase/cdn.png",
      data: `
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase config that you want to use
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
{
  "Project Name": "Cashbook",
  "Project ID": "cashbook-979b7",
  "Project Number": "575903547165",
  "API Key": "AIzaSyAw6Nor69h7X2uHIwg-717KIOOA"
}

`
    },
    {
      name: "angular.json",
      image: "firebase/angularJSON.jpg",
      data: `
{
  "hosting": {
    "source": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "frameworksBackend": {
      "region": "europe-west1"
    }
  }
}


`
    },
    {
      name: "app.routes",
      image: "firebase/approutes.svg",
      data: `
import { Routes } from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import { authGuard } from './auth.guard';
export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/menu',
  },
  {
    path: 'start',
    loadComponent: () => import('./core/system/start-up/start-up.component')
      .then(c => c.StartUpComponent),
    canActivate: [authGuard]
  },

  {
    path: 'mens',
    loadComponent: () => import('./features/menu/menu.component')
      .then(_ => _.MenuComponent),
    data: { hidden: true } // Custom flag to hide it
  },
  {path: 'debug', loadComponent: () => import ('./core/debug/debug.component').then(c => c.DebugComponent)},
  {path: 'profile', loadComponent: () => import ('./core/system/profile/profile.component').then(c => c.ProfileComponent)},
  {path: 'settings', loadComponent: () => import ('./core/system/settings/settings.component').then(c => c.SettingsComponent)},
  {path: 'auth', loadComponent: () => import ('./core/system/auth/auth.component').then(c => c.AuthComponent)},
  {path: 'invalidAccount', loadComponent: () => import ('./core/system/invalid-account/invalid-account.component').then(c => c.InvalidAccountComponent)},
  {path: 'home', component: HomeComponent},
  {path: 'invoice', loadComponent: () => import ('./features/invoice/invoice.component').then(c => c.InvoiceComponent)},
  {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'users', loadComponent: () => import ('./features/users/users.component').then(c => c.UsersComponent)},
  {path: 'addContacts', loadComponent: () => import ('./features/contacts/contacts.component').then(c => c.ContactsComponent)},
  {path: 'apps', loadComponent: () => import ('./features/apps/apps.component').then(c => c.AppsComponent)},
  {path: 'payments', loadComponent: () => import ('./features/payments/payments.component').then(c => c.PaymentsComponent)},
  {path: 'cashbook-accounts', loadComponent: () => import ('./features/create-account/create-account.component').then(c => c.CreateAccountComponent)},
  {path: 'records', loadComponent: () => import ('./features/records/records-main/records-main.component').then(c => c.RecordsMainComponent)},
  {path: 'transaction-history', loadComponent: () => import ('./features/transaction-history/transaction-history.component').then(c => c.TransactionHistoryComponent)},
  {path: 'login', loadComponent: () => import ('./features/login/login.component').then(c => c.LoginComponent)},
   {path: 'payment', loadComponent: () => import ('./core/system/payment-form/payment-form.component').then(c => c.PaymentFormComponent)},
  {path: 'backupData', loadComponent: () => import ('./features/data/backup/backup.component').then(c => c.BackupComponent)},
  {path: 'backupDataPassword', loadComponent: () => import ('./features/data/backup-data-password/backup-data-password.component').then(c => c.BackupDataPasswordComponent)},
  {path: 'createUser', loadComponent: () => import ('./features/create-user/create-user.component').then(c => c.CreateUserComponent)},
  {path: 'statistics', loadComponent: () => import ('./features/cashbook/statistics/statistics.component').then(c => c.StatisticsComponent)},

  {path: 'cashbook', loadComponent: () => import ('./features/cashbook/cashbook.component').then(c => c.CashbookComponent)},
  {path: 'menu', loadComponent: () => import ('./features/menu/menu.component').then(c => c.MenuComponent)},
  {path: 'dashboard', loadComponent: () => import ('./features/dashboard/dashboard.component').then(c => c.DashboardComponent)},
  {path: 'ledger', loadComponent: () => import ('./features/cashbook/ledger/ledger.component').then(c => c.LedgerComponent)},
  {path: 'budget', loadComponent: () => import ('./features/cashbook/budget/budget.component').then(c => c.BudgetComponent)},
 {path: 'vault', loadComponent: () => import ('./core/system/vault/vault.component').then(c => c.VaultComponent)},
  {path: 'vaultPassword', loadComponent: () => import ('./core/system/vault/vault-password/vault-password.component').then(c => c.VaultPasswordComponent)},

  {path: 'database', loadComponent: () => import ('./features/database/database.component').then(c => c.DatabaseComponent)},









];

`
    },
    {
      name: "tsconfig.app.json",
      image: "firebase/tsconfig.json.png",
      data: `
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
}
}


`
    },
    {
      name: "package.json",
      image: "firebase/package.png",
      data: `
{
  "name": "aimtechsolution",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^18.2.0",
    "@angular/common": "^18.2.0",
    "@angular/compiler": "^18.2.0",
    "@angular/core": "^18.2.0",
    "@angular/fire": "^18.0.1",
    "@angular/forms": "^18.2.0",
    "@angular/platform-browser": "^18.2.0",
    "@angular/platform-browser-dynamic": "^18.2.0",
    "@angular/router": "^18.2.0",
    "@ng-bootstrap/ng-bootstrap": "^17.0.1",
    "aos": "^2.3.4",
    "bootstrap": "^5.3.3",
    "bootstrap-icons": "^1.11.3",
    "ngx-sharebuttons": "^15.0.3",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.14.10"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^18.2.7",
    "@angular/cli": "^18.2.7",
    "@angular/compiler-cli": "^18.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.2.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.5.2"
  }
}

`
    },
    {
      name: "editorconfig.json",
      image: "firebase/editorsConfig.png",
      data: `
{
  # Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single
ij_typescript_use_double_quotes = false

[*.md]
max_line_length = off
trim_trailing_whitespace = false

}

`
    },
    {
      name: "tsconfig",
      image: "firebase/tsconfig.jpg",
      data: `
/* To learn more about Typescript configuration file: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html. */
/* To learn more about Angular compiler options: https://angular.dev/reference/configs/angular-compiler-options. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "sourceMap": true,
    "declaration": false,
    "experimentalDecorators": true,
    "moduleResolution": "bundler",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}


`
    },
    {
      name: "app.components",
      image: "firebase/appcomponents.jpg",
      data: `
<app-header></app-header>
<div style="min-height: 100vh">


  <router-outlet></router-outlet>
</div>
@defer (on viewport) {
  <app-footer></app-footer>
}@placeholder {
  <div></div>
}
<app-toasts aria-live="polite" aria-atomic="true"></app-toasts>



`
    },
    {
      name: "FireStore",
      image: "firebase/firestore.png",
      data: `


`
    },
    {
      name: "Cloud Store",
      image: "firebase/cloud.png",
      data: `


`
    },
    {
      name: "Authentication",
      image: "firebase/auth.png",
      data: `


`
    },
    {
      name: "Functions",
      image: "firebase/functions.png",
      data: `


`
    },
    {
      name: "Firebase Config",
      image: "firebase/functions.png",
      data: `
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

`
    },
    {
      name: "Security Rules",
      image: "firebase/functions.png",
      data: `
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone with your Firestore database reference to view, edit,
    // and delete all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // all client requests to your Firestore database will be denied until you Update
    // your rules
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2025, 12, 12);
    }
  }
}

`
    },
    {
      name: "User and Permissions",
      image: "firebase/userPermission.png",
      data: `
[
  {
    "Company Name": "AimsTech",
    "Role": "Owner",
    "Email": "officialAimsDeves@gmail.com"
  },
  {
    "Name": "ADAMU SALISU ADAMU",
    "Role": "Owner",
    "Email": "adamsadam3667@gmail.com"
  }
]

`
    },

  ];

  openModal(index: number) {
    this.selectedFirebase = this.config[index];
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
