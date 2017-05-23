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
          echo json_encode ($this->model->create());
          break;
        case 'show':
          echo json_encode ($this->model->show());
          break;
        case 'signin':
          echo json_encode ($this->model->signin());
          break;
        case 'update':
          echo json_encode ($this->model->update());
          break;
        case 'delete':
          echo json_encode ($this->model->delete());
          break;
        case 'find':
          echo json_encode ($this->model->find());
          break;
        case 'resetpass':
          echo json_encode ($this->model->ResetPass());
          break;
        default:
          echo 'Acción no reconocida';
      }
    }

  }
