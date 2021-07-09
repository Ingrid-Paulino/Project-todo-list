//Requisito 1
const createHeader = document.createElement('header');
document.body.appendChild(createHeader);
const createH1 = document.createElement('h1');
createHeader.appendChild(createH1).innerText = 'Minha Lista de Tarefas';
//Criando o conteudo
const createMain = document.createElement('main');
document.body.appendChild(createMain);
//Requisito 2
const createParagraph = document.createElement('p');
createMain.appendChild(createParagraph).innerText = 'Clique duas vezes em um item para marcá-lo como completo';
createParagraph.id = 'funcionamento';
//Requisito 3
const createInput = document.createElement('input');
createMain.appendChild(createInput);
createInput.id = 'texto-tarefa'
