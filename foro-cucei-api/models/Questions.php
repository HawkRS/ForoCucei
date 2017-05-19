<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');

  class Questions extends Model{

    function __construct(){
      parent::__construct();
    }

    /* CAMPOS DE LA TABLA
     *
     * @idquestions   int(11) PK
     * @category      int(11)
     * @description   string(450)
     * @status        int(4)
     * @likes         int(11) PK
     * @users_idusers int(11) FK
     * @answer        int(11) (apunta al id de la que se considero como la respuesta de la pregunta)
     * @created       timestamp
    */

    function Show(){
      $st = $this->pdo->prepare('SELECT * FROM questions');
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function find(){
      $id = 1;
      $st = $this->pdo->prepare('SELECT * FROM questions WHERE idquestions = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Create(){
      $category = 'python';
      $description = 'Soy la jenny?';
      $users_idusers = 2;
      $st = $this->pdo->prepare('INSERT INTO questions (category, description, users_iduser) VALUES (:category, :description, :users_iduser)');
      $st->bindValue(":category", $category);
      $st->bindValue(":description", $description);
      $st->bindValue(":users_iduser", $users_idusers);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Update(){
      $id = 2;
      $category = 3;
      $description = 'Raikkonen';
      $users_idusers = 11;
      $st = $this->pdo->prepare('UPDATE questions
        SET category      = :category,
            description   = :description,
            users_iduser  = :users_idusers
        WHERE idquestions = :id
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
      $st = $this->pdo->prepare('DELETE FROM questions WHERE idquestions = :id');
      $st->bindValue(":id", $id);
      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

  }
