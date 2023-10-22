     
  // Configuration Firebase (à obtenir à partir de votre projet Firebase)
  var firebaseConfig = {
      apiKey: "AIzaSyCKxxd4I-R08z6gWzTzMLkYX-T6RGcZpGo",
      authDomain: "odoor-99a82.firebaseapp.com",
      databaseURL: "https://odoor-99a82-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "odoor-99a82",
      storageBucket: "odoor-99a82.appspot.com",
      messagingSenderId: "349207637584",
      appId: "1:349207637584:web:6ea9efeb4f2189ebd2eb55",
      measurementId: "G-6Q46YKPTSN"  
  };

  // Initialisez Firebase avec la configuration
  const app = initializeApp(firebaseConfig);        
   
  // Obtenez une référence à la base de données
  var database = firebase.database();
  
  // Obtenez une référence à un chemin spécifique dans la base de données
  var dataRef = database.ref("status");

  // Écoutez les modifications des données
  dataRef.on("value", function(snapshot) {
    // La fonction callback sera appelée chaque fois que les données changent
   var data = snapshot.val(); // Les données sont dans l'objet snapshot.val()
    console.log(data); // Affichez les données dans la console
    });
