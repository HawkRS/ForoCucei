<?php

  class Users {

    function __construct(){
      //$pdo = new PDO();
      include('config.php');
      $dbdata = 'mysql:dbname='.DB_NAME.';host='.DB_HOST;

      try{
      	$pdo = new PDO($dbdata, DB_USER, DB_PASS);
      }
      catch (PDOException $e){
      	echo 'Connection failed: ' . $e->getMessage();
      }
    }

    function ShowUsers(){

      $st = $this->$pdo->prepare('SELECT * FROM users');

      $st->execute();

      $result = $st->fetchAll(PDO::FETCH_OBJ);

      return $result;
    }

  }
