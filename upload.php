<?

header("Content-Type: application/force-download");
header("Content-Disposition: attachment; filename=imagem.jpg");

// Deifine o tamanho do arquivo em bytes
if($arquivo_size > 1000000) {
echo "<SCRIPT> alert('Seu arquivo não poderá ser maior que 1Mb!'); window.history.go(-1); </SCRIPT>\n";
exit;
}

// Defina a pasta pra upload e a pasta onde estao logos
if (!empty($arquivo) and is_file($arquivo)) {
$pasta="uploads/";
$caminho=$pasta.$arquivo_name;
$logo="logos/$logo.gif";

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

// Se a imagem for valida, cria uma imagem temporaria para o logo
if (eregi("jpeg|jpg|gif|png", $caminho)){

$img2 = imagecreatefromgif("$logo");
$dirpath = getcwd() . "/upload/";

// Pega o Tamanho da imagem que o usuario enviou		
$x = imagesx($img);
$y = imagesy($img);

// Define a largura e altura para a nova imagem proporcional a imagem recebida do usuario
$newX = 128;
$var_newX = ($x / $newX);
$newY = ($y / $var_newX);
$imgY = ($newY - 30);

// Cria uma imagem temporaria com o novo tamanho		
$img_temp = imagecreatetruecolor($newX,$newY);	

// Muda o tamanho da imagem original de acordo com a imagem temporaria			
imagecopyresized($img_temp, $img, 0, 0, 0, 0, $newX, $newY, $x, $y);

// Mescla uma foto sobre a outra e decide se o logo vai ficar em cima ou em baixo da foto
// 1 para ficar em baixo e 0 para ficar em cima.
if($pos == 1){
imagecopymerge($img_temp, $img2, 0, $imgY, 0, 0, imagesx($img2), imagesy($img2), 100);
}
else{
imagecopymerge($img_temp, $img2, 0, 0, 0, 0, imagesx($img2), imagesy($img2), 100);
}

// Cria a nova imagem ja com o logo
    ImageJpeg($img_temp, NULL, 100);

// Destroi as imagens temporarias
    ImageDestroY($img);
    ImageDestroY($img2);
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