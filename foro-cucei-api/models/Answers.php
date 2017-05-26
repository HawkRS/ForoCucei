<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');

  class Answers extends Model{

    function __construct(){
      parent::__construct();
    }

    /* CAMPOS DE LA TABLA
     *
     * @idanswersQ              int(11) PK
     * @category                int(11)
     * @description             string(450)
     * @status                  int(4)
     * @likes                   int(11) PK
     * @users_idusers           int(11) FK
     * @questions_idquestions   int(11) FK
     * @answer                  int(11) (apunta al id de la que se considero como la respuesta de la pregunta)
     * @created                 timestamp
    */

    function Show(){
      $st = $this->pdo->prepare('SELECT * FROM answersq');
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function find(){
      $id = 1;
      $st = $this->pdo->prepare('SELECT * FROM answersq WHERE idanswerQ = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }


    function Create(){
      $category = 3;
      $description = 'Excelente';
      $users_idusers = 2;
      $questions_idquestions = 1;
      $st = $this->pdo->prepare('INSERT INTO answersq (category, description, users_iduser, questions_idquestions)
                                 VALUES (:category, :description, :users_iduser, :questions_idquestions)
                                 ');
      $st->bindValue(":category", $category);
      $st->bindValue(":description", $description);
      $st->bindValue(":users_iduser", $users_idusers);
      $st->bindValue(":questions_idquestions", $questions_idquestions);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Update(){
      $id = 2;
      $category = 4;
      $users_idusers = 11;
      $questions_idquestions = 1;
      $description = 'Ya me gusto(corregido)';
      $st = $this->pdo->prepare('UPDATE answersq
        SET category                = :category,
            description             = :description,
            users_iduser            = :users_iduser,
            questions_idquestions   = :questions_idquestions,
        WHERE idanswerQ = :id
      ');
      $st->bindValue(":id", $id);
      $st->bindValue(":category", $category);
      $st->bindValue(":description", $description);
      $st->bindValue(":users_iduser", $users_idusers);
      $st->bindValue(":questions_idquestions", $questions_idquestions);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Delete(){
      $id = 1;
      $st = $this->pdo->prepare('DELETE FROM answersq WHERE idanswerQ = :id');
      $st->bindValue(":id", $id);
      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

  }
