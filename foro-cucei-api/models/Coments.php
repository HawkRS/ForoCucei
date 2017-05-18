<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');

  class Coments extends Model{

    function __construct(){
      parent::__construct();
    }

    /* CAMPOS DE LA TABLA
     *
     * @idanswersT              int(11) PK
     * @category                int(11)
     * @description             string(450)
     * @status                  int(4)
     * @likes                   int(11) PK
     * @users_idusers           int(11) FK
     * @tutorials_idtutorials   int(11) FK
     * @answer                  int(11) (apunta al id de la que se considero como la respuesta de la pregunta)
     * @created                 timestamp
    */

    function Show(){
      $st = $this->pdo->prepare('SELECT * FROM answerst');
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Create(){
      $category = 4;
      $description = 'Muy bueno';
      $users_idusers = 8;
      $tutorials_idtutorials = 1;
      $st = $this->pdo->prepare('INSERT INTO answerst (category, description, users_iduser, tutorials_idtutorials)
                                 VALUES (:category, :description, :users_iduser, :tutorials_idtutorials)
                                 ');
      $st->bindValue(":category", $category);
      $st->bindValue(":description", $description);
      $st->bindValue(":users_iduser", $users_idusers);
      $st->bindValue(":tutorials_idtutorials", $tutorials_idtutorials);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Update(){
      $id = 2;
      $category = 4;
      $users_idusers = 11;
      $tutorials_idtutorials = 1;
      $description = 'Ya me gusto(corregido)';
      $st = $this->pdo->prepare('UPDATE answerst
        SET category                = :category,
            description             = :description,
            users_iduser            = :users_iduser,
            tutorials_idtutorials   = :tutorials_idtutorials,
        WHERE idanswersT = :id
      ');
      $st->bindValue(":id", $id);
      $st->bindValue(":category", $category);
      $st->bindValue(":description", $description);
      $st->bindValue(":users_iduser", $users_idusers);
      $st->bindValue(":tutorials_idtutorials", $tutorials_idtutorials);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Delete(){
      $id = 1;
      $st = $this->pdo->prepare('DELETE FROM answerst WHERE idanswersT = :id');
      $st->bindValue(":id", $id);
      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

  }
