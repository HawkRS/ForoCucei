<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/Database.php');

  class Model{


    function __construct(){
      //$this->db = new MySQLiManager(DB_HOST, DB_USER, DB_PASS, DB_NAME);
      //$this->db = new Database($DB_TYPE, $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS);
      $this->connection = DataBase::connection();
    }


  }
