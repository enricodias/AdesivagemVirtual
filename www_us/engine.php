<?php

if (!$sfhr) exit();

//ini_set('memory_limit', '128M');
//ini_set('max_input_time', 1200);
set_time_limit(1280);
error_reporting(0);


function ProcessImage($in, $out, $max_width, $max_height) {
	
	if ($_POST['w'] && $_POST['h']) {
		
		$width = $_POST['w'];
		$height = $_POST['h'];
		
	} else list($width, $height) = getimagesize($in);
	
	if ($width > $max_width) {
		
		$new_height = ($max_width/$width) * $height;
		$new_width = $max_width;
		
	}
	
	if ($new_height > $max_height) {
		
		$new_width = ($max_height/$new_height) * $new_width;
		$new_height = $max_height;
		
	}
	
	if (!$new_width) $new_width = $width;
	if (!$new_height) $new_height = $height;
	
	if ($_POST['w']) $source = $in;
	else $source = imagecreatefromjpeg($in);
	
	$thumb = imagecreatetruecolor($new_width, $new_height);
	imagecopyresampled($thumb, $source, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
	imagejpeg($thumb, $out.'.jpg', 80);
	
}

if ($_POST['email']) {
	
	$connect = mysql_connect('localhost', 'adesiv_default', '');
	mysql_select_db('adesiv_default') or die(mysql_error());
	
	$sql = mysql_query('SELECT email, sexo FROM emails WHERE email = \''.strip_tags($_POST['email']).'\' AND idc = '.$idc);
	
	if (@mysql_num_rows($sql)) {
		
		if ($_POST['sexo']) {
		
			$result = mysql_fetch_array($sql);
			
			if (($result['sexo'] != 'm' || $result['sexo'] !== 'f') && ($_POST['sexo'] == 'm' || $_POST['sexo'] == 'f')) $sql = mysql_query('UPDATE emails SET sexo = \''.$_POST['sexo'].'\' WHERE email = \''.strip_tags($_POST['email']).'\'');
			
		}
		
	} else $sql = mysql_query('INSERT INTO emails (idc, nome, email, sexo) VALUES ('.$idc.', \''.strip_tags($_POST['nome']).'\', \''.strip_tags($_POST['email']).'\', \''.strip_tags($_POST['sexo']).'\')');
	
	mysql_close($connect);
	
}

if ($_FILES['photo']['tmp_name']) {
	
	if ($_FILES['photo']['size'] > 3145728) $erro_msg = 'A foto enviada é maior que 3mb.';
	elseif ($_FILES['photo']['type'] != 'image/jpeg' && $_FILES['photo']['type'] != 'image/jpg' && $_FILES['photo']['type'] != 'image/pjpeg') $erro_msg = 'A foto enviada não uma foto jpeg válida, tente enviar uma foto em outro formato.';
	
	if (!$erro_msg) {
		
		if (!file_exists('./sticks/'.$_POST['stick'].'.gif')) $stick = 1;
		else $stick = $_POST['stick'];
		
		list($width, $height) = getimagesize($_FILES['photo']['tmp_name']);
		
		if ($_POST['screenWidth']) {
			
			$max_width = $_POST['screenWidth'] - (($_POST['screenWidth'] / 100) * 5) - 260;
			$max_height = 600;
			
			if ($width > $max_width || $height > $max_height) {
				
				$id = uniqid();
				ProcessImage($_FILES['photo']['tmp_name'], './photos/'.$id, $max_width, $max_height);
				$size = getimagesize('./photos/'.$id.'.jpg');
				
			}
			
		} else {
			
			$max_width = 600;
			$max_height = 600;
			
		}
		
		$id = uniqid();
		ProcessImage($_FILES['photo']['tmp_name'], './photos/'.$id, $max_width, $max_height);
		$size = getimagesize('./photos/'.$id.'.jpg');
	
		if ($size[0] < 73 || $size[1] < 73) $erro_msg = 'A foto enviada é pequena de mais para ser adesivada.';
		elseif ($size[0] < 190 || $size[1] < 190 || ($size[0] < 290 || $size[1] < 290) || (($size[0] < 290 || $size[1] < 290) && !$_POST['screenWidth'])) {
			
			function minStick($stick, $photo, $newX) {
		
				$img = imagecreatefromjpeg($photo.'.jpg');

				// Pega o Tamanho da imagem que o usuario enviou		
				$x = imagesx($img);
				$y = imagesy($img);

				// Define a largura e altura para a nova imagem proporcional a imagem recebida do usuario
				$newY = $y;
				$stickY = 48;
				
				if ($newX < 190) {
					
					// stick resize
					$stickY = ($newX / 190) * $stickY;
					$img2 = imagecreatefromgif('./sticks/'.$stick.'.gif');
					$stick_img = imagecreatetruecolor($newX,$stickY);
					imagecopyresized($stick_img, $img2, 0, 0, 0, 0, $newX, $stickY, imagesx($img2), imagesy($img2));
					ImageDestroY($img2);
					
				} else $stick_img = imagecreatefromgif('./sticks/'.$stick.'.gif');
				
				$imgY = ($newY - $stickY);
				
				// Cria uma imagem temporaria com o novo tamanho		
				$img_temp = imagecreatetruecolor($newX,$newY);	

				// Muda o tamanho da imagem original de acordo com a imagem temporaria			
				imagecopyresized($img_temp, $img, 0, 0, 0, 0, $newX, $newY, $x, $y);
				ImageDestroY($img);

				// Mescla uma foto sobre a outra
				imagecopymerge($img_temp, $stick_img, 0, $imgY, 0, 0, imagesx($stick_img), imagesy($stick_img), 100);
				ImageDestroY($stick_img);
				
				header("Content-Type: application/force-download");
				header("Content-Disposition: attachment; filename=foto_adesivada.jpg");
				ImageJpeg($img_temp, NULL, 100);
				
				ImageDestroY($img_temp);

			}
			
			if ($size[0] > 190) $size[0] = 190;
			minStick($stick, './photos/'.$id, $size[0]);
			exit();
			
		}
		
	}
	
} elseif ($_POST['w']) {
	
	if ($_POST['w'] < 190 || $_POST['h'] < 190) $erro_msg = 'Coordenadas de recorte inferiores a 190px. Se esse erro persistir, entre em contato conosco.';
	elseif (!file_exists('./photos/'.$_POST['photo'].'.jpg')) $erro_msg = 'A foto requisitada não existe. Se esse erro persistir, entre em contato conosco.';
	
	if (!$erro_msg) {
	
		if (!file_exists('./sticks/'.$_POST['stick'].'.gif')) $stick = 1;
		else $stick = $_POST['stick'];
		
		$stick_n = $stick;
		$stick = imagecreatefromgif('./sticks/'.$_POST['stick'].'.gif');
		
		$image_rs = imagecreatefromjpeg('./photos/'.$_POST['photo'].'.jpg');
		$new_rs = imagecreatetruecolor($_POST['w'], $_POST['h']);
		imagecopy($new_rs, $image_rs, 0, 0, $_POST['x'], $_POST['y'], $_POST['w'], $_POST['h']);
		ImageDestroY($image_rs);
		
		ProcessImage($new_rs, './photos/t_'.$_POST['photo'], 190, 190);
		$new_rs = imagecreatefromjpeg('./photos/t_'.$_POST['photo'].'.jpg');
		unlink('./photos/t_'.$_POST['photo'].'.jpg');
		
		if ($idc == 2 && $stick_n > 10) imagecopymerge($new_rs, $stick, 0, 0, 0, 0, 190, 190, 100);
		else imagecopymerge($new_rs, $stick, 0, (imagesy($new_rs) - 48), 0, 0, 190, 48, 100);
		ImageDestroY($stick);
		
		header("Content-Type: application/force-download");
		header("Content-Disposition: attachment; filename=foto_adesivada.jpg");
		imagejpeg($new_rs);
		ImageDestroY($new_rs);
		
	}
	
} else header('Location: http://www.adesivagemvirtual.com.br/'.$c);

?>