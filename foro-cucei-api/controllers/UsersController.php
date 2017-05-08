<?php

  include('C:/xampp/htdocs/Forocucei/foro-cucei-api/models/Users.php');

  class UsersController {

    function __construct(){
      //
      $model = new Users();
    }

    function ejecutar(){
      if (!isset($_GET['act']))
      {
        $_GET['act'] = 'listar';
      }

      switch($_GET['act'])
      {
        case 'listar':
          $this->listar();
          break;
        default:
          echo 'Acción no reconocida';
      }
    }// TERMINA FUNCION EJECUTAR

    function listar(){
      echo 'Este debe listar los productos';
      var_dump($model->ShowUsers());
    }// TERMINA FUNCION LISTAR

  }
