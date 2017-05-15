<?php

  class Controller{

    function __construct(){

    }

    function ejecutar(){
      if (!isset($_GET['act']))
      {
        $_GET['act'] = 'read';
      }
      switch($_GET['act'])
      {
        case 'read':
          $this->read();
          break;
        case 'create':
          $this->create();
          break;
        case 'update':
          $this->update();
          break;
        case 'delete':
          $this->delete();
          break;
        default:
          echo 'Acción no reconocida';
      }
    }// TERMINA FUNCION EJECUTAR
  // FUNCIONES CRUD
    function create(){
      echo json_encode($this->model->Create());
    }
    function read(){
      //echo 'Este debe listar los productos';
      echo json_encode($this->model->Show());
    }
    function update(){
      //echo 'Este debe listar los productos';
      echo json_encode($this->model->Update());
    }
    function delete(){
      //echo 'Este debe listar los productos';
      echo json_encode($this->model->Delete());
    }

  }
