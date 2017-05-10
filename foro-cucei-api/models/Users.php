<?php

  class Users {

    function __construct(){
      include('config.php');

      $dsn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST;

      try{
        $this->pdo = new PDO($dsn, DB_USER, DB_PASS);
      }
      catch (PDOException $e){
        echo 'Connection failed: ' . $e->getMessage();
      }

    }

    function ShowUsers(){

      $st = $this->pdo->prepare('SELECT * FROM users');

      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

    function CreateUsers(){
      $name = 'Ayrton';
      $last = 'Senna';
      $nick = 'Magic';
      $mail = 'Senna@mail.com';

      $st = $this->pdo->prepare('INSERT INTO users(name, last, nick, mail) VALUES (:name, :last, :nick, :mail)');
      $st->bindValue(":name", $name);
      $st->bindValue(":last", $last);
      $st->bindValue(":nick", $nick);
      $st->bindValue(":mail", $mail);

      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

    function UpdateUsers(){
      $id = 2;
      $name = 'Kimi';
      $last = 'Raikkonen';
      $nick = 'iceman';
      $mail = 'iceone@mail.com';

      $st = $this->pdo->prepare('UPDATE users
        SET `name` = :name,
            `last` = :last,
            `nick` = :nick,
            `mail` = :mail
        WHERE `iduser` = :id
      ');
      $st->bindValue(":id", $id);
      $st->bindValue(":name", $name);
      $st->bindValue(":last", $last);
      $st->bindValue(":nick", $nick);
      $st->bindValue(":mail", $mail);

      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

    function DeleteUsers(){
      $id = 3;
      $st = $this->pdo->prepare('DELETE FROM users WHERE `iduser` = :id');
      $st->bindValue(":id", $id);
      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

  }
