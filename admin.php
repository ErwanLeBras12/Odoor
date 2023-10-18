<html>
 <head>
  <title>ELB</title>
  <link href="style.css" rel="stylesheet" type="text/css">
  <meta charset="utf-8">
 </head>
 <body>
    <?php include("menu.php")?>  

<?php
session_start();
 
if (isset($_POST['password'])) { #si la variable mot de passe existe
    if ($_POST['password'] == 'admin') {
        $_SESSION['connecte'] = true;
    }
    else {
        $_SESSION['connecte'] = false;
        echo "mauvais mot de passe";
    }
}
 
 
if (!isset($_SESSION['connecte']) or $_SESSION['connecte'] == false) { # on vérifie que l'utilisateur ne soit pas connecté
?>
    </br></br>
    <h4>Vous n'êtes pas connecté en tant qu'administrateur, veuillez taper le mot de passe :</h4>    
    <div id="formAdm">
        <form action="admin.php" method="post">
            <input type='password' name='password'/>
            <input type="submit"/>
        </form>    
    <img src="images/cadenas.jfif"></img>
    </div>
    
<?php
 
}
 
else { # Dans cette partie, on écrit le code que l'utilisateur administrateur verra
    ?>
    </br></br>
    <div id="p1">
        Bienvenue, vous êtes connecté sur l'administration du blog </br>
        Vous pouvez créer un nouvel article en remplissant le formulaire ci-dessous </br></br></br>
    </div>
    
    <form method="post" action="admin.php">
        <input type="text" placeholder="titre" name="titre" />
        </br></br>
        <textarea placeholder="contenu" name="contenu"></textarea>
        </br></br>
        <input type="text" placeholder="photo" name="photo" />
        </br></br>
        <input type="submit" />
    </form>

    <?php
    require 'article.php';
    if (isset($_POST['titre']) and isset($_POST['contenu']) and isset($_POST['photo'])) {
        $art = new article();       
        $art->nouvel_article($_POST['titre'], nl2br(htmlspecialchars($_POST['contenu'])), $_POST['photo']);
     
        
        #echo $contenu;
        ?></br><div id="p1"> "L'article a bien été ajouté"</div>
    <?php
    }   
}
?>

 </body>

 <div id="footer">
    <?php include("footer.php")?>
 </div>

</html>