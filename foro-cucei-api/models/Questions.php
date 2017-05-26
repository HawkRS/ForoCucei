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
      $category = 1;
      $description = 'Soy la jenny?';
      $users_idusers = 2;
      if(empty($category) || empty($description)){
        $error[] = 'Falta de llenar uno de los campos';
      }
      if($category <= 0 || $category > 7){
        $error[] = 'Esta categoria no existe';
      }
      if(empty($error)){
      $st = $this->pdo->prepare('INSERT INTO questions (category, description, users_iduser) VALUES (:category, :description, :users_iduser)');
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
      $id = 2;
      $category = 3;
      $description = 'Raikkonen';
      $users_idusers = 11;
      if(empty($category) || empty($description)){
        $error[] = 'Falta de llenar uno de los campos';
      }
      if($category <= 0 || $category > 7){
        $error[] = 'Esta categoria no existe';
      }
      if(empty($error)){
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
    else{
      return $error;
    }
  }

    function Delete(){
      $id = 4;
      $st = $this->pdo->prepare('DELETE FROM questions WHERE idquestions = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function likeup(){
      $id = 1;//Variable de prueba
      $st = $this->pdo->prepare('UPDATE questions
        SET likes = likes+1
        WHERE idquestions = :id
      ');
      $st->bindValue(":id", $id);
      //$st->bindValue(":likes", $newstatus);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      //var_dump($result);
      return $result;
    }

    function isApproved(){
      $id = 1;//Variable de prueba
      $st = $this->pdo->prepare('UPDATE questions
        SET status = 1
        WHERE idquestions = :id
      ');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      //var_dump($result);
      return $result;
    }

    function isDisapproved(){
      $id = 1;//Variable de prueba
      $st = $this->pdo->prepare('UPDATE questions
        SET status = 0
        WHERE idquestions = :id
      ');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      //var_dump($result);
      return $result;
    }

    function isAnswer(){
      $id = 1;//Variable de prueba
      $answer = 2;//Variable de prueba
      $st = $this->pdo->prepare('UPDATE questions
        SET answer = :answer
        WHERE idquestions = :id
      ');
      $st->bindValue(":id", $id);
      $st->bindValue(":answer", $answer);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      //var_dump($result);
      return $result;
    }

  }
