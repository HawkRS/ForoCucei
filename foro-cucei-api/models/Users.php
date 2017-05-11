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

  }
