<?php

  require_once('Controller.php');

  class ComentsController extends Controller{

    private $model;

    public function __construct(){
      parent::__construct();
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Coments.php');
      $this->model = new Coments();
    }

    public function execute(){
      if (!isset($_GET['act']))
      {
        $_GET['act'] = 'read';
      }
      switch($_GET['act'])
      {
        case 'show':
          //echo 'READ';
          $result=json_encode ($this->model->Show());
          return $result;
          break;
        case 'create':
          //echo 'CREATE';
          $result=json_encode ($this->model->create());
          return $result;
          break;
        case 'update':
          //echo 'UPDATE';
          $result=json_encode ($this->model->update());
          return $result;
          break;
        case 'delete':
          //echo 'DELETE';
          $result=json_encode ($this->model->delete());
          return $result;
          break;
        case 'find':
          //echo 'DELETE';
          $result=json_encode ($this->model->find());
          return $result;
          break;
        default:
          $result=  'Acción no reconocida';
          return $result;
          break;
      }

    }

  }
