import firebase from '/node_modules/firebase/app';
import '/node_modules/firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCKxxd4I-R08z6gWzTzMLkYX-T6RGcZpGo',
  authDomain: 'odoor-99a82.firebaseapp.com',
  databaseURL: 'https://odoor-99a82-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'odoor-99a82',
  storageBucket: 'odoor-99a82.appspot.com',
  messagingSenderId: '349207637584',
  appId: '1:349207637584:web:6ea9efeb4f2189ebd2eb55'
};

firebase.initializeApp(firebaseConfig);

import { database } from './firebase'; // Assurez-vous d'importer correctement la configuration Firebase

// Lire la valeur de la clé "battery" dans la base de données
database.ref('/battery').once('value')
  .then((snapshot) => {
    const batteryValue = snapshot.val();
    console.log('Valeur de la batterie :', batteryValue);
  })
  .catch((error) => {
    console.error('Erreur lors de la lecture de la batterie :', error);
  });

// Lire la valeur de la clé "status" dans la base de données
database.ref('/status').once('value')
  .then((snapshot) => {
    const statusValue = snapshot.val();
    console.log('Valeur du statut :', statusValue);
  })
  .catch((error) => {
    console.error('Erreur lors de la lecture du statut :', error);
  });

// Surveiller les changements de la clé "battery" dans la base de données
database.ref('/battery').on('value', (snapshot) => {
  const batteryValue = snapshot.val();
  console.log('Nouvelle valeur de la batterie :', batteryValue);
}, (error) => {
  console.error('Erreur lors de la surveillance de la batterie :', error);
});

// Surveiller les changements de la clé "status" dans la base de données
database.ref('v/status').on('value', (snapshot) => {
  const statusValue = snapshot.val();
  console.log('Nouvelle valeur du statut :', statusValue);
}, (error) => {
  console.error('Erreur lors de la surveillance du statut :', error);
});
