<?php

$sfhr = 1;
$idc = 4;
include '../engine.php');

if ($erro_msg) {
	
	echo '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>

		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
		<title>Adesivagem Virtual Professor Maneca 25112</title>
		<link rel="stylesheet" href="http://static.adesivagemvirtual.com.br/maneca/style.css" type="text/css"/>
		
		<!--[if lte IE 6]>
			<link rel="stylesheet" href="http://static.adesivagemvirtual.com.br/maneca/style_ie6.css" type="text/css"/>
		<![endif]-->
	
	</head>
	
	<body>
		
		<div id="main">
		
			<div id="header">
			
				<img id="logo" alt="Adesivagem Virtual" src="http://static.adesivagemvirtual.com.br/maneca/images/logo.gif"/>
				<img id="maneca" alt="Professor Maneca" src="http://static.adesivagemvirtual.com.br/maneca/images/maneca.jpg"/>
			
			</div>
			
			<div id="sep"></div>
			
			<div id="content">
				
				<div class="box">
				
					<h2>Ops, ocorreu um erro</h2>
					
					<p>'.$erro_msg.'</p>
					
					<p>Você pode voltar para a página inicial e tentar novamente <a alt="" href="http://www.adesivagemvirtual.com.br/maneca/">clicando aqui.</a></p>
					
				</div>
			
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
		
		<script type="text/javascript" src="http://static.adesivagemvirtual.com.br/default.js"></script>
		<script type="text/javascript" src="http://static.adesivagemvirtual.com.br/marquee.js"></script>
		
	</body>
	
</html>
	';
	
}

?>