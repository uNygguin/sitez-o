
// Seleciona a imagem principal e armazena em uma constante
const imagemPrincipal = document.getElementById('imagem-principal');


// Seleciona todas as miniaturas e armazena em uma constante
const miniaturas = document.querySelectorAll('.miniatura');


// Para cada miniatura, adiciona um evento de clique
miniaturas.forEach(miniatura => {
  // Quando uma miniatura é clicada, essa função é executada
  miniatura.addEventListener('click', function() {
    // Obtém o valor do atributo 'data-imagem' da miniatura clicada
    const novaImagem = this.getAttribute('data-imagem');


    // Atualiza a imagem principal com a nova imagem
    imagemPrincipal.src = novaImagem;
  });
});
