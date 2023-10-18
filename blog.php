<html>
 <head>
  <title>ELB Blog</title>
  <link href="style.css" rel="stylesheet" type="text/css">
  <link rel="icon" type="image/png" sizes="16x16" href="/elb/images/favicon_io/favicon-16x16.png">
 </head>
 <body>
 	<?php include("menu.php")?>

    <div id="p3">Se connecter</div>
    <div id="icolog">        
        <a href ="admin.php"><img src="/elb/images/logico.png" alt="adminconnect"></a>
    </div>
    
 	<h1>Derniers articles publiés</h1>

    <?php
    require 'article.php';
     
    $art = new article();   
    $nbarticle = $art->nbarticles(); 
    $nbPage = ceil($nbarticle/7); # = nombre d'article divisé par le nombre d'article par page 

    if(isset($_GET['p'])){
        $cPage = $_GET['p'];
    }
    else
    {
        $cPage = 1;
    }
   

    $articles = $art->lire($cPage);
    
    for ($i = 0; $i < sizeof($articles); $i++) {
        $article = $articles[$i];

        ?>
            <div id="articles">
               <img src="/elb/images/favicon_io/favicon.ico" id="logoArticle"></img>
               <h3><?php echo $article['date'] ?></h3>
               <h2><?php echo $article['titre']?></h2>
               <div id = "p4"><?php echo $article['contenu']?></div>
               <div id= "imgBlog"><img src="<?php echo $article['photo'] ?>"></img></div>            
            </div>
        
        <?php
    }   

    ?>
    <div id="idPage">
    
    <?php
        #ici on ajoute en dessous des articles les numéros de pages
        for ($j = 1; $j <= $nbPage; $j++)
        {
            echo "<a href=\"blog.php?p=$j\" id=\"p2\">$j</a> /";
        }
    ?>
    </div>
    </br></br></br>
 </body>
 </br>
 <div id="footer">
 	<?php include("footer.php")?>
 </div>

</html>
