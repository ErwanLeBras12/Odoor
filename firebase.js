  // Configuration Firebase (à obtenir à partir de votre projet Firebase)
      var firebaseConfig = {
          apiKey: "AIzaSyCKxxd4I-R08z6gWzTzMLkYX-T6RGcZpGo",          
          databaseURL: "https://odoor-99a82-default-rtdb.europe-west1.firebasedatabase.app",
          projectId: "odoor-99a82"           
      };

       const firebaseApp = firebase.initializeApp(firebaseConfig);
       var database = firebaseApp.database();
       const auth = firebaseApp.auth();
        console.log("test");
      //Obtenez une référence à un chemin spécifique dans la base de données
        var dataRef = database.ref("status");
        
        // Obtenez la valeur initiale de "status" (une seule fois)
        dataRef.once("value", function(snapshot) {
            var initialStatus = snapshot.val();
            console.log("Valeur initiale de status : " + initialStatus);
        });
        
        // Maintenant, ajoutez un écouteur pour les modifications de "status"
        dataRef.on("value", function(snapshot) {
            // La fonction callback sera appelée chaque fois que "status" change
            var data = snapshot.val();
            console.log("Nouvelle valeur de status : " + data);
        });
        
        // Répétez le même processus pour "battery" si nécessaire
        var batteryRef = database.ref("battery");
        batteryRef.once("value", function(snapshot) {
            var initialBattery = snapshot.val();
            console.log("Valeur initiale de battery : " + initialBattery);
        });
        batteryRef.on("value", function(snapshot) {
            var data = snapshot.val();
            console.log("Nouvelle valeur de battery : " + data);
        });
