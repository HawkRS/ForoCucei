<?php

  require_once('Controller.php');

  class UsersController extends Controller{

    private $model;

    public function __construct(){
      parent::__construct();
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Users.php');
      $this->model = new Users();
    }

    public function execute(){
      if (!isset($_GET['act']))
      {
        $_GET['act'] = 'read';
      }
      switch($_GET['act'])
      {
        case 'signup':
          //echo 'CREATE';
          echo json_encode ($this->model->signup());
          break;
        case 'show':
          //echo 'READ';
          echo json_encode ($this->model->show());
          break;
        case 'signin':
          //echo 'CREATE';
          echo json_encode ($this->model->signin());
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
        case 'resetpass':
          //echo 'DELETE';
          echo json_encode ($this->model->ResetPass());
          break;
        default:
          echo 'Acción no reconocida';
      }
    }

  }
