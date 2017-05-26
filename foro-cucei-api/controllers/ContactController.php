<?php

  require_once('Controller.php');

  class ContactController extends Controller{

    private $model;

    public function __construct(){
      parent::__construct();
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Contact.php');
      $this->model = new Contact();
    }

    public function execute(){
      if (!isset($_GET['act']))
      {
        $_GET['act'] = 'read';
      }
      switch($_GET['act'])
      {
        case 'read':
          $result=json_encode ($this->model->Show());
          return $result;
          break;
        case 'create':
          if(isset($_POST['variable']) && !empty($_POST['variable'])) {
            $result=json_encode ($this->model->create());
          }
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
        default:
          $result='Acción no reconocida';
          return $result;
          break;
      }
    }


  }
