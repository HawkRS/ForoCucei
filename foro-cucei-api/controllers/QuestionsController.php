<?php

  require_once('Controller.php');

  class QuestionsController extends Controller{

    private $model;

    public function __construct(){
      parent::__construct();
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Questions.php');
      $this->model = new Questions();
    }

    public function execute(){
      if (!isset($_GET['act']))
      {
        $_GET['act'] = 'read';
      }
      switch($_GET['act'])
      {
        case 'read':
          $result=json_encode($this->model->Show());
          return $result;
          break;
        case 'create':
          $result=json_encode($this->model->create());
          return $result;
          break;
        case 'update':
          $result=json_encode($this->model->update());
          return $result;
          break;
        case 'delete':
          $result=json_encode($this->model->delete());
          return $result;
          break;
        case 'find':
          $result=json_encode($this->model->find());
          return $result;
          break;
        case 'answer':
          $result=json_encode($this->model->isAnswer());
          return $result;
          break;
        case 'likeup':
          $result=json_encode($this->model->likeup());
          return $result;
          break;
        case 'approve':
          $result=json_encode($this->model->isApproved());
          return $result;
          break;
        case 'disapprove':
          $result=json_encode($this->model->isDisapproved());
          return $result;
        default:
          $result='Acción no reconocida';
          return $result;
      }
    }

  }
