<?php

  require_once('Controller.php');

  class TutorialsController extends Controller{

    private $model;

    public function __construct(){
      parent::__construct();
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Tutorials.php');
      $this->model = new Tutorials();
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
          echo json_encode ($this->model->show());
          break;
        case 'create':
          //echo 'CREATE';
          echo json_encode ($this->model->create());
          break;
        case 'update':
          //echo 'UPDATE';
          echo json_encode ($this->model->update());
          break;
        case 'find':
          //echo 'DELETE';
          echo json_encode ($this->model->find());
          break;
        case 'delete':
          //echo 'DELETE';
          echo json_encode ($this->model->delete());
          break;
        case 'likeup':
          //echo 'DELETE';
          echo json_encode ($this->model->likeup());
          break;
        case 'approve':
          //echo 'DELETE';
          echo json_encode ($this->model->isApproved());
          break;
        case 'disapprove':
          //echo 'DELETE';
          echo json_encode ($this->model->isDisapproved());
          break;
        default:
          echo 'Acción no reconocida';
      }
    }

  }
