<?php

$sfhr = 1;
$idc = 1;
$c = 'dilma/';
include '../engine.php';

if (!$erro_msg) {
	
	echo '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		
		<title>Adesivagem Virtual Dilma</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
		<link rel="stylesheet" href="http://static.adesivagemvirtual.com.br/dilma/style.css" type="text/css"/>
		<link rel="stylesheet" href="http://static.adesivagemvirtual.com.br/marker.css" type="text/css"/>
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
		
		<!--[if lte IE 6]>
			<link rel="stylesheet" href="http://static.adesivagemvirtual.com.br/dilma/style_ie6.css" type="text/css"/>
		<![endif]-->
	
	</head>
	
	<body>
		
		<div id="main">
		
			<div id="header">
			
				<img id="logo" alt="Adesivagem Virtual" src="http://static.adesivagemvirtual.com.br/dilma/images/logo.jpg"/>
				<img id="logoLeft" alt="Dilma" src="http://static.adesivagemvirtual.com.br/dilma/images/dilma.jpg"/>
			
			</div>
			
			<div id="sep"><div id="adsTop"></div></div>
			
			<div id="content">
				
				<form method="post" enctype="multipart/form-data" action="http://www.adesivagemvirtual.com/dilma/">
					
					<div id="imageCrop" class="box">
						
						<h2>Recorte sua foto</h2>
						
						<div id="wrap">
							
							<script type="text/javascript"> var imgInitialWidth = '.$size[0].'; var selectedStick = '.$stick.'; </script>
							<img src="photos/'.$id.'.jpg" alt="" id="photo"/>
							<br/><br/>
							
							A foto recortada ser� ser quadrada para melhor visualiza��o nas redes sociais.
							
							<br/><br/>
							<input type="hidden" name="photo" value="'.$id.'">
							<input type="hidden" name="x" value="20" id="coord_x"/>
							<input type="hidden" name="y" value="15" id="coord_y"/>
							<input type="hidden" name="w" value="190" id="coord_w"/>
							<input type="hidden" name="h" value="190" id="coord_h"/>
							
						</div>
						
						<div id="adsTwB"></div>
						
					</div>
					
					<div id="right_side">
					
						<div id="preview_box" class="box">
						
							<h2>Visualiza��o</h2>
							
							<div id="preview"></div>
							<div id="preview_stick"><input type="hidden" name="stick" value="1"/></div>
							<input id="submit" type="submit" value="ADESIVAR!"/>
							
						</div>
						
						<div id="sticks_box" class="box">
						
							<h2>Adesivos</h2>
							
							<div id="sticks_imgs">
							<div class="sticks" id="s6" onclick="changeStick(6);"></div>
							<div class="sticks" id="s7" onclick="changeStick(7);"></div>
							<div class="sticks" id="s8" onclick="changeStick(8);"></div>
							<div class="sticks" id="s9" onclick="changeStick(9);"></div>
							<div class="sticks" id="s1" onclick="changeStick(1);"></div>
							<div class="sticks" id="s2" onclick="changeStick(2);"></div>
							<div class="sticks" id="s3" onclick="changeStick(3);"></div>
							<div class="sticks" id="s4" onclick="changeStick(4);"></div>
							<div class="sticks" id="s5" onclick="changeStick(5);"></div>
							</div>
							
						</div>
						
					</div>
					
					<div id="hideTower"><div id="adsTower"></div></div>
					
				</form>
				
				<div id="pre_footer">
				
					<h2>Entre em contato</h2>
					
					<p>
					Voc� pode contatar o criador pelo
					<a rel="external" href="http://www.orkut.com.br/Main#Profile?uid=7881879919364909952">Orkut</a>,
					<a rel="external" href="http://www.facebook.com/profile.php?id=100001460965269">Facebook</a> ou
					<a rel="external" href="http://twitter.com/enricodias">Twitter</a> e tirar d�vidas, informar erros, sugerir mudan�as ou at� compartilhar um novo adesivo.
					</p>
					
				</div>
				
				<div id="ads_footer">
					
					<div id="ads2Sq"></div>
					<div id="ads1Sq"></div>
					<div id="ads1Tw"></div>
					<div id="ads2Tw"></div>
					
				</div>
				
			</div>
			
			<div id="footer">
				
				<div id="footer_content">
					
					<div>
					
						<ul>
							
							<li><strong>Compartilhe: </strong></li>
							
						</ul>
						
						<ul>
							
							<li><a id="orkut" class="share_icons" href="http://www.orkut.com.br/Main#Community?cmm=2826730"></a></li>
							<li><a id="twitter" class="share_icons" href="http://twitter.com/dilmabr"></a></li>
							<li><a id="facebook" class="share_icons" href="http://www.facebook.com/dilmabr"></a></li>
							<li><a id="youtube" class="share_icons" href="http://www.youtube.com/dilmanaweb"></a></li>
							
						</ul>
					
					</div>
					
					<div id="credits">
						
						Desenvolvido e mantido por <a rel="external" href="http://www.enricodias.com">Enrico Dias</a> (<a href="mailto:enrico@enricodias.com">enrico@enricodias.com</a>) e hospedado por <a rel="external" href="http://www.mdweb.com.br">MDweb.com.br</a><br/>
						<a rel="external" href="http://creativecommons.org/licenses/by-nc-sa/2.5/deed.pt">Copyleft � 2010</a> - Adesivagem Virtual.
						<a rel="external" href="http://validator.w3.org/check/referer">Valid XHTML 1.1</a> |
						<a rel="external" href="http://jigsaw.w3.org/css-validator/check/referer">Valid CSS 2.1</a> |
						<a rel="external" href="http://portuguese-191425397934.spampoison.com">SPN</a> |
						<a rel="external" href="http://www.anybrowser.org/campaign/">Viewable With Any Browser</a>
						
					</div>
					
				</div>
				
				<div id="footer_flag"></div>
			
			</div>
		
		</div>
		
		<div id="bounce"></div>
		
		<script type="text/javascript" src="http://static.adesivagemvirtual.com.br/dilma/default.js"></script>
		<script type="text/javascript" src="http://static.adesivagemvirtual.com.br/marquee.js"></script>
		
	</body>
	
</html>
	';
	
} else {
	
	echo '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>

		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
		<title>Adesivagem Virtual Dilma</title>
		<link rel="stylesheet" href="http://static.adesivagemvirtual.com.br/dilma/style.css" type="text/css"/>
		<link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
		
		<!--[if lte IE 6]>
			<link rel="stylesheet" href="http://static.adesivagemvirtual.com.br/dilma/style_ie6.css" type="text/css"/>
		<![endif]-->
	
	</head>
	
	<body>
		
		<div id="main">
		
			<div id="header">
			
				<img id="logo" alt="Adesivagem Virtual" src="http://static.adesivagemvirtual.com.br/dilma/images/logo.gif"/>
				<img id="logoLeft" alt="Dilma" src="http://static.adesivagemvirtual.com.br/dilma/images/dilma.jpg"/>
			
			</div>
			
			<div id="sep"></div>
			
			<div id="content">
				
				<div class="box">
				
					<h2>Ops, ocorreu um erro</h2>
					
					<p><strong>'.$erro_msg.'</strong></p>
					
					<p>Voc� pode voltar para a p�gina inicial e tentar novamente <a alt="" href="http://www.adesivagemvirtual.com.br/dilma/">clicando aqui</a>.</p>
					
				</div>
			
				<div id="pre_footer">
				
					<h2>Entre em contato</h2>
					
					<p>
					Voc� pode contatar o criador pelo
					<a rel="external" href="http://www.orkut.com.br/Main#Profile?uid=7881879919364909952">Orkut</a>,
					<a rel="external" href="http://www.facebook.com/profile.php?id=100001460965269">Facebook</a> ou
					<a rel="external" href="http://twitter.com/enricodias">Twitter</a> e tirar d�vidas, informar erros, sugerir mudan�as ou at� compartilhar um novo adesivo.
					</p>
					
				</div>
				
				<div id="ads_footer">
					
					<div id="ads2Sq"></div>
					<div id="ads1Sq"></div>
					<div id="ads1Tw"></div>
					<div id="ads2Tw"></div>
					
				</div>
				
			</div>
			
			<div id="footer">
				
				<div id="footer_content">
					
					<div>
					
						<ul>
							
							<li><strong>Compartilhe: </strong></li>
							
						</ul>
						
						<ul>
							
							<li><a id="orkut" class="share_icons" rel="external" href="http://www.orkut.com.br/Main#Community?cmm=2826730"></a></li>
							<li><a id="twitter" class="share_icons" rel="external" href="http://twitter.com/dilmabr"></a></li>
							<li><a id="facebook" class="share_icons" rel="external" href="http://www.facebook.com/dilmabr"></a></li>
							<li><a id="youtube" class="share_icons" rel="external" href="http://www.youtube.com/dilmanaweb"></a></li>
							
						</ul>
					
					</div>
					
					<div id="credits">
						
						Desenvolvido e mantido por <a rel="external" href="http://www.enricodias.com">Enrico Dias</a> (<a href="mailto:enrico@enricodias.com">enrico@enricodias.com</a>) e hospedado por <a rel="external" href="http://www.mdweb.com.br">MDweb.com.br</a><br/>
						<a rel="external" href="http://creativecommons.org/licenses/by-nc-sa/2.5/deed.pt">Copyleft � 2010</a> - Adesivagem Virtual.
						<a rel="external" href="http://validator.w3.org/check/referer">Valid XHTML 1.1</a> |
						<a rel="external" href="http://jigsaw.w3.org/css-validator/check/referer">Valid CSS 2.1</a> |
						<a rel="external" href="http://portuguese-191425397934.spampoison.com">SPN</a> |
						<a rel="external" href="http://www.anybrowser.org/campaign/">Viewable With Any Browser</a>
						
					</div>
					
				</div>
			
			</div>
		
		</div>
		
		<div id="bounce"></div>
		
		<script type="text/javascript" src="http://static.adesivagemvirtual.com.br/presidenciaveis.js"></script>
		<script type="text/javascript" src="http://static.adesivagemvirtual.com.br/marquee.js"></script>
		
	</body>
	
</html>
	';
	
}

?>