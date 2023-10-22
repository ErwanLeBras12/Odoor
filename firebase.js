         
  // Configuration Firebase (à obtenir à partir de votre projet Firebase)
  var firebaseConfig = {
    apiKey: "AIzaSyAJ7QUcvK4F2n2qeWMLviBXNIJzM45kNXw",
    authDomain: "https://odoor-99a82-default-rtdb.europe-west1.firebasedatabase.app/",    
    projectId: "odoor-99a82",  
  };

  // Initialisez Firebase avec la configuration
  firebase.initializeApp(firebaseConfig);       
   
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
