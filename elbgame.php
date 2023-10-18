<html>
 <head>
  <title>ELB Game</title>
  <link href="style.css" rel="stylesheet" type="text/css">
  <link rel="icon" type="image/png" sizes="16x16" href="/elb/images/favicon_io/favicon-16x16.png">
  <script type="text/javascript" src="/elb/js/classes/TileSet.js"></script>
  <script type="text/javascript" src="/elb/js/mainGame.js"></script>  
 </head>
 <body>
 	<?php include("menu.php")?> 
 	<h1>Bienvenue sur ELB Game</h1>
    <canvas width="900px" height="650px" id="canvas">Votre navigateur ne supporte pas HTML5, veuillez le mettre à jour pour jouer.</canvas>
    
    <div id="formaccount">
       <h4>Créer un compte</h4>
       <form action="elbgame.php" method="post">
          <h4>pseudo : <input type="text" name="pseudo" /></h4>
          <h4>password : <input type="password" name="pwd" /></h4>
          <h4>mail : <input type="text" name="mail" /></h4>
          <h4><input name="OK" type="submit" value="OK"></h4>
      </form> 

     <?php    if (isset($_POST['OK'])) {

               
               //enregistrement dans la BDD locale                           
                                
                echo "<font color='blue'>Enregistrement du compte OK</font>";              


       }?>

   </div>


 </body>
 <div id="footer">
 	<?php include("footer.php")?>
 </div>
</html>