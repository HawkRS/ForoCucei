<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');

  class Users extends Model{

    function __construct(){
      parent::__construct();
    }

    function show(){
      $st = $this->pdo->prepare('SELECT * FROM users');
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function find(){
      $id = 2;
      $st = $this->pdo->prepare('SELECT * FROM users WHERE iduser = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function signup(){
      $name = 'John';
      $last = 'Doe';
      $nick = 'JDoe';
      $mail = 'JDoe@mail.com';
      $pass = '+Carlos1';
      $passHash = password_hash($pass, PASSWORD_BCRYPT);
      $st = $this->pdo->prepare('INSERT INTO users(name, last, nick, mail, pass) VALUES (:name, :last, :nick, :mail, :pass)');
      $st->bindValue(":name", $name);
      $st->bindValue(":last", $last);
      $st->bindValue(":nick", $nick);
      $st->bindValue(":mail", $mail);
      $st->bindValue(":pass", $passHash);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function signin(){
      $name = 'John';
      $last = 'Doe';
      $nick = 'JDoe';
      $mail = 'JDoe@mail.com';
      $pass = '+Carlos1';
      $passHash = password_hash($pass, PASSWORD_BCRYPT);
      $st = $this->pdo->prepare('SELECT * FROM users WHERE mail = :mail');
      $st->bindValue(":mail", $mail, PDO::PARAM_STR);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      var_dump($st);
    }

    function Update(){
      $id = 2;
      $name = 'MikaS';
      $last = 'Hakkinen';
      $nick = 'flying finn';
      $mail = 'Mika@mail.com';
      $st = $this->pdo->prepare('UPDATE users
        SET name = :name,
            last = :last,
            nick = :nick,
            mail = :mail
        WHERE iduser = :id
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

    function Delete(){
      $id = 3;
      $st = $this->pdo->prepare('DELETE FROM users WHERE iduser = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }
  }
