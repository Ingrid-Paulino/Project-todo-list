// Requisito 1
const createHeader = document.createElement('header');
document.body.appendChild(createHeader);
const createH1 = document.createElement('h1');
createHeader.appendChild(createH1).innerText = 'Minha Lista de Tarefas';

// Criando o conteudo
const createMain = document.createElement('main');
document.body.appendChild(createMain);

// Requisito 2
const createParagraph = document.createElement('p');
createMain.appendChild(createParagraph).innerText = 'Clique duas vezes em um item para marcá-lo como completo';
createParagraph.id = 'funcionamento';

// Requisito 3
const createInput = document.createElement('input');
createMain.appendChild(createInput);
createInput.id = 'texto-tarefa';

// Requisito 4
const createListOrder = document.createElement('ol');
createListOrder.id = 'lista-tarefas';
createMain.appendChild(createListOrder);

// Requisito 5 e 6
const createBtn = document.createElement('button');
createMain.appendChild(createBtn).innerText = 'Criar Tarefa';
createBtn.id = 'criar-tarefa';
const inputText = document.getElementById('texto-tarefa');
const btnAddText = document.getElementById('criar-tarefa');

function addText() {
  const text = inputText.value;
  const listItem = document.createElement('li');
  listItem.className = 'lista';
  createListOrder.appendChild(listItem);
  listItem.innerText = text;
  inputText.value = '';
}
btnAddText.addEventListener('click', addText);

// Requisito 7
const listColor = document.getElementById('lista-tarefas');
function colorList(event) {
  const listSelected = document.querySelectorAll('.selected');
  for (let i = 0; i < listSelected.length; i += 1) {
    listSelected[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
listColor.addEventListener('click', colorList);

// Requisito 9
function duploClick(event) {
  event.target.classList.toggle('completed');
}
listColor.addEventListener('dblclick', duploClick);

// Requisito 10
const deleteEvery = document.createElement('button');
deleteEvery.innerText = 'apagar-tudo';
createMain.appendChild(deleteEvery);
deleteEvery.id = 'apaga-tudo';
function deleteList() {
  const deleteLista = document.querySelectorAll('#lista-tarefas>li');
  for (let i = 0; i < deleteLista.length; i += 1) {
    deleteLista[i].parentNode.removeChild(deleteLista[i]);
  }
}
deleteEvery.addEventListener('click', deleteList);

// Requisito 11
const removeFinalizados = document.createElement('button');
removeFinalizados.innerText = 'remover-finalizados';
createMain.appendChild(removeFinalizados);
removeFinalizados.id = 'remover-finalizados';

function deleteFinalizados() {
  const deleteLista = document.querySelectorAll('#lista-tarefas>li');
  for (let i = 0; i < deleteLista.length; i += 1) {
    if (deleteLista[i].classList.contains('completed')) {
      deleteLista[i].parentNode.removeChild(deleteLista[i]);
    }
  }
}
removeFinalizados.addEventListener('click', deleteFinalizados);
