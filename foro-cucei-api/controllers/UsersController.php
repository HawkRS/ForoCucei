<?php

  include('models/Users.php');

  class UsersController {

    function __construct(){
      $this->model = new Users();
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
      //echo 'Este debe listar los productos';
      echo json_encode($this->model->ShowUsers());
    }// TERMINA FUNCION EJECUTAR

  }
