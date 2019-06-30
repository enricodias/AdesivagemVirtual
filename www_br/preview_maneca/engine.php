<?php

function ProcessImage($in, $out, $type, $max_width, $max_height) {
	
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
	
	if (!$new_width) { $new_width = $width; }
	if (!$new_height) { $new_height = $height; }
	
	if ($_POST['w']) $source = $in;
	else
	switch ($type) {
		
		case 'image/jpeg':
		case 'image/pjpeg':
			
			$source = imagecreatefromjpeg($in);
			
		break;
		
	}
	
	$thumb = imagecreatetruecolor($new_width, $new_height);
	imagecopyresampled($thumb, $source, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
	imagejpeg($thumb, $out.'.jpg', 80);
	
}

if ($_FILES['photo']['tmp_name']) {
	
	$id = uniqid();
	ProcessImage($_FILES['photo']['tmp_name'], './photos/'.$id, 'image/jpeg', 600, 600);
	
	$size = getimagesize('./photos/'.$id.'.jpg');
	
	echo '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>

		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
		<title>Recorte sua foto - Adesivagem Virtual Professor Maneca 25112</title>
		<link rel="stylesheet" href="style.css" type="text/css"/>
		<link rel="stylesheet" type="text/css" href="marker.css"/>
		
		<!--[if lte IE 6]>
			<link rel="stylesheet" href="style_ie6.css" type="text/css"/>
		<![endif]-->
	
	</head>
	
	<body>
		
		<div id="main">
		
			<div id="header">
			
				<img id="logo" alt="Adesivagem Virtual" src="images/logo.gif"/>
				<img id="maneca" alt="Professor Maneca" src="images/maneca.jpg"/>
			
			</div>
			
			<div id="sep"></div>
			
			<div id="content">
				
				
				
				<form method="post" enctype="multipart/form-data" action="engine.php">
					
					<div id="imageCrop" class="box">
					
						<h2>Recorte sua foto</h2>
						
						<div id="wrap">
							
							<script> var imgInitialWidth = '.$size[0].'; var selectedStick = '.$_POST['stick'].'; </script>
							<img src="photos/'.$id.'.jpg" alt="" id="photo"/>
							<br/><br/>
							
							A foto recortada será ser quadrada para melhor visualização nas redes sociais.
							
							<span id="sample_x" style="display: none;">0</span>
							<span id="sample_y" style="display: none;">0</span>
							<span id="sample_w" style="display: none;">0</span>
							<span id="sample_h" style="display: none;">0</span>
							
							<input type="hidden" name="photo" value="'.$id.'"/>
							<input type="hidden" name="x" value="0" id="coord_x"/>
							<input type="hidden" name="y" value="0" id="coord_y"/>
							<input type="hidden" name="w" value="0" id="coord_w"/>
							<input type="hidden" name="h" value="0" id="coord_h"/>
							
						</div>
						
					</div>
					
					<div id="right_side">
					
						<div id="preview_box" class="box">
						
							<h2>Visualização</h2>
							
							<div id="preview"></div>
							<div id="preview_stick"><input type="hidden" name="stick" value="1"/></div>
							<input id="submit" type="submit" value="ADESIVAR!"/>
							
						</div>
						
						<div id="sticks_box" class="box">
						
							<h2>Adesivos</h2>
							
							<div id="sticks_imgs">
							<div class="sticks" id="s1" onclick="changeStick(1);"></div>
							<div class="sticks" id="s2" onclick="changeStick(2);"></div>
							<div class="sticks" id="s3" onclick="changeStick(3);"></div>
							<div class="sticks" id="s4" onclick="changeStick(4);"></div>
							<div class="sticks" id="s5" onclick="changeStick(5);"></div>
							</div>
							
						</div>
						
					</div>
					
				</form>
			
			</div>
			
			<div id="footer">
				
				<div id="footer_content">
					
					<div>
					
						<ul>
							
							<li><strong>Compartilhe: </strong></li>
							
						</ul>
						
						<ul>
							
							<li><a id="orkut" class="share_icons" href="http://www.orkut.com.br/Main#Profile?uid=5357772218414151571"></a></li>
							<li><a id="twitter" class="share_icons" href="http://www.twitter.com/profmaneca25112"></a></li>
							<li><a id="blogger" class="share_icons" href="http://www.professormaneca.com.br"></a></li>
							<li><a id="youtube" class="share_icons" href="http://www.youtube.com/user/tvmaneca"></a></li>
							
						</ul>
					
					</div>
					
					<div id="credits">
						
						Desenvolvimento pela Equipe Ficha Limpa Professor Maneca e Hospedado por <a rel="external" href="http://www.mdweb.com.br">MDweb.com.br</a><br/>
						<a rel="external" href="http://creativecommons.org/licenses/by-nc-sa/2.5/deed.pt">Copyleft © 2010</a> - Adesivagem Virtual.
						<a rel="external" href="http://validator.w3.org/check/referer">Valid XHTML 1.1</a> |
						<a rel="external" href="http://jigsaw.w3.org/css-validator/check/referer">Valid CSS 2.1</a> |
						<a rel="external" href="http://portuguese-191425397934.spampoison.com">SPN</a> |
						<a rel="external" href="http://www.anybrowser.org/campaign/">Viewable With Any Browser</a>
						
					</div>
					
				</div>
			
			</div>
		
		</div>
		
		<script type="text/javascript" src="js/maneca.js"></script>
		<script type="text/javascript" src="js/prototype_reduced.js"></script>
		<script type="text/javascript" src="js/rectmarquee.js"></script>
		
	</body>
	
</html>
';
	
} elseif ($_POST['x']) {

	header("Content-Type: application/force-download");
	header("Content-Disposition: attachment; filename=foto_adesivada.jpg");

	if (!file_exists('./sticks/'.$_POST['stick'].'.gif')) $stick = 1;
	else $stick = $_POST['stick'];
	
	$stick = imagecreatefromgif('./sticks/'.$_POST['stick'].'.gif');
	
	$image_rs = imagecreatefromjpeg('./photos/'.$_POST['photo'].'.jpg');
	$new_rs = imagecreatetruecolor($_POST['w'], $_POST['h']);
	imagecopy($new_rs, $image_rs, 0, 0, $_POST['x'], $_POST['y'], $_POST['w'], $_POST['h']);
	
	ProcessImage($new_rs, './photos/t_'.$_POST['photo'], 'image/jpeg', 190, 190);
	$new_rs = imagecreatefromjpeg('./photos/t_'.$_POST['photo'].'.jpg');
	unlink('./photos/t_'.$_POST['photo'].'.jpg');
	
	imagecopymerge($new_rs, $stick, 0, (imagesy($new_rs) - 48), 0, 0, 190, 48, 100);
	imagejpeg($new_rs); 
	
} else header('Location: http://www.adesivagemvirtual.com.br/maneca');

?>