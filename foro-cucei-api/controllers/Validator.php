<?php

  require_once('Controller.php');

  class Validator {

    private $model;

    public function __construct(){
      parent::__construct();
    }

    /*function empty($str){
        if(strlen($str) == 0 || preg_match("/^\s+$/", $str)){
          return true;
        }
        return false;
    }*/

    function validpass($str){
        if(strlen($str) === 0 || preg_match("/^\s+$/", $str)){
          return true;
        }
        return false;
    }

    function isValidEmail($email){
      return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

  }
