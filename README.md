# AdesivagemVirtual

Versão melhorada do script para adesivar fotos, usado na eleição presidencial no Brasil em 2010 com o domínio adesivagemvirtual.com.br.

O site em si foi bem feito levando em conta a época que foi criado. O layout responsivo criado inicialmente para funcionar entre as resoluções 800x600 e 1024x768, funciona relativamente bem em resoluções modernas maiores e menores. Ele foi criado com o intuíto de funcionar em qualquer browser e resolução da época (inclusive ie6) e funciona até hoje nos browsers modernos.

## Previews

Na pasta www_br existem previews dos layouts de 3 candidatos a presidente e 1 vereador para serem visualizados localmente. Em cada preview existe um arquivo index que representa a página inicial para o upload do arquivo e um index2 que demonstra como é o recorte da imagem e permite ver como a miniatura fica com todos os adesivos.

No recorte é possível trocar o adesivo da foto clicando em outros adesivos logo abaixo. Essa funcionalidade não é muito intuitiva e provavelmente muitas pessoas reenviaram fotos apenas para modificar o adesivo.

## Deploy

O site era dividido em 2 partes que estão nas pastas www_us e www_br. Uma ficava em um servidor nos EUA com o backend e outra no Brasil com o frontend. Essa separação visava ter uma latência baixa na página inicial e nas imagens e um servidor mais confiável no backend para fazer a edição das imagens.

Na época, servidores no Brasil não eram muito confiáveis e eram consideravelmente mais caros que servidores nos EUA (e ainda são de certa forma). O uso de 2 servidores visava ter um bom custo/benefício, usando um servidor mais simples no Brasil e um melhor nos EUA.

Note que nessa época não existia soluções cloud como Amazon AWS, nem CDNs com presença no Brasil como Google Cloud CDN, Cloudflare e similares

## Fim do site

O objetivo era reutilizar o site para adesivar fotos em todas as eleições futuras, mas foi descontinuado visto a baixa aceitação que teve em 2010. Isso se deu provavelmente devido a novas técnicas de adesivagem, muitas delas integradas as redes sociais e mais fáceis de utilizar. O sucesso da versão de 2006 foi causado provavelmente pela falta de outras soluções ná época, era uma inovação de certa forma.
