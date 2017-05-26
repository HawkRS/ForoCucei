<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');

  class Contact extends Model{

    function __construct(){
      parent::__construct();
    }

    function Show(){
      $st = $this->pdo->prepare('SELECT * FROM contact');
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Create(){
      $name = 'jaime';
      $message = 'ñlkfñlkdfl{ñkds{ñlsdñlmvsñ{lsdf}ldf}}';
      $contactmail = 'jaime@mail.com';
      $st = $this->pdo->prepare('INSERT INTO contact (name, message, contactmail) VALUES (:name, :message, :contactmail)');
      $st->bindValue(":name", $name);
      $st->bindValue(":message", $message);
      $st->bindValue(":contactmail", $contactmail);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Update(){
      $id = 1;
      $name = 'Raikkonen';
      $message = 'Loredkfklñdlñddsf{ñpg}';
      $contactmail = 'Raikkonen@mail.com';
      $st = $this->pdo->prepare('UPDATE contact
        SET name      = :name,
            message   = :message,
            contactmail  = :contactmail
        WHERE idcontact = :id
      ');
      $st->bindValue(":id", $id);
      $st->bindValue(":name", $name);
      $st->bindValue(":message", $message);
      $st->bindValue(":contactmail", $contactmail);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function Delete(){
      $id = 2;
      $st = $this->pdo->prepare('DELETE FROM contact WHERE idcontact = :id');
      $st->bindValue(":id", $id);
      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

  }
