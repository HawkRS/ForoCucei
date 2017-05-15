<?php
	if (!isset($_GET['ctrl'])){
		$_GET['ctrl'] = 'index';
	}
	switch($_GET['ctrl']){
		case 'index':
			echo "No hagas nada";
			break;
		case 'usuarios':
			// cargar el archivo de users controllers
			require_once('controllers/UsersController.php');
			// crear objeto
			$user_ctrl = new UsersController();
			$user_ctrl->ejecutar();
			break;
		default:
			echo "El controlador seleccionado no es valido";
	}
