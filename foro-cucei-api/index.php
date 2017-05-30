<?php
  //$result=json_encode('Acción no reconocida');
  //return $result;
  var_dump($_GET);
  if(isset($_GET) && !empty($_GET['ctrl']))
  {
    $controller = $_GET['ctrl'];

    switch ($controller) {
      case '':
      case 'home':
        //echo 'Home';
        break;
      case 'users':
        //echo 'Users';
        require_once('controllers/UsersController.php');
        $controller = new UsersController();
        break;
      case 'tutorials':
        //echo 'Tutoriales';
        require_once('controllers/TutorialsController.php');
        $controller = new TutorialsController();
        break;
      case 'questions':
        //echo 'Preguntas';
        require_once('controllers/QuestionsController.php');
        $controller = new QuestionsController();
        break;
      case 'contact':
        //echo 'Contacto';
        require_once('controllers/ContactController.php');
        $controller = new ContactController();
        break;
      case 'comment':
        //echo 'Comentarios';
        require_once('controllers/ComentsController.php');
        $controller = new ComentsController();
        break;
      case 'answer':
        //echo 'Respuestas';
        require_once('controllers/AnswersController.php');
        $controller = new AnswersController();
        break;
      default:
        //echo 'Inicio default';
        break;
    }
    $controller->execute();
  }
  else
  {
    //echo 'Inicio Else';
  }
