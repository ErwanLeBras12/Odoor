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

// Lorsque la page est chargée
document.addEventListener('DOMContentLoaded', function() {
  // Récupérer la référence aux éléments de la page
  const batteryElement = document.querySelector("#battery-icon");
 const statusElement = document.querySelector("#door-icon");
  //const batteryElement = document.getElementById('battery-icon');
  //const statusElement = document.getElementById('door-icon');
 
  // Récupérer la valeur initiale de "battery"
  get(batteryRef)
    .then((snapshot) => {
      const batteryValue = snapshot.val().battery;
      console.log('Valeur initiale : Niveau de batterie :', batteryValue);
      batteryElement.innerText  = `${batteryValue}%`;      
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération de la valeur initiale de la batterie :', error);
    });

  // Récupérer la valeur initiale de "status"
  get(statusRef)
    .then((snapshot) => {
      const statusValue = snapshot.val().status;
      console.log('Valeur initiale : Etat de la porte :', statusValue);
      statusElement.innerText  = `${statusValue}`;
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération de la valeur initiale du statut :', error);
    });

  // Écouter les changements de la clé "battery" (si vous le souhaitez)
  onValue(batteryRef, (snapshot) => {
    const batteryValue = snapshot.val().battery;
    batteryElement.innerText  = `${batteryValue}%`;
    console.log('Valeur mise à jour : niveau de batterie :', batteryValue);
  });

  // Écouter les changements de la clé "status" (si vous le souhaitez)
  onValue(statusRef, (snapshot) => {
    const statusValue = snapshot.val().status;
    statusElement.innerText  = `${statusValue}`;
    console.log('Valeur mise à jour : Etat de la porte :', statusValue);
  });
});
