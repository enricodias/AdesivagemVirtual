function adesivar() {
if (document.upload.arquivo.value=="") {
alert("É preciso selecionar um arquivo para Adesivar!")
document.upload.arquivo.focus()
return false
}
}

function popup(pagina, largura, altura) {
  // Definindo meio da tela
   var esquerda = (screen.width - largura)/2;
   var topo = (screen.height - altura)/2;

  // Abre a nova janela 
   window.open(pagina,'','height=' + altura + ', width=' + largura + ', top=' + topo + ', left=' + esquerda); 
}
