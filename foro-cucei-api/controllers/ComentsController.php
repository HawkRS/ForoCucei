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
        case 'read':
          //echo 'READ';
          echo json_encode ($this->model->Show());
          break;
        case 'create':
          //echo 'CREATE';
          echo json_encode ($this->model->create());
          break;
        case 'update':
          //echo 'UPDATE';
          echo json_encode ($this->model->update());
          break;
        case 'delete':
          //echo 'DELETE';
          echo json_encode ($this->model->delete());
          break;
        case 'find':
          //echo 'DELETE';
          echo json_encode ($this->model->find());
          break;
        default:
          echo 'Acción no reconocida';
      }
    }

  }
