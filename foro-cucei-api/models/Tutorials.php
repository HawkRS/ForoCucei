<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');

  class Tutorials extends Model{

    function __construct(){
      parent::__construct();
      $error = [];
    }

    function Show(){
      $st = $this->pdo->prepare('SELECT * FROM tutorials');
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function find(){
      $id = 2;
      $st = $this->pdo->prepare('SELECT * FROM tutorials WHERE idtutorials = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Create(){
      $category = 4;
      $description = 'lkslkjsdfakjlsfdgkjlsdflkjsdfañjflña';
      $users_idusers = 2;
      if(empty($category) || empty($description))){
        $error[] = 'Falta de llenar uno de los campos';
      }
      if($category <= 0 || $category > 7){
        $error[] = 'Esta categoria no existe';
      }
      if(empty($error)){
        $st = $this->pdo->prepare('INSERT INTO tutorials (category, description, users_iduser) VALUES (:category, :description, :users_iduser)');
        $st->bindValue(":category", $category);
        $st->bindValue(":description", $description);
        $st->bindValue(":users_iduser", $users_idusers);
        $st->execute();
        $result = $st->fetchAll(PDO::FETCH_OBJ);
        return $result;
      }
      else{
        return $error;
      }
    }

    function Update(){
      $id = 3;
      $category = 3;
      $description = 'Raikkonen';
      $users_idusers = 11;
      if($category <= 0 || $category > 7){
        $error[] = 'Esta categoria no existe';
      }
      if(empty($category)){
        $error[] = 'Falta de llenar uno de los campos';
      }
      if(empty($error)){
        $st = $this->pdo->prepare('UPDATE tutorials
          SET category      = :category,
              description   = :description,
              users_iduser  = :users_idusers
          WHERE idtutorials = :id
        ');
        $st->bindValue(":id", $id);
        $st->bindValue(":category", $category);
        $st->bindValue(":description", $description);
        $st->bindValue(":users_idusers", $users_idusers);
        $st->execute();
        $result = $st->fetchAll(PDO::FETCH_OBJ);
        return $result;
      }
      else{
        return $error;
      }
    }

    function Delete(){
      $id = 4;
      $st = $this->pdo->prepare('DELETE FROM tutorials WHERE idtutorials = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function likeup(){
      $id = 2;//Variable de prueba
      $st = $this->pdo->prepare('UPDATE tutorials
        SET likes = likes+1
        WHERE idtutorials = :id
      ');
      $st->bindValue(":id", $id);
      //$st->bindValue(":likes", $newstatus);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      var_dump($result);
      return $result;
    }

    function isApproved(){
      $id = 2;//Variable de prueba
      $st = $this->pdo->prepare('UPDATE tutorials
        SET status = 1
        WHERE idtutorials = :id
      ');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      var_dump($result);
      return $result;
    }

    function isDisapproved(){
      $id = 2;//Variable de prueba
      $st = $this->pdo->prepare('UPDATE tutorials
        SET status = 0
        WHERE idtutorials = :id
      ');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      var_dump($result);
      return $result;
    }



  }
