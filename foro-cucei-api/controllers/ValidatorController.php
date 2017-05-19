<?php

  require_once('Controller.php');

  class ValidatorController extends Controller{

    private $model;

    public function __construct(){
      parent::__construct();
    }

    function empty($str){
        if(strlen($str) === 0 || preg_match("/^\s+$/", $str)){
          return true;
        }
        return false;
    }

    function validpass($str){
        if(strlen($str) === 0 || preg_match("/^\s+$/", $str)){
          return true;
        }
        return false;
    }

  }
