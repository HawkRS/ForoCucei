<?php
include('config.php');

class Database extends PDO{

  public function __construct(){
  }

  public function connection(){
    $dsn = 'mysql:dbname='.DB_NAME.';host='.DB_HOST;
    try{
      $this->pdo = new PDO($dsn, DB_USER, DB_PASS);
      //$pdo = new PDO($dsn, DB_USER, DB_PASS);
      //echo 'Entre a la base';
    }
    catch (PDOException $e){
      echo 'Connection failed: ' . $e->getMessage();
    }
    //var_dump($pdo);
  }

  private function disconnect() {
    $this->pdo->close();
  }
}
