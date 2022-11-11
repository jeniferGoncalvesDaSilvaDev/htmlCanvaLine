console.log('Hello World!');
function desenharLinha(){
  //acessando o id
  let linha = document.getElementById("desenho")
  let contexto = linha.getContext("2d")
  //contexto.fillStyle ="blue"
  //coordenadas x e y iniciais
  contexto.moveTo(0,0)
  //coordenada x e y finais
  contexto.lineTo(600,400)
  //desenha linha
  contexto.stroke()
  
}
