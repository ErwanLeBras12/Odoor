import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js';

// Configuration Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCKxxd4I-R08z6gWzTzMLkYX-T6RGcZpGo',
  authDomain: 'odoor-99a82.firebaseapp.com',
  databaseURL: 'https://odoor-99a82-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'odoor-99a82',
  storageBucket: 'odoor-99a82.appspot.com',
  messagingSenderId: '349207637584',
  appId: '1:349207637584:web:6ea9efeb4f2189ebd2eb55'
};

// Initialisation de Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtenir une référence à la base de données
const db = getDatabase(firebaseApp);
const batteryRef = ref(db, '/battery');
const statusRef = ref(db, '/status');

// Écouter les changements de la clé "battery"
onValue(batteryRef, (snapshot) => {
  const batteryValue = snapshot.val();
  console.log('Valeur de la batterie :', batteryValue);
}, {
  onlyOnce: true, // Cette option permet d'écouter l'événement une seule fois
});

// Écouter les changements de la clé "status"
onValue(statusRef, (snapshot) => {
  const statusValue = snapshot.val();
  console.log('Valeur du statut :', statusValue);
}, {
  onlyOnce: true, // Cette option permet d'écouter l'événement une seule fois
});
