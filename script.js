const createHeader = document.createElement('header');
document.body.appendChild(createHeader);
const createH1 = document.createElement('h1');
createHeader.appendChild(createH1).innerText = 'Minha Lista de Tarefas';

const createParagraph = document.createElement('p');
document.body.appendChild(createParagraph).innerText = 'Clique duas vezes em um item para marcá-lo como completo';
createParagraph.id = 'funcionamento';

