function moverImagem(imagemId) {
    var imagem = document.getElementById(imagemId);
  
    if (window.innerWidth <= 1190) {
      if (imagem.style.transform === "") {
        imagem.style.transform = "translateX(-98%)";
      } else {
        imagem.style.transform = "";
      }
    } else {
      if (imagem.style.transform === "") {
        imagem.style.transform = "translateX(-115%)";
      } else {
        imagem.style.transform = "";
      }
    }
  }