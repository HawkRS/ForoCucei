<?php

  require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/models/Model.php');


  class Users extends Model{

    function __construct(){
      parent::__construct();
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

    function signup(){
      require_once('c:/xampp/htdocs/ForoCucei/foro-cucei-api/controllers/Validator.php');
      $validador = new Validator();
      $name = 'Guera';
      $last = 'Gonzalez';
      $nick = 'Weris';
      $mail = 'Weris@mail.com';
      $pass = 'Carlos1';
      $FieldName = 'Nombre';
      $FieldLast = 'Apellido';
      // VALIDANDO QUE NO TENGAMOS CAMPOS VACIOS
      if(empty($name) || empty($last) ||empty($nick) ||empty($mail) ||empty($pass)){
        echo "<br>variables vacias";
        //return False;
      }
      else{
        if($validador->isValidEmail($mail)== False){
          return "<br>El correo ingresado es invalido";
        }
        else{
          $this->BuscarCorreo($mail);
          $this->BuscarNick($nick);
          $validador->isValidName($name, $FieldName);
          $validador->isValidName($last, $FieldLast);
          if($validador->isValidPass($pass) != False)
          {
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
          //VALIDANDO TAMAÑO Y FORMATO DE LA CONTRASEÑA
          //echo "Correo valido";
        }

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
      $id = 2;
      $pass = '+Carlos1';
      $newpass = '+Carlos1';
      $passHash = password_hash($newpass, PASSWORD_BCRYPT);
      $st = $this->pdo->prepare('UPDATE users
        SET pass = :pass,
        WHERE iduser = :id
      ');
      $st->bindValue(":pass", $passHash);
    }

    function Update(){
      $id = 2;
      $name = 'MikaS';
      $last = 'Hakkinen';
      $nick = 'flying finn';
      $mail = 'Mika@mail.com';
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
          echo '<br>Correo valido';
      } else {
          echo '<br>E-mail exists!';
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
          echo '<br>Nickname valido';
      } else {
          echo '<br>Nickname exists!';
          return False;
      }
      return $result;
    }
  }
