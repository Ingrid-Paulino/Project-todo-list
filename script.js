// Requisito 1 - Adicone à sua lista o título "Minha Lista de Tarefas" em uma tag
const createHeader = document.createElement('header');
document.body.appendChild(createHeader);
const createH1 = document.createElement('h1');
createHeader.appendChild(createH1).innerText = 'Minha Lista de Tarefas';

// Criando o conteudo
const createMain = document.createElement('main');
document.body.appendChild(createMain);

// Requisito 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
const createParagraph = document.createElement('p');
createMain.appendChild(createParagraph).innerText = 'Clique duas vezes em um item para marcá-lo como completo';
createParagraph.id = 'funcionamento';

// Requisito 3 - Adicione um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista
const createInput = document.createElement('input');
createMain.appendChild(createInput);
createInput.id = 'texto-tarefa';

// Requisito 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"
const createListOrder = document.createElement('ol');
createListOrder.id = 'lista-tarefas';
createMain.appendChild(createListOrder);

// Requisito 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo e 6 - Ordene os itens da lista de tarefas por ordem de criação
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

// Requisito 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) e 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
const listColor = document.getElementById('lista-tarefas');
function colorList(event) {
  const listSelected = document.querySelectorAll('.selected');
  for (let i = 0; i < listSelected.length; i += 1) {
    listSelected[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
listColor.addEventListener('click', colorList);

// Requisito 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function duploClick(event) {
  event.target.classList.toggle('completed');
}
listColor.addEventListener('dblclick', duploClick);

// Requisito 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
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

// Requisito 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
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


// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
// 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
// 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
