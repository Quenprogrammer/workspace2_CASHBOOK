import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './core/system/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai-preview';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"cashbook-979b7","appId":"1:575903547165:web:c7b809df944630a7716bf4","storageBucket":"cashbook-979b7.appspot.com","apiKey":"AIzaSyAw6Nor69h7X2uHI1EfujHHwg-717KIOOA","authDomain":"cashbook-979b7.firebaseapp.com","messagingSenderId":"575903547165","measurementId":"G-E62D6DZXR3"})), provideFirestore(() => getFirestore()), provideFunctions(() => getFunctions()), provideStorage(() => getStorage()), provideVertexAI(() => getVertexAI())]
};
