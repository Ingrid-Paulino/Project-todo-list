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
const listText = document.getElementById('lista-tarefas');

function addText() {
  const text = inputText.value;
  const listItem = document.createElement('li');
  listItem.className = 'lista';
  listText.appendChild(listItem);
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

// Requisito 9 -- n deu certo
function duploClick(event) {
  event.target.classList.toggle('completed');
}
listColor.addEventListener('dblclick', duploClick);

// // Requisito 10
// const deleteEvery = document.createElement('button');
// deleteEvery.innerText = 'apagar-tudo';
// createMain.appendChild(deleteEvery);
// deleteEvery.id = 'apagar-tudo';

// const deleteLli = document.querySelectorAll('li');
// const deleteLi = document.getElementsByClassName('lli');
// const btn = document.getElementsByClassName('btn');
// function deleteList() {
//   deleteLli.target.classList.remove(deleteLi);
// }
// btn.addEventListener('click', deleteList);

// const removeFinalizados = document.createElement('button');
// removeFinalizados.innerText = 'remover-finalizados';
// createMain.appendChild(removeFinalizados);
// // removeFinalizados.className = 'remover-finalizados';
// // const removeFi = document.querySelector('.remover-finalizados');
// // function removeFinalizadoss(event) {
// //   deleteLli.target.classList.remove(deleteLi);
// // }
// // removeFi.addEventListener('click', deleteList);
