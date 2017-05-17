<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');

  class Tutorials extends Model{

    function __construct(){
      parent::__construct();
    }

    function Show(){
      $st = $this->pdo->prepare('SELECT * FROM tutorials');
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Create(){
      $category = 4;
      $description = 'lkslkjsdfakjlsfdgkjlsdflkjsdfañjflña';
      $users_idusers = 2;
      $st = $this->pdo->prepare('INSERT INTO tutorials (category, description, users_iduser) VALUES (:category, :description, :users_iduser)');
      $st->bindValue(":category", $category);
      $st->bindValue(":description", $description);
      $st->bindValue(":users_iduser", $users_idusers);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Update(){
      $id = 3;
      $category = 3;
      $description = 'Raikkonen';
      $users_idusers = 11;
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

    function Delete(){
      $id = 4;
      $st = $this->pdo->prepare('DELETE FROM tutorials WHERE idtutorials = :id');
      $st->bindValue(":id", $id);
      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

  }
