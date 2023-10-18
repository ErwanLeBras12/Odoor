<?php 

class article # Déclaration de la classe
{
    public $bdd;
    public function __construct(){
        $this->bdd = new PDO('mysql:host=localhost;dbname=elb;charset=utf8', 'root', ''); #connexion à la base de donnée 
    }


    public function nouvel_article($titre, $contenu, $photo) {
          if (empty($titre) or empty($contenu) or empty($photo)) 
          { # Si jamais il manque un argument, la fonction ne s'exécute pas
           echo 'il manque un argument';
           return;
          }
        
        date_default_timezone_set('Europe/Paris');
        $date = date("Y-m-d H:i:s");     
        

    try {
           
            $sql = 'INSERT INTO article(titre, contenu, photo, commentaire, date) VALUES(?,?, ?, ?, ?)';
            $sth = $this->bdd->prepare($sql);
            $sth->execute(array($titre,$contenu,$photo,'NULL',$date));
            
        } catch (Exception $e2 ){
            echo '<p>Erreur lors de l\'importation : ', $e2->getMessage(), ' </p>';
        }

        #$this->bdd->exec("INSERT INTO article(titre, contenu, photo, commentaire, date) VALUES('$titre', '$contenu', '$photo', 'NULL', '$date')");   
       
        }  
   
    public function lire($cPage)
        {          
            $perPage = 7;    
            $currPage = (($cPage-1)*$perPage);                            
            $articles = $this->bdd->query('SELECT * from article ORDER BY date DESC LIMIT '.$currPage.','.$perPage.''); #recuperation
            return $articles->fetchAll(\PDO::FETCH_ASSOC); #transformation en liste                    
           
        }


    public function nbarticles()
    {
            $nbarticles = $this->bdd->query('SELECT COUNT(id) from article')->fetchColumn(); #recuperation nombre d'articles
            return $nbarticles; 
           
    }

}
    
       

?>