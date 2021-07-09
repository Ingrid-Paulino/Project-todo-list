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
createInput.id = 'texto-tarefa';
//Requisito 4
const createListOrder = document.createElement('ol');
createMain.appendChild(createListOrder);
createListOrder.id = 'lista-tarefas';
//Requisito 5
const createBtn = document.createElement('button') 
createMain.appendChild(createBtn).innerText = 'Criar Tarefa';
createBtn.id = 'criar-tarefa'

const inputText = document.getElementById('texto-tarefa')
const btnAddText = document.getElementById('criar-tarefa')
const listText = document.getElementById('lista-tarefas')

function addText() {
    const text = inputText.value;
    const listItem = document.createElement('li');
    listText.appendChild(listItem);
    listItem.innerText = text;
    inputText.value = '';
}
btnAddText.addEventListener('click', addText)