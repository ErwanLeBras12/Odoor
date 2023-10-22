     
  // Configuration Firebase (à obtenir à partir de votre projet Firebase)
  var firebaseConfig = {
    apiKey: "AIzaSyAJ7QUcvK4F2n2qeWMLviBXNIJzM45kNXw",
    databaseURL: "https://odoor-99a82-default-rtdb.europe-west1.firebasedatabase.app/",    
    projectId: "odoor-99a82",
    storageBucket: "odoor-99a82.appspot.com",
    appId: "1:349207637584:android:7670107a1f508fecd2eb55"  
  };

  // Initialisez Firebase avec la configuration
  firebase.initializeApp(firebaseConfig)
  .catch(function(error) {
    console.error("Erreur d'initialisation Firebase : " + error);
  });
      
   
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
