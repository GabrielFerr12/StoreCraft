# StoreCraft
Site final modulo - Curso TI - The Highway


Aqui está, um dos projetos mais bem elaborados por mim e meu "grupo". trata-se de um site de vendas inspirado em nosso maravilhoso mundo de tibia. O site contém armaduras,espadas, arcos, livros de feitiços e muito mais itens diversos. Tudo começou com a criação das imagens. Cada imagem foi minusiosamente selecionada e desenhada a mão pelos integrantes, desde nossas armas até nosso background, o programa escolhido foi o illustrator, por ser mais prático de desenhar e photoshop para colorir. Em seguida foi criado a Base de nosso site. 
  
  A base contava com : 

  Header: A cabeça chave do site, contendo a logo da loja, opção de busca, carrinho, home, conta, etc;

  Carrossel: uma aba que muda de imagem com uma animação se assemelhando à um carrossel, onde iria mostrar kits de armaduras e pets para compra;

  categories: categorias de compras como armaduras, espadas, arcos, livros, accessórios, entre outros;

  footer: a parte de baixo de nosso site, contendo o nome da marca;


  Nossos produtos foram salvos em id, para que não seja necessário abrir um html para cada produto;
  O carrossel foi feito com javascript, seguindo um exemplo feito por IA.

EXEMPLO: 

HTML:
<div class="carousel">
  <input type="radio" name="slides" id="slide1" checked>
  <input type="radio" name="slides" id="slide2">
  <input type="radio" name="slides" id="slide3">

  <div class="slides">
    <div class="slide"><img src="https://via.placeholder.com/400x200/ff7f7f/000?text=Slide+1"></div>
    <div class="slide"><img src="https://via.placeholder.com/400x200/7fbfff/000?text=Slide+2"></div>
    <div class="slide"><img src="https://via.placeholder.com/400x200/7fff7f/000?text=Slide+3"></div>
  </div>

  <div class="navigation">
    <label for="slide1"></label>
    <label for="slide2"></label>
    <label for="slide3"></label>
  </div>
</div>


CSS:
.carousel {
  width: 400px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.slides {
  width: 300%;
  height: 100%;
  display: flex;
  transition: transform 0.5s;
}

.slide {
  width: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

input[type="radio"] {
  display: none;
}

/* Movimentação do carrossel */
#slide1:checked ~ .slides {
  transform: translateX(0);
}

#slide2:checked ~ .slides {
  transform: translateX(-33.33%);
}

#slide3:checked ~ .slides {
  transform: translateX(-66.66%);
}

/* Navegação */
.navigation {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
}

.navigation label {
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;
}

.navigation label:hover {
  opacity: 1;
}

  
  Todos os botões envolvendo categorias, conta, carrinho, etc foram feitos a partir do htmlef, onde a pagina é redirecionada a partir do momento em que o botão é clicado

  

Com a base e imagens prontas, estava na hora de juntar tudo em um só. Após uma longa batalha contra espaçamentos, posicionamentos e imagens pixeladas, estava na hora de colocar um pouco de vida ao site criando sua própria música, que foi feita completamente do zero por um de nossos integrantes.

os equipamentos utilizados foram:  

- Les Paul Waldman glp-510
- captadores malagoli hh777 e seymour duncan custom
- pedaleira tank G
- cabo santo angelo
- fone

Depois de vários sets gravados, conseguimos o resultado final satisfatório de nosso site integrando a musica com audio control.
