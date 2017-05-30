<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');

  class Users extends Model{

    function __construct(){
      parent::__construct();
      $error = [];
    }

    function show(){
      $st = $this->pdo->prepare('SELECT * FROM users');
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function find(){
      $id = 2;
      $st = $this->pdo->prepare('SELECT * FROM users WHERE iduser = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function create(){
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/controllers/Validator.php');
      $validador = new Validator();
      $name = 'Morty';
      $last = 'Smith';
      $nick = 'Morty';
      $mail = 'Morty@mail.com';
      $pass = '+MortyS1';
      $FieldName = 'Nombre';
      $FieldLast = 'Apellido';
      // VALIDANDO QUE NO TENGAMOS CAMPOS VACIOS
      if(empty($name) || empty($last) ||empty($nick) ||empty($mail) ||empty($pass)){
        //echo "<br>variables vacias";
        $error[] = 'Falta de llenar uno de los campos';
        //return $error;
      }
      if($validador->isValidName($name, $FieldName)==False){
        $error[] = 'El nombre es invalido';
        //return $error
      }
      if($validador->isValidName($last, $FieldLast)==False){
        $error[] = 'El apellido es invalido';
        //return $error
      }
      if($this->BuscarNick($nick) == False){
        $error[] = 'Este nickname ya esta tomado';
        //return $error
      }
      if($validador->isValidEmail($mail)== False){
        $error[] = 'El correo es invalido';
        //return $error
      }
      if($this->BuscarCorreo($mail) == False){
        $error[] = 'Este correo ya esta en uso';
        //return $error
      }
      if($validador->isValidPass($pass) == False){
        $error[] = 'Esta contraseña no es valida';
        //return $error
      }
      if(empty($error)){
        echo "<br>Datos correctos, creando usuario<br>";
        $passHash = password_hash($pass, PASSWORD_BCRYPT);
        $st = $this->pdo->prepare('INSERT INTO users(name, last, nick, mail, pass) VALUES (:name, :last, :nick, :mail, :pass)');
        $st->bindValue(":name", $name);
        $st->bindValue(":last", $last);
        $st->bindValue(":nick", $nick);
        $st->bindValue(":mail", $mail);
        $st->bindValue(":pass", $passHash);
        $st->execute();
        $result = $st->fetchAll(PDO::FETCH_OBJ);
        return $result;
      }
      else{
        //print_r($error);
        return $error;
      }
    }

    function signin(){
      $name = 'John';
      $last = 'Doe';
      $nick = 'JDoe';
      $mail = 'JDoe@mail.com';
      $pass = '+Carlos1';
      $passHash = password_hash($pass, PASSWORD_BCRYPT);
      $st = $this->pdo->prepare('SELECT * FROM users WHERE mail = :mail');
      $st->bindValue(":mail", $mail, PDO::PARAM_STR);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      var_dump($st);
    }

    function ResetPass(){
      echo "Consiguiendo old pass<br>";
      $id = 80;
      $st = $this->pdo->prepare('SELECT pass FROM users WHERE iduser = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetch(PDO::FETCH_OBJ);
      echo($result->pass);
      //return $result;
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/controllers/Validator.php');
      $validador = new Validator();
      $pass = '+MortyS1';
      $oldpass = $result->pass;
      $newpass = '+Carlos1';
      if($validador->isValidPass($pass) == False){
        $error[] = 'Esta contraseña no es valida';
        //return $error
      }
      if($validador->isValidPass($newpass) == False){
        $error[] = 'Esta contraseña no es valida';
        //return $error
      }
      if (password_verify($pass, $oldpass)) {
          echo '<br>Las contraseñas coinciden';
      } else {
          $error[] = 'Las contraseñas no coinciden';
          echo '<br>Las contraseñas no coinciden';
        }
      if(empty($error)){
        echo "<br>Datos correctos, cambiando password<br>";
        $passHash = password_hash($newpass, PASSWORD_BCRYPT);
        $st = $this->pdo->prepare('UPDATE users
          SET pass = :pass,
          WHERE iduser = :id
        ');
        $st->bindValue(":pass", $passHash);
        $st->bindValue(":id", $id);
        $st->execute();
        $result = $st->fetch(PDO::FETCH_OBJ);
        return $result;
      }
      else{
        return $error;
      }
    }

    function Update(){
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/controllers/Validator.php');
      $validador = new Validator();
      $id   = 16;
      $name = 'Walter';
      $last = 'White';
      $nick = 'Heisenberg';
      $mail = 'SkyBlue@mail.com';
      $FieldName = 'Nombre';
      $FieldLast = 'Apellido';
      if(empty($name) || empty($last) ||empty($nick) ||empty($mail)){
        //echo "<br>variables vacias";
        $error[] = 'Falta de llenar uno de los campos';
      }
      if($validador->isValidName($name, $FieldName)==False){
        $error[] = 'El nombre es invalido';
      }
      if($validador->isValidName($last, $FieldLast)==False){
        $error[] = 'El apellido es invalido';
      }
      if($this->BuscarNick($nick) == False){
        $error[] = 'Este nickname ya esta tomado';
      }
      if($validador->isValidEmail($mail)== False){
        $error[] = 'El correo es invalido';
      }
      if($this->BuscarCorreo($mail) == False){
        $error[] = 'Este correo ya esta en uso';
      }
      if(empty($error)){
        //echo "<br>Datos correctos, creando usuario<br>";
        $st = $this->pdo->prepare('UPDATE users
          SET name = :name,
              last = :last,
              nick = :nick,
              mail = :mail
          WHERE iduser = :id
        ');
        $st->bindValue(":id", $id);
        $st->bindValue(":name", $name);
        $st->bindValue(":last", $last);
        $st->bindValue(":nick", $nick);
        $st->bindValue(":mail", $mail);
        $st->execute();
        $result = $st->fetchAll(PDO::FETCH_OBJ);
        return $result;
      }
      else{
        return $error;
      }
    }

    function Delete(){
      $id = 3;
      $st = $this->pdo->prepare('DELETE FROM users WHERE iduser = :id');
      $st->bindValue(":id", $id);
      $st->execute();
      $result = $st->fetchAll(PDO::FETCH_OBJ);
      return $result;
    }

    function BuscarCorreo($mail){
      $st = $this->pdo->prepare('SELECT COUNT(mail) AS correos FROM users WHERE mail = :mail');
      $st->bindValue(":mail", $mail);
      $st->execute();
      $result = $st->fetch(PDO::FETCH_OBJ);
      //echo ($result->correos);
      //var_dump($result->correos);
      if ($result->correos == 0) {
          //echo '<br>Correo valido';
      } else {
          //echo '<br>E-mail exists!';
          return False;
      }
      return $result;
    }

    function BuscarNick($nick){
      $st = $this->pdo->prepare('SELECT COUNT(nick) AS correos FROM users WHERE nick = :nick');
      $st->bindValue(":nick", $nick);
      $st->execute();
      $result = $st->fetch(PDO::FETCH_OBJ);
      //echo ($result->correos);
      //var_dump($result->correos);
      if ($result->correos == 0) {
          //echo '<br>Nickname valido';
      } else {
          //echo '<br>Nickname exists!';
          return False;
      }
      return $result;
    }
  }
