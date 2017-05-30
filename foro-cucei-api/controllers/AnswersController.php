<?php

  require_once('Controller.php');

  class AnswersController extends Controller{

    private $model;

    public function __construct(){
      parent::__construct();
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Answers.php');
      $this->model = new Answers();
    }

    public function execute(){
      if (!isset($_GET['act']))
      {
        $_GET['act'] = 'show';
      }
      switch($_GET['act'])
      {
        case 'show':
          $result = json_encode($this->model->Show());
          return $result;
          break;
        case 'create':
          $result = json_encode($this->model->create());
          return $result;
          break;
        case 'update':
          $result = json_encode($this->model->update());
          return $result;
          break;
        case 'delete':
          $result = json_encode($this->model->delete());
          return $result;
          break;
        case 'find':
          $result = json_encode($this->model->find());
          return $result;
          break;
        default:
          $result = 'Acción no reconocida';
          return $result;
      }
    }

  }
