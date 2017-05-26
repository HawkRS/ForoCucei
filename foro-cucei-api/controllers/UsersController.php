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
        case 'create':
          $result=json_encode ($this->model->create());
          return $result;
          break;
        case 'show':
          $result=json_encode ($this->model->show());
          return $result;
          break;
        case 'signin':
          $result=json_encode ($this->model->signin());
          return $result;
          break;
        case 'update':
          $result=json_encode ($this->model->update());
          return $result;
          break;
        case 'delete':
          $result=json_encode ($this->model->delete());
          return $result;
          break;
        case 'find':
          $result=json_encode ($this->model->find());
          return $result;
          break;
        case 'resetpass':
          $result=json_encode ($this->model->ResetPass());
          return $result;
          break;
        default:
          $result='Acción no reconocida';
          return $result;
          break;
      }
    }

  }
