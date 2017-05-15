<?php
  include('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Users.php');

  require_once('Controller.php');

  class UsersController extends Controller {
    function __construct(){
      $this->model = new Users();
    }

  }
