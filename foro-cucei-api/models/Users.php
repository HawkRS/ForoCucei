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

      $st = $this->pdo->prepare('INSERT INTO users(name, last, nick, mail) VALUES (?, ?,?,?)');

      $st->execute(array('Jesus', 'Casillas', 'Chuyo', 'chuy@mail.com'));

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

    function UpdateUsers(){
      $id = 2;$name = 'Kimi';$last = 'Raikkonen';$nick = 'iceman';$mail = 'iceone@mail.com';

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

  }
