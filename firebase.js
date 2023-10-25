// Définir l'en-tête Permissions-Policy au niveau du code
document.featurePolicy.allowedFeatures({ 'interest-cohort': 'none' });

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getDatabase, ref, onValue, get } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js';

// Configuration Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCKxxd4I-R08z6gWzTzMLkYX-T6RGcZpGo',  
  databaseURL: 'https://odoor-99a82-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'odoor-99a82'
};

// Initialisation de Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Obtenir une référence à la base de données
const db = getDatabase(firebaseApp);
const batteryRef = ref(db, '/battery');
const statusRef = ref(db, '/status');

// Récupérer la valeur initiale de "battery"
get(batteryRef)
  .then((snapshot) => {
    const batteryValue = snapshot.val();
    console.log('Valeur initiale de la batterie :', batteryValue);
  })
  .catch((error) => {
    console.error('Erreur lors de la récupération de la valeur initiale de la batterie :', error);
  });

// Récupérer la valeur initiale de "status"
get(statusRef)
  .then((snapshot) => {
    const statusValue = snapshot.val();
    console.log('Valeur initiale du statut :', statusValue);
  })
  .catch((error) => {
    console.error('Erreur lors de la récupération de la valeur initiale du statut :', error);
  });

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
