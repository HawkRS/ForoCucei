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

    function isValidPass($pass){
      $uppercase = preg_match('@[A-Z]@', $pass);
      $lowercase = preg_match('@[a-z]@', $pass);
      $number    = preg_match('@[0-9]@', $pass);
      $special   = preg_match('@[\W]@', $pass);

      if(!$uppercase || !$special || !$lowercase || !$number || strlen($pass) < 8) {
        //echo "<br>Contraseña invalida";
        return False;
      }
      else {
        //echo "<br>Contraseña valida";
        return True;
      }
    }

    function isValidName($str, $aux){
      $trimmedstr = trim($str);
      $special   = preg_match('#[\W]#', $trimmedstr);
      if($special > 0 || strlen($trimmedstr) < 2) {
        //echo "Contraseña invalida";
        //echo "<br>El " . $aux . " es invalido";
        return False;
      }
      else {
        //echo "<br>" . $aux . " valido";
        return True;
      }
    }

    /*function isSamePass($str1, $str2){
      if(password_verify()){
        return True;
      }
      else{
        return False;
      }
    }*/

  }
