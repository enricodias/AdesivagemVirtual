<?

header("Content-Type: application/force-download");
header("Content-Disposition: attachment; filename=imagem.jpg");

// Defina a pasta pra upload
if (!empty($arquivo) and is_file($arquivo)) {
$pasta="uploads/";
$caminho=$pasta.$arquivo_name;

// Define estenção da Imagem
if (eregi("jpeg|jpg|gif|png", $caminho)){
copy($arquivo,$caminho);
}
else{
echo "<h2><font color='red'>Caminho ou nome de arquivo Inválido.</font></h2>";
}

// Define o tipo de imagem que o usuário enviou e cria uma imagem temporaria
if (eregi(".jpg", $arquivo_name)){
$img = imagecreatefromjpeg($caminho);
}
elseif (eregi(".jpeg", $arquivo_name)){
$img = imagecreatefromjpeg($caminho);
}
elseif (eregi(".gif", $arquivo_name)){
$img = imagecreatefromgif($caminho);
}
elseif (eregi(".png", $arquivo_name)){
$img = imagecreatefrompng($caminho);
}
else{
echo "<h2><font color='red'>Caminho ou nome de arquivo Inválido.</font></h2>";
}

// Se a imagem for valida, cria uma imagem temporaria para editar
if (eregi("jpeg|jpg|gif|png", $caminho)){

// Pega o Tamanho da imagem que o usuario enviou		
$x = imagesx($img);
$y = imagesy($img);

// Define a largura e altura para a nova imagem proporcional a imagem recebida do usuario
$newX = $x;
$newY = ($y - 30);

// Cria uma imagem temporaria com o novo tamanho		
$img_temp = imagecreatetruecolor($newX,$newY);	

// Muda o tamanho da imagem original de acordo com a imagem temporaria			
imagecopyresized($img_temp, $img, 0, 0, 0, 0, $newX, $newY, $x, $y);


// 1 se o adesivo está em baixo e 0 se está em cima.
if($pos == 1){
imagecopymerge($img_temp, $img, 0, 0, 0, 0, $x, $newY, 100);
}
else{
imagecopymerge($img_temp, $img, 0, 0, 0, 0, $x, $y + 30, 100);
}

// Cria a nova imagem sem o logo
    ImageJpeg($img_temp, NULL, 100);

// Destroi as imagens temporarias
    ImageDestroY($img);
    ImageDestroY($img_temp);

// Deleta a imagem enviada pelo usuario
    unlink($caminho);

exit;
}

else{
echo "<h2><font color='red'>Caminho ou nome de arquivo Inválido.</font></h2>";
}
}
else{
echo "<h1>O arquivo não foi transferido!</h1>";
}

?>