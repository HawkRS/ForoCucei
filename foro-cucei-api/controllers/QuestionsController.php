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
          echo json_encode ($this->model->Show());
          break;
        case 'create':
          echo json_encode ($this->model->create());
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
        case 'answer':
          echo json_encode ($this->model->isAnswer());
          break;
        case 'likeup':
          echo json_encode ($this->model->likeup());
          break;
        case 'approve':
          echo json_encode ($this->model->isApproved());
          break;
        case 'disapprove':
          echo json_encode ($this->model->isDisapproved());
        default:
          echo 'Acción no reconocida';
      }
    }

  }
