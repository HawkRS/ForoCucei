<?php

  require_once('Controller.php');

  class Validator {

    private $model;

    public function __construct(){ }

    function validpass($str){
        if(strlen($str) === 0 || preg_match("/^\s+$/", $str)){
          return true;
        }
        return false;
    }

    function isValidEmail($email){
      //echo ($email);
      return filter_var($email, FILTER_VALIDATE_EMAIL) != false;
    }


  }
